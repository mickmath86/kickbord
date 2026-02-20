import {
  Stethoscope,
  Wrench,
  Home,
  Building2,
} from "lucide-react";

export function SocialProof() {
  return (
    <section className="py-10 border-y border-border bg-muted/50">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-center text-sm font-medium text-muted-foreground mb-6">
          Trusted by contractors, dentists, real estate agents, and more
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Stethoscope size={22} strokeWidth={1.5} />
            <span className="text-sm font-medium">Dental Offices</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Wrench size={22} strokeWidth={1.5} />
            <span className="text-sm font-medium">Home Services</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Building2 size={22} strokeWidth={1.5} />
            <span className="text-sm font-medium">Real Estate</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Home size={22} strokeWidth={1.5} />
            <span className="text-sm font-medium">Chiropractors</span>
          </div>
        </div>
      </div>
    </section>
  );
}
