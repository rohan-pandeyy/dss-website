import BackgroundBeamsDemo from "@/components/background-beams-demo";
import GlobeDemo from "@/components/globe-demo";
import LayoutTextFlipDemo from "@/components/layout-text-flip-demo";

export default function Home() {
  return (
    <div>
      <GlobeDemo />
      <BackgroundBeamsDemo />
      <LayoutTextFlipDemo />
      <div style={{ height: "30vh" }} />
    </div>
  );
}