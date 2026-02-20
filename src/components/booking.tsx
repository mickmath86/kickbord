export function Booking() {
  return (
    <section id="booking" className="py-20 md:py-28 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4 sm:text-4xl">
          See It For Yourself
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          Book a free 15-minute call. We&apos;ll show you exactly how it works
          for your business.
        </p>

        {/* GHL Calendar Embed — replace with actual embed code when provided */}
        <div className="rounded-2xl border border-border bg-muted/50 p-12 flex items-center justify-center min-h-[400px]">
          <p className="text-muted-foreground text-sm">
            {/* PLACEHOLDER_FOR_GHL_EMBED */}
            Calendar embed will appear here.
          </p>
        </div>
      </div>
    </section>
  );
}
