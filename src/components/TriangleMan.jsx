import { SpriteAnimator } from "@react-three/drei";

function TriangleMan({ ...props }) {
  return (
    <SpriteAnimator
      {...props}
      startFrame={0}
      autoPlay={true}
      loop={true}
      scale={1}
      fps={3}
      textureImageURL="/textures/triangle/triangle-1.png"
      textureDataURL="/textures/triangle/triangle-1.json"
      alphaTest={0.01}
    />
  );
}
export default TriangleMan;
