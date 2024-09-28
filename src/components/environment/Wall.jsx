import { useBox } from "@react-three/cannon";
import { RigidBody } from "@react-three/rapier";
import { Box } from "@react-three/drei";
function Wall(props) {
  // const [ref] = useBox(() => ({
  //   type: "Static",
  //   mass: 0,
  //   ...props,
  // }));
  // {props.visible && <meshBasicMaterial color="tomato" />}
  return (
    <RigidBody type="fixed" position={props.position} rotation={props.rotation}>
      <mesh>
        <boxGeometry args={props.args} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
    </RigidBody>
  );
}
export default Wall;
/*
  return (
  <mesh ref={ref}>
    {props.visible && <boxGeometry {...props} />}
    {props.visible && <meshBasicMaterial color={"tomato"} />}
  </mesh>
  )
*/
