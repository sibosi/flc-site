"use client";
import { Card, CardBody } from "@heroui/react";
import Image from "next/image";

export interface EventCardProps {
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
    <Card className={"max-lg:my-2 lg:w-[30%] " + className}>
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
          <div>
            <h3>{title}</h3>
            <p>{date}</p>
            <p>{description}</p>
          </div>
        </CardBody>
      </div>
    </Card>
  );
}
