"use client";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  function navigateToPlataform() {
    router.push("/platform");
  }

  return (
    <div>
      <p>login</p>
      <button onClick={navigateToPlataform}>Entrar</button>
    </div>
  );
}
