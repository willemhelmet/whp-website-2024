import { Canvas } from "@react-three/fiber";
//import { XR, createXRStore } from "@react-three/xr";
import { Suzanne } from "./components/Suzanne.jsx";
import { Smiley } from "./components/Smiley.jsx";
import {
  PointerLockControls,
  KeyboardControls,
  Sky,
  Plane,
  PerspectiveCamera,
} from "@react-three/drei";
import { Physics } from "@react-three/cannon";

function App() {
  return (
    <div className="App">
      <Canvas shadows className="webgl">
        <PerspectiveCamera makeDefault position={[0, 0, 0]} />
        <Sky
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={0.25}
        />
        <ambientLight />
        <pointLight castShadow position={[10, 10, 10]} />
        <Physics gravity={[0, -9.8, 0]}>
          <Plane
            receiveShadow
            args={[100, 100]}
            position={[0, -2, 0]}
            rotation={[-Math.PI * 0.5, 0, 0]}
          >
            <meshStandardMaterial color={"white"} />
          </Plane>
          <Suzanne castShadow position={[0, 0, -5]} />
          <Smiley
            castShadow
            position={[0, 2, -5]}
            rotation={[Math.PI * 0.15, 0, 0]}
          />
        </Physics>
        <PointerLockControls
          onLock={() => console.log("hey")}
          onUnlock={() => console.log("bye")}
        />
      </Canvas>
    </div>
  );
}

export default App;
