import BackgroundBeamsDemo from "@/components/background-beams-demo";
import GlobeDemo from "@/components/globe-demo";
import LayoutTextFlipDemo from "@/components/layout-text-flip-demo";

export default function Home() {
  return (
    <div>
      <GlobeDemo />
      <div id="junior-core-forms-waitlist">
        <BackgroundBeamsDemo />
      </div>
      <LayoutTextFlipDemo />
    </div>
  );
}