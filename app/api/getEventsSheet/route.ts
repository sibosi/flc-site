import { NextResponse } from "next/server";

const SHEET_ID = "19OYyL2MpC_-q-lqHu4qYEeXxfqZyS31XwsjZTr-rGq4";
const RANGE = "Események!A:D";

export async function GET() {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${process.env.GOOGLE_API_KEY}`;
  console.log(url);
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
      console.log(JSON.stringify(response));
      throw new Error(data.error?.message ?? "Failed to fetch data");
    }

    return NextResponse.json(data.values ?? [], {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching data from Google Sheets:", error);
    return NextResponse.json(
      { error: "Failed to fetch data from Google Sheets" },
      { status: 500 },
    );
  }
}
