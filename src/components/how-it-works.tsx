import { Settings, PhoneCall, CalendarCheck } from "lucide-react";

const steps = [
  {
    icon: Settings,
    title: "We set you up in 48 hours",
    description:
      "We configure your AI receptionist with your business details, services, and scheduling preferences. You don't lift a finger.",
  },
  {
    icon: PhoneCall,
    title: "It answers every call, 24/7",
    description:
      "Your AI receptionist picks up instantly, greets callers by name, answers questions, and qualifies leads — day or night.",
  },
  {
    icon: CalendarCheck,
    title: "You get more bookings, zero effort",
    description:
      "Qualified appointments land directly on your calendar. You show up and do what you do best.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-4 sm:text-4xl">
          How It Works
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
          Three steps. No technical setup on your end.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <step.icon size={26} className="text-primary" strokeWidth={1.5} />
              </div>
              <p className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">
                Step {i + 1}
              </p>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
