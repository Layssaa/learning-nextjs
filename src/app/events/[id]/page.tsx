// this is important, because we are using a hook do we need to inform its a client side
"use client"; 

import { useParams } from "next/navigation";

export default function EventInfo() {
  const params = useParams();

  return <div>{params.id}</div>;
}
