import { Plane, useVideoTexture } from "@react-three/drei";

/** TODO:
 * Resize Plane so that video's dimensions are correct
 * Hopefully, this can be done automatically
 * Last resort I put in width and height in props
 */
function PortfolioVideo(props) {
  const videoTexture = useVideoTexture(props.src);
  return (
    <Plane {...props} args={[1, 1]}>
      <meshBasicMaterial map={videoTexture} toneMapped={false} />
    </Plane>
  );
}

export default PortfolioVideo;
