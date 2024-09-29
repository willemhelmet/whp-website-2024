import { Canvas } from "@react-three/fiber";
import { Loader, KeyboardControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";

import Joystick from "./components/player/Joystick.jsx";

import World from "./components/environment/World.jsx";
import Lighting from "./components/environment/Lighting.jsx";
import Player from "./components/player/Player.jsx";

import { Suspense } from "react";

function App() {
  const keyboardControlsMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
  ];

  return (
    <div className="App">
      <Joystick />
      <Canvas shadows className="webgl">
        <Lighting />
        <Suspense>
          <Physics gravity={[0, -9.8, 0]}>
            <KeyboardControls map={keyboardControlsMap}>
              <Player />
              <World />
            </KeyboardControls>
          </Physics>
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
}

export default App;
