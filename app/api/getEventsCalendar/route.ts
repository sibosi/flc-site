import { NextResponse } from "next/server";

const CALENDAR_ID =
  "917b3a16b2011a79c58bf263f7e2d89082f1da821031c94a979fd1ded3d316b9@group.calendar.google.com";
const API_KEY = process.env.GOOGLE_API_KEY;

export async function GET() {
  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
    CALENDAR_ID,
  )}/events?key=${API_KEY}&singleEvents=true&orderBy=startTime`;
  console.log(url);

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
      console.log(JSON.stringify(response)); // Log the full response for debugging
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
