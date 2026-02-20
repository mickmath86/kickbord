import { XCircle, CheckCircle } from "lucide-react";

const problems = [
  "Calls go to voicemail after hours",
  "Missed calls on weekends and lunch breaks",
  "Potential customers hang up and call your competitor",
  "Revenue slips through the cracks every single day",
];

const solutions = [
  "AI answers every call instantly, 24/7/365",
  "Qualifies leads and captures contact info",
  "Books appointments directly on your calendar",
  "Never sick, never tired, never takes a day off",
];

export function ProblemSolution() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-4 sm:text-4xl">
          The Problem — And the Fix
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
          Every missed call is a missed customer. Here&apos;s how Kickbord changes that.
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Problem */}
          <div className="rounded-2xl border border-red-200 bg-red-50/50 p-8">
            <h3 className="text-lg font-semibold text-red-700 mb-6">
              Without Kickbord
            </h3>
            <ul className="space-y-4">
              {problems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle
                    size={20}
                    className="text-red-400 mt-0.5 shrink-0"
                  />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
            <h3 className="text-lg font-semibold text-primary mb-6">
              With Kickbord
            </h3>
            <ul className="space-y-4">
              {solutions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="text-primary mt-0.5 shrink-0"
                  />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
