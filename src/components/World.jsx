//import Floor from "./Floor.jsx";
import { Suzanne } from "./Suzanne";
import { Smiley } from "./Smiley";
import { Sky } from "@react-three/drei";
import PortfolioImage from "./PortfolioImage.jsx";
import PortfolioVideo from "./PortfolioVideo.jsx";
import { JNL } from "./JNL.jsx";

import { useControls } from "leva";

function World() {
  const { x, z } = useControls({
    x: {
      value: 0,
      min: -20,
      max: 20,
      step: 0.05,
    },
    z: {
      value: 0,
      min: -20,
      max: 20,
      step: 0.05,
    },
  });
  return (
    <group>
      <JNL />
      <Suzanne
        castShadow
        scale={[0.25, 0.25, 0.25]}
        position={[-1.75, 0, -9]}
        rotation={[0, Math.PI * 0.5, 0]}
      />
      <Smiley
        scale={[0.25, 0.25, 0.25]}
        rotation={[0, Math.PI * 0.5, 0]}
        castShadow
        position={[-1.75, 0, -8]}
      />
      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />
      {/* Verizon 5G Stadium in Fortnite */}
      <PortfolioImage
        position={[-1.3, 0.25, -13.35]}
        scale={[1.5, 1.5, 1.5]}
        src={"/portfolio/5g-stadium.png"}
      />
      <PortfolioImage
        position={[-2.1, 0.25, -12.1]}
        rotation={[0, Math.PI * 0.5, 0]}
        scale={[1.5, 1.5, 1.5]}
        src={"/portfolio/5g-fortnite-pic.png"}
      />
      {/* Hackathons */}
      <PortfolioImage
        position={[-5, 0, -7.5]}
        src={"/portfolio/hack-sommilar.jpg"}
      />
      {/* Nike Watch Her Glow */}
      <PortfolioVideo
        position={[-6, 0, -7.5]}
        width={410}
        height={250}
        scale={0.05}
        src={"/portfolio/nike-color-bars.webm"}
      />
      <PortfolioVideo
        position={[-8, 1.5, -7.5]}
        width={960}
        height={512}
        scale={0.05}
        src={"/portfolio/nike-glowing-up.webm"}
      />
      <PortfolioVideo
        position={[-7.7, 0, -7.5]}
        width={512}
        height={512}
        scale={0.05}
        src={"/portfolio/nike-watch-her-glow.webm"}
      />
      <PortfolioVideo
        position={[-9, 0, -7.5]}
        width={360}
        height={640}
        scale={0.05}
        src={"/portfolio/nike-ar-filter.webm"}
      />
      {/* Snap Lenses */}
      <PortfolioVideo
        position={[-11, 0, -7.5]}
        width={320}
        height={576}
        scale={0.05}
        src={"/portfolio/snap-elephant-body.webm"}
      />
      <PortfolioVideo
        position={[-12, 0, -7.5]}
        width={269}
        height={480}
        scale={0.05}
        src={"/portfolio/snap-eyebrows.webm"}
      />
      <PortfolioVideo
        position={[-13, 0, -7.5]}
        width={267}
        height={480}
        scale={0.05}
        src={"/portfolio/snap-relighting.webm"}
      />
      <PortfolioVideo
        position={[-14, 0, -7.5]}
        width={267}
        height={480}
        scale={0.05}
        src={"/portfolio/snap-watch.webm"}
      />
      {/* Vision pro */}
      <PortfolioVideo
        position={[-16, 0, -7.5]}
        width={640}
        height={480}
        scale={0.05}
        src={"/portfolio/vp-apollo-11-1.webm"}
      />
      <PortfolioVideo
        position={[-18, 0, -7.5]}
        width={640}
        height={480}
        scale={0.05}
        src={"/portfolio/vp-apollo-11-2.webm"}
      />
      <PortfolioVideo
        position={[-20, 0, -7.5]}
        width={640}
        height={480}
        scale={0.05}
        src={"/portfolio/vp-apollo-11-3.webm"}
      />
      {/* VR */}
      <PortfolioVideo
        position={[-22, 1, -7.5]}
        width={512}
        height={256}
        scale={0.05}
        src={"/portfolio/vr-cave-1.webm"}
      />
      <PortfolioVideo
        position={[-24, 1, -7.5]}
        width={512}
        height={256}
        scale={0.05}
        src={"/portfolio/vr-cave-2.webm"}
      />
      <PortfolioVideo
        position={[-26, 1, -7.5]}
        width={512}
        height={256}
        scale={0.05}
        src={"/portfolio/vr-sillytown-1.webm"}
      />
      <PortfolioVideo
        position={[-22, 0, -7.5]}
        width={512}
        height={256}
        scale={0.05}
        src={"/portfolio/vr-sillytown-2.webm"}
      />
      <PortfolioVideo
        position={[-24, 0, -7.5]}
        width={512}
        height={256}
        scale={0.05}
        src={"/portfolio/vr-sillytown-3.webm"}
      />
    </group>
  );
}

export default World;
