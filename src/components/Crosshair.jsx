import { extend } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { CrosshairMaterial } from "../modules/shaders/CrosshairMaterial";
import { useMyStore } from "../utils/store";

function Crosshair() {
  const { crosshairVisible } = useMyStore();

  extend({ CrosshairMaterial });

  return (
    <group>
      <motion.mesh
        position={[0, 0, -10.11]}
        animate={{ scale: crosshairVisible ? 1 : 0 }}
      >
        <planeGeometry args={[1, 1]} />
        <crosshairMaterial
          size={0.1}
          thickness={0.02}
          depthTest={false}
          depthWrite={false}
          transparent={true}
        />
      </motion.mesh>
    </group>
  );
}

export default Crosshair;
