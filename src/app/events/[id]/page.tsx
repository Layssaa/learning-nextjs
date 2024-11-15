"use client"; //<- this is important, because whe are using a hook
//so we need to inform its a client side
import { useParams } from "next/navigation";

export default function EventInfo() {
  const params = useParams();

  return <div>{params.id}</div>;
}
