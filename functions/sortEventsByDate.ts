import { EventCardType } from "@/components/ui/EventCard";

export default function sortEventsByDate(
  events: EventCardType[],
  reverse = false,
): EventCardType[] {
  return events.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return reverse
      ? dateB.getTime() - dateA.getTime()
      : dateA.getTime() - dateB.getTime();
  });
}
