import Floor from "./Floor.jsx";
import { Suzanne } from "./Suzanne";
import { Smiley } from "./Smiley";
import { Sky } from "@react-three/drei";
import PortfolioImage from "./PortfolioImage.jsx";
import PortfolioVideo from "./PortfolioVideo.jsx";

function World() {
  return (
    <group>
      <Floor />
      <Suzanne castShadow position={[0, 0, -7.5]} />
      <Smiley
        castShadow
        position={[0, 2, -7.5]}
        rotation={[Math.PI * 0.15, 0, 0]}
      />
      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />
      {/* Verizon 5G Stadium in Fortnite */}
      <PortfolioImage
        position={[-3, 0, -7.5]}
        src={"/portfolio/5g-stadium.png"}
      />
      <PortfolioImage
        position={[-4, 0, -7.5]}
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
        src={"/portfolio/nike-color-bars.webm"}
      />
      <PortfolioVideo
        position={[-7, 0, -7.5]}
        src={"/portfolio/nike-glowing-up.webm"}
      />
      <PortfolioVideo
        position={[-8, 0, -7.5]}
        src={"/portfolio/nike-watch-her-glow.webm"}
      />
      <PortfolioVideo
        position={[-9, 0, -7.5]}
        src={"/portfolio/nike-ar-filter.webm"}
      />
      {/* Snap Lenses */}
      <PortfolioVideo
        position={[-11, 0, -7.5]}
        src={"/portfolio/snap-elephant-body.webm"}
      />
      <PortfolioVideo
        position={[-12, 0, -7.5]}
        src={"/portfolio/snap-eyebrows.webm"}
      />
      <PortfolioVideo
        position={[-13, 0, -7.5]}
        src={"/portfolio/snap-relighting.webm"}
      />
      <PortfolioVideo
        position={[-14, 0, -7.5]}
        src={"/portfolio/snap-watch.webm"}
      />
      {/* Vision pro */}
      <PortfolioVideo
        position={[-16, 0, -7.5]}
        src={"/portfolio/vp-apollo-11-1.webm"}
      />
      <PortfolioVideo
        position={[-17, 0, -7.5]}
        src={"/portfolio/vp-apollo-11-2.webm"}
      />
      <PortfolioVideo
        position={[-18, 0, -7.5]}
        src={"/portfolio/vp-apollo-11-3.webm"}
      />
      {/* VR */}
      <PortfolioVideo
        position={[-20, 0, -7.5]}
        src={"/portfolio/vr-cave-1.webm"}
      />
      <PortfolioVideo
        position={[-21, 0, -7.5]}
        src={"/portfolio/vr-cave-2.webm"}
      />
      <PortfolioVideo
        position={[-22, 0, -7.5]}
        src={"/portfolio/vr-sillytown-1.webm"}
      />
      <PortfolioVideo
        position={[-23, 0, -7.5]}
        src={"/portfolio/vr-sillytown-2.webm"}
      />
      <PortfolioVideo
        position={[-24, 0, -7.5]}
        src={"/portfolio/vr-sillytown-3.webm"}
      />
    </group>
  );
}

export default World;
