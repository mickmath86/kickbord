"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold tracking-tight text-foreground">
          Kickbord
        </a>

        <a href="#booking" className="hidden sm:block">
          <Button size="default">Book a Free Call</Button>
        </a>

        <button
          className="sm:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="sm:hidden border-t border-border bg-white px-6 py-4">
          <a href="#booking" onClick={() => setMobileOpen(false)}>
            <Button size="default" className="w-full">
              Book a Free Call
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
}
