import BackgroundBeamsDemo from "@/components/background-beams-demo";
import GlobeDemo from "@/components/globe-demo";
import LayoutTextFlipDemo from "@/components/layout-text-flip-demo";

export default function Home() {
  return (
    <div>
      <GlobeDemo />
      <div id="whats-hot">
        <BackgroundBeamsDemo />
      </div>
      <LayoutTextFlipDemo />
    </div>
  );
}