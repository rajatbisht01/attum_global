// app/not-found.tsx
"use client";

import FuzzyText from "@/components/ui/FuzzyText"; // adjust the path
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-card-foreground text-brand">
      <FuzzyText 
        baseIntensity={0.2} 
        hoverIntensity={0.6} 
        enableHover={true}
        color="#2764f2"
      >
        404
      </FuzzyText>
              <p className="mt-4 text-xl font-semibold">Page not found.</p>

      <Link
        href="/"
        className="mt-6 px-4 py-2  bg-brand text-black rounded-xl hover:scale-110 transition"
      >
        Go Home
      </Link>
    </main>
  );
}
