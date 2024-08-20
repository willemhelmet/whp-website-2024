import { Plane, useTexture } from "@react-three/drei";

/** TODO:
 * come up with an elegant solution to
 * keep images in their proper proprtions
 * while still having control over its scale
 */
function PortfolioImage(props) {
  const texture = useTexture(props.src);
  const width = texture.source.data.naturalWidth * 0.001;
  const height = texture.source.data.naturalHeight * 0.001;
  return (
    <group {...props}>
      <Plane args={[width, height]}>
        <meshBasicMaterial map={texture} transparent={true} />
      </Plane>
    </group>
  );
}

export default PortfolioImage;
