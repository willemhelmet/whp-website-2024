/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 Suzanne.glb --transform 
Files: Suzanne.glb [356.38KB] > /Users/whp/Documents/HTML/whp-website-2024/public/models/Suzanne-transformed.glb [51.71KB] (85%)
*/
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";

import { pisaEnvMap } from "../modules/envMaps";
import { useMyStore } from "../utils/store";

export function Suzanne(props) {
  const { nodes, materials } = useGLTF("/models/Suzanne-transformed.glb");
  const ref = useRef();

  const { count, inc, setCrosshairVisibility } = useMyStore();

  // Since I did not create a material, we have to use [""] to
  // reference the MeshStandardMaterial that is auto-generated for us.
  materials[""].envMap = pisaEnvMap;

  function testMyStore() {
    console.log("Count: " + count);
    inc();
  }

  return (
    <group {...props} dispose={null}>
      <motion.mesh
        ref={ref}
        geometry={nodes.Suzanne.geometry}
        material={materials[""]}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onPointerOver={() => setCrosshairVisibility(true)}
        onPointerOut={() => setCrosshairVisibility(false)}
        onClick={() => testMyStore()}
      />
    </group>
  );
}

useGLTF.preload("/models/Suzanne-transformed.glb");
