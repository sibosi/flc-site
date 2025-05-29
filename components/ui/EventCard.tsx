"use client";
import { Card, CardBody } from "@heroui/react";
import Image from "next/image";

export interface EventCardType {
  title: string;
  description: string;
  date: string;
  displayDate: string;
  image?: string;
}

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  image?: string;
}

export function EventCard({
  title,
  description,
  date,
  image,
  className,
}: Readonly<EventCardProps> & { className?: string }) {
  return (
    <Card className={" " + className}>
      <div className="items-center gap-4 sm:flex lg:block">
        <div className="relative h-48 w-full sm:h-full sm:w-48 lg:h-48 lg:w-full">
          <Image
            src={image ?? "/FLC logo.png"}
            fill={true}
            alt={title}
            className="rounded-xl object-cover"
          />
        </div>
        <CardBody>
          <div className="pb-2 pt-0 sm:pt-2 lg:pt-0">
            <p className="text-4xl font-medium">{title}</p>
            <p className="mb-1.5 mt-1 font-semibold text-foreground-700">
              {date}
            </p>
            <p>{description}</p>
          </div>
        </CardBody>
      </div>
    </Card>
  );
}
