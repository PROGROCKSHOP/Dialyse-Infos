"use client";

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <body className="antialiased min-h-screen flex flex-col" suppressHydrationWarning>
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </body>
  );
}
