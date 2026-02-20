import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "AI Receptionist",
    price: "$497",
    description: "Everything you need to stop missing calls.",
    featured: false,
    features: [
      "24/7 AI call answering",
      "Lead qualification",
      "Appointment booking",
      "Call summaries & transcripts",
      "Custom greeting & scripts",
    ],
  },
  {
    name: "Complete Bundle",
    price: "$996",
    description: "AI receptionist plus full marketing support.",
    featured: true,
    badge: "Best Value",
    features: [
      "Everything in AI Receptionist",
      "Website & landing pages",
      "Reputation management",
      "SMS & email follow-up",
      "Dedicated account manager",
    ],
  },
];

export function Pricing() {
  return (
    <section className="py-20 md:py-28 px-6 bg-muted/50">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-4 sm:text-4xl">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
          Month to month. No contracts. Cancel anytime.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.featured
                  ? "border-primary bg-white shadow-lg shadow-primary/10"
                  : "border-border bg-white"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-8 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}

              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {plan.description}
              </p>

              <p className="mt-6 mb-8">
                <span className="text-4xl font-bold tracking-tight">
                  {plan.price}
                </span>
                <span className="text-muted-foreground text-sm">/month</span>
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="text-primary mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-foreground/80">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a href="#booking">
                <Button
                  variant={plan.featured ? "default" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Book a Free Call
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
