import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl leading-[1.1]">
          Your Business Is Open.
          <br />
          <span className="text-primary">Is Your Phone?</span>
        </h1>

        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Kickbord is the AI receptionist that answers every call, qualifies
          every lead, and books appointments automatically — 24 hours a day,
          7 days a week. Never miss another customer.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#booking">
            <Button size="lg" className="text-base px-8 h-12">
              Book a Free Call
            </Button>
          </a>
          <a href="#demo">
            <Button variant="outline" size="lg" className="text-base px-8 h-12">
              <Phone size={18} />
              Hear the Demo
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
