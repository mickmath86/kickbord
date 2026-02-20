import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { SocialProof } from "@/components/social-proof";
import { ProblemSolution } from "@/components/problem-solution";
import { Stats } from "@/components/stats";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { Booking } from "@/components/booking";
import { KickbordFooter } from "@/components/kickbord-footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ProblemSolution />
        <Stats />
        <HowItWorks />
        <Pricing />
        <Booking />
      </main>
      <KickbordFooter />
    </>
  );
}
