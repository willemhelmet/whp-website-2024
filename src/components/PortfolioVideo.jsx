import { Plane, useVideoTexture } from "@react-three/drei";
import { useMyStore } from "../utils/store";

/** TODO:
 * Resize Plane so that video's dimensions are correct
 * Hopefully, this can be done automatically
 * Last resort I put in width and height in props
 */
function PortfolioVideo(props) {
  const videoTexture = useVideoTexture(props.src);
  const size = [props.width * props.scale, props.height * props.scale];
  const { setCrosshairVisibility } = useMyStore();
  return (
    <Plane
      {...props}
      args={size}
      onPointerOver={() => setCrosshairVisibility(true)}
      onPointerOut={() => setCrosshairVisibility(false)}
    >
      <meshBasicMaterial map={videoTexture} toneMapped={false} />
    </Plane>
  );
}

export default PortfolioVideo;
