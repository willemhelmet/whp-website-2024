import Floor from "./Floor.jsx";
import { Suzanne } from "./Suzanne";
import { Smiley } from "./Smiley";
import { Sky } from "@react-three/drei";
import PortfolioImage from "./PortfolioImage.jsx";

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
      {/* Looks like GIFs do not work */}
      <PortfolioImage
        position={[-6, 0, -7.5]}
        src={"/portfolio/nike-color-bars.gif"}
      />
    </group>
  );
}

export default World;
