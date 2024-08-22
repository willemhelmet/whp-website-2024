/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 JNL.glb --transform
Files: JNL.glb [1.27MB] > /Users/whp/Desktop/JNL/JNL Blender/Exports/JNL-transformed.glb [85.73KB] (93%)
*/

import React from "react";
import { useGLTF } from "@react-three/drei";
import { pisaEnvMap } from "../modules/envMaps";
import {
  matCap1,
  matCap2,
  matCap3,
  matCap4,
  matCap5,
  matCap6,
  matCap7,
  matCap8,
} from "../modules/matcapMats";

export function JNL(props) {
  const { nodes, materials } = useGLTF("/models/JNL-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        receiveShadow
        geometry={nodes.Loft_Handrails_02.geometry}
        rotation={[0, Math.PI / 2, 0]}
        position={[0, -1, 0]}
      >
        {/*<meshStandardMaterial envMap={pisaEnvMap} />*/}
        <meshMatcapMaterial matcap={matCap8} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/JNL-transformed.glb");
