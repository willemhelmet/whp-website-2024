import { RigidBody } from "@react-three/rapier";

export default function Floor() {
  //<Plane args={[50, 50]} rotation={[-Math.PI * 0.5, 0, 0]} />
  return (
    <RigidBody type="fixed" position={[0, -1.5, 0]}>
      <mesh>
        <boxGeometry args={[15, 1, 30]} />
      </mesh>
    </RigidBody>
  );
}
