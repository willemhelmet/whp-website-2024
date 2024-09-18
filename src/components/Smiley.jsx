/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 smile.glb --transform
Files: smile.glb [30.77KB] > /Users/whp/Documents/HTML/whp-website-2024/public/models/smile-transformed.glb [4.97KB] (84%)
*/
import { Float, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { motion } from "framer-motion-3d";
import { useMyStore } from "../utils/store";

export default function Smiley(props) {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/models/smile-transformed.glb");
  const { setCrosshairVisibility } = useMyStore();
  return (
    <group {...props} dispose={null}>
      <Float speed={2} rotationIntensity={3} floatIntensity={2.2}>
        <motion.mesh
          ref={ref}
          castShadow
          animate={{ rotateY: Math.PI * 2 }}
          transition={{ ease: "linear", repeat: Infinity, duration: 3.5 }}
          geometry={nodes.Smile.geometry}
          material={materials.Material}
          onPointerOver={() => setCrosshairVisibility(true)}
          onPointerOut={() => setCrosshairVisibility(false)}
        />
      </Float>
    </group>
  );
}

useGLTF.preload("/models/smile-transformed.glb");
