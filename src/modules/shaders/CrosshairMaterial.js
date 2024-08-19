import { shaderMaterial } from "@react-three/drei";

export const CrosshairMaterial = shaderMaterial(
  { size: 0.25, thickness: 0.1 },
  // vertex shader
  /*glsl*/ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // fragment shader
  /*glsl*/ `
    uniform float size;
    uniform float thickness;
    varying vec2 vUv;
    void main() {
      float strength = 1.0 - step(thickness, abs(distance(vUv, vec2(0.5)) - size));
      gl_FragColor = vec4(strength);
    }
  `
);
