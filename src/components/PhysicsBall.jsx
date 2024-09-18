import { useSphere } from "@react-three/cannon";

function PhysicsBall(props) {
  const [ref, api] = useSphere(() => ({
    mass: 1,
    position: [2, 5, -5],
  }));
  return (
    <mesh ref={ref}>
      <sphereGeometry />
      <meshBasicMaterial color={"hotpink"} />
    </mesh>
  );
}

export default PhysicsBall;
