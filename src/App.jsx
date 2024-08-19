import { Canvas } from "@react-three/fiber";
import { Sky, PointerLockControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";

import { Suzanne } from "./components/Suzanne.jsx";
import { Smiley } from "./components/Smiley.jsx";
import Floor from "./components/Floor.jsx";
import Lighting from "./components/Lighting.jsx";
import Player from "./components/Player.jsx";
import { useMyStore } from "./utils/store.js";
import { useEffect } from "react";

function App() {
  const { isMouseCaptured, setIsMouseCaptured } = useMyStore();

  useEffect(() => {
    console.log("isMouseCaptured: " + isMouseCaptured);
  }, [isMouseCaptured]);

  return (
    <div className="App">
      <Canvas shadows className="webgl">
        <Player />
        <Sky
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={0.25}
        />
        <Lighting />
        <Physics gravity={[0, -9.8, 0]}>
          <Floor />
          <Suzanne castShadow position={[0, 0, -7.5]} />
          <Smiley
            castShadow
            position={[0, 2, -7.5]}
            rotation={[Math.PI * 0.15, 0, 0]}
          />
        </Physics>
        <PointerLockControls
          onLock={() => setIsMouseCaptured(true)}
          onUnlock={() => setIsMouseCaptured(false)}
        />
      </Canvas>
    </div>
  );
}

export default App;
