//import Floor from "./Floor.jsx";
import { Suzanne } from "./Suzanne";
import { Smiley } from "./Smiley";
import { Sky } from "@react-three/drei";
import PortfolioImage from "./PortfolioImage.jsx";
import PortfolioVideo from "./PortfolioVideo.jsx";
import { JNL } from "./JNL.jsx";

import { useControls } from "leva";

function World() {
  const { x, y, z } = useControls({
    x: {
      value: 0,
      min: -20,
      max: 20,
      step: 0.01,
    },
    y: {
      value: 0,
      min: 0,
      max: 4,
      step: 0.01,
    },
    z: {
      value: 0,
      min: -20,
      max: 20,
      step: 0.01,
    },
  });
  return (
    <group>
      <JNL />
      {/*<Suzanne
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
      />*/}
      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />
      {/* Hackathons */}
      <PortfolioImage
        position={[3.17, 0.25, -13.35]}
        src={"/portfolio/hack-sommilar.jpg"}
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
      {/* Nike Watch Her Glow */}
      <PortfolioVideo
        position={[-2.09, 0, -9.84]}
        rotation={[0, Math.PI * 0.5, 0]}
        width={410}
        height={250}
        scale={0.05}
        src={"/portfolio/nike-color-bars.webm"}
      />
      <PortfolioVideo
        position={[-2.09, 0, -8.43]}
        rotation={[0, Math.PI * 0.5, 0]}
        width={960}
        height={512}
        scale={0.04}
        src={"/portfolio/nike-glowing-up.webm"}
      />
      <PortfolioVideo
        position={[-1.2, 0.25, -6]}
        rotation={[0, Math.PI * 0.5, 0]}
        width={512}
        height={512}
        scale={0.05}
        src={"/portfolio/nike-watch-her-glow.webm"}
      />
      <PortfolioVideo
        position={[-1.2, 0, -4.5]}
        rotation={[0, Math.PI * 0.5, 0]}
        width={360}
        height={640}
        scale={0.05}
        src={"/portfolio/nike-ar-filter.webm"}
      />
      {/* Snap Lenses */}
      <PortfolioVideo
        position={[6.75, 0.2, -1.9]}
        rotation={[0, -Math.PI * 0.5, 0]}
        width={320}
        height={576}
        scale={0.05}
        src={"/portfolio/snap-elephant-body.webm"}
      />
      <PortfolioVideo
        position={[6.75, 0.2, -2.9]}
        rotation={[0, -Math.PI * 0.5, 0]}
        width={269}
        height={480}
        scale={0.05}
        src={"/portfolio/snap-eyebrows.webm"}
      />
      <PortfolioVideo
        position={[6.75, 0.2, -3.9]}
        rotation={[0, -Math.PI * 0.5, 0]}
        width={267}
        height={480}
        scale={0.05}
        src={"/portfolio/snap-relighting.webm"}
      />
      <PortfolioVideo
        position={[6.75, 0.2, -4.9]}
        rotation={[0, -Math.PI * 0.5, 0]}
        width={267}
        height={480}
        scale={0.05}
        src={"/portfolio/snap-watch.webm"}
      />
      {/* Vision pro */}
      <PortfolioVideo
        position={[2.35, 0.2, 0.37]}
        rotation={[0, Math.PI, 0]}
        width={640}
        height={480}
        scale={0.05}
        src={"/portfolio/vp-apollo-11-1.webm"}
      />
      <PortfolioVideo
        position={[4.05, 0.2, 0.37]}
        rotation={[0, Math.PI, 0]}
        width={640}
        height={480}
        scale={0.05}
        src={"/portfolio/vp-apollo-11-2.webm"}
      />
      <PortfolioVideo
        position={[5.75, 0.2, 0.37]}
        rotation={[0, Math.PI, 0]}
        width={640}
        height={480}
        scale={0.05}
        src={"/portfolio/vp-apollo-11-3.webm"}
      />
      {/* VR */}
      <PortfolioVideo
        position={[6.75, 0.77, -12.73]}
        rotation={[0, -Math.PI * 0.5, 0]}
        width={512}
        height={256}
        scale={0.05}
        src={"/portfolio/vr-cave-1.webm"}
      />
      <PortfolioVideo
        position={[6.75, 0.07, -12.73]}
        rotation={[0, -Math.PI * 0.5, 0]}
        width={512}
        height={256}
        scale={0.05}
        src={"/portfolio/vr-cave-2.webm"}
      />
      <PortfolioVideo
        position={[6.75, 0.07, -11.375]}
        rotation={[0, -Math.PI * 0.5, 0]}
        width={512}
        height={256}
        scale={0.05}
        src={"/portfolio/vr-sillytown-1.webm"}
      />
      <PortfolioVideo
        position={[6.75, 0.77, -11.375]}
        rotation={[0, -Math.PI * 0.5, 0]}
        width={512}
        height={256}
        scale={0.05}
        src={"/portfolio/vr-sillytown-2.webm"}
      />
      <PortfolioVideo
        position={[6.75, 0.07, -10.02]}
        rotation={[0, -Math.PI * 0.5, 0]}
        width={512}
        height={256}
        scale={0.05}
        src={"/portfolio/vr-sillytown-3.webm"}
      />
    </group>
  );
}

export default World;
