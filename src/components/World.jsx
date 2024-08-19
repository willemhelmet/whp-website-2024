import Floor from "./Floor.jsx";
import { Suzanne } from "./Suzanne";
import { Smiley } from "./Smiley";
import { Sky } from "@react-three/drei";

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
    </group>
  );
}

export default World;
