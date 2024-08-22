import { extend } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { CrosshairMaterial } from "../modules/shaders/CrosshairMaterial";
import { useMyStore } from "../utils/store";
import { useEffect } from "react";

function Crosshair() {
  const { crosshairVisible, crosshairScale, crosshairActions } = useMyStore();

  extend({ CrosshairMaterial });

  useEffect(() => {
    const handleMouseDown = (event) => crosshairActions.setCrosshairScale(0.7);
    const handleMouseUp = (event) => crosshairActions.setCrosshairScale(1);

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <group>
      <motion.mesh
        position={[0, 0, -10.11]}
        animate={{ scale: crosshairVisible ? crosshairScale : 0 }}
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
