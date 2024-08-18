import * as THREE from "three";
export const pisaEnvMap = new THREE.CubeTextureLoader()
  .setPath(["/textures/environments/pisa/"])
  .load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);
