import { usePlane } from "@react-three/cannon";

export default function Floor() {
  const [ref] = usePlane(() => ({
    type: "Static",
    mass: 0,
    position: [0, -1, 0],
    rotation: [-Math.PI * 0.5, 0, 0],
  }));
  return <mesh ref={ref}></mesh>;
}
