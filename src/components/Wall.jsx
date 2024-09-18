import { useBox } from "@react-three/cannon";
function Wall(props) {
  const [ref] = useBox(() => ({
    type: "Static",
    mass: 0,
    ...props,
  }));
  // {props.visible && <meshBasicMaterial color="tomato" />}
  return (
    <mesh ref={ref}>
      {props.visible && <boxGeometry {...props} />}
      {props.visible && <meshBasicMaterial color={"tomato"} />}
    </mesh>
  );
}
export default Wall;
