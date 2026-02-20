export function Stats() {
  return (
    <section className="py-20 md:py-28 px-6 bg-muted/50">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4 sm:text-4xl">
          The Cost of Silence
        </h2>
        <p className="text-muted-foreground mb-14 max-w-2xl mx-auto">
          When your phone rings and nobody answers, money walks out the door.
        </p>

        <div className="grid sm:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-border">
            <p className="text-4xl font-bold text-primary md:text-5xl">35%</p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              of inbound calls to small businesses go unanswered
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-border">
            <p className="text-4xl font-bold text-primary md:text-5xl">
              $200–$2k
            </p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              average lifetime value of each missed customer
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-border">
            <p className="text-4xl font-bold text-primary md:text-5xl">85%</p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              of callers who reach voicemail will never call back
            </p>
          </div>
        </div>

        <p className="mt-12 text-muted-foreground max-w-xl mx-auto">
          Even one recovered customer per week pays for Kickbord many times
          over. The math is simple.
        </p>
      </div>
    </section>
  );
}
