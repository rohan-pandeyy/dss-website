import { BackgroundBeamsDemo } from "@/components/background-beams-demo";
import GlobeDemo from "@/components/globe-demo";

export default function Home() {
  return (
    <div>
      <GlobeDemo />
      <BackgroundBeamsDemo />
      <div style={{ height: "200vh" }} />
    </div>
  );
}