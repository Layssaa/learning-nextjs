"use client";
import { useParams } from "next/navigation";

export default function EventPage() {
  const { id } = useParams();
  return <div>{id}</div>;
}
