import { Plane, useVideoTexture } from "@react-three/drei";

/** TODO:
 * Resize Plane so that video's dimensions are correct
 */
function PortfolioVideo(props) {
  const videoTexture = useVideoTexture(props.src);
  console.log(videoTexture);
  return (
    <Plane {...props} args={[1, 1]}>
      <meshBasicMaterial map={videoTexture} toneMapped={false} />
    </Plane>
  );
}

export default PortfolioVideo;
