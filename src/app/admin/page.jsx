"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import MainNav from "./MainNav";

export default function page() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/admin/login");
    }
  }, []);

  return (
    <div>
      <MainNav />

    </div>
  );
}