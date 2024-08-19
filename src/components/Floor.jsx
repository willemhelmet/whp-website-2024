import { Plane } from "@react-three/drei";

export default function Floor() {
  return (
    <Plane
      receiveShadow
      args={[100, 100]}
      position={[0, -2, 0]}
      rotation={[-Math.PI * 0.5, 0, 0]}
    >
      <meshBasicMaterial color={"grey"} />
    </Plane>
  );
}
