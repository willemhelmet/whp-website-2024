import { Text, Plane } from "@react-three/drei";
// TODO:
// Create a design for the title and body
// fonts, colors, backgrounds, etc.
// figure out how to handle text with arbitrary lengths (overflow?)
// Come up with a better name "Plaquard"?
function Poster({ ...props }) {
  return (
    <group {...props}>
      <Text position={[0, 0.5, 0]} fontSize={0.2} maxWidth={2} color={"black"}>
        {props.title}
      </Text>
      <Text
        maxWidth={2}
        whiteSpace={"normal"}
        position={[0, -0.2, 0]}
        fontSize={0.06}
        color={"black"}
      >
        {props.body}
      </Text>
      <Plane position={[0, 0, -0.001]} args={[2, 1.5, 1, 1]} />
    </group>
  );
}
export default Poster;
