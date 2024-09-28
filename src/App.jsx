import { Canvas } from "@react-three/fiber";
import { Loader, KeyboardControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";

import Joystick from "./components/player/Joystick.jsx";

import World from "./components/environment/World.jsx";
import Lighting from "./components/environment/Lighting.jsx";

import Ecctrl from "ecctrl";
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
      <KeyboardControls map={keyboardControlsMap}>
        <Canvas shadows className="webgl">
          <Lighting />
          <Suspense>
            <Physics gravity={[0, -9.8, 0]}>
              <Ecctrl
                position={[0, 0, 0]}
                rotation={[0, Math.PI, 0]}
                camCollision={false} // disable camera collision detect (useless in FP mode)
                camInitDis={-0.01} // camera intial position
                camMinDis={-0.01} // camera zoom in closest position
                camFollowMult={1000} // give a big number here, so the camera follows the target (character) instantly
                camLerpMult={1000} // give a big number here, so the camera lerp to the followCam position instantly
                turnVelMultiplier={1} // Turning speed same as moving speed
                turnSpeed={100} // give it big turning speed to prevent turning wait time
                mode="CameraBasedMovement" // character's rotation will follow camera's rotation in this mode
              />
              <World />
            </Physics>
          </Suspense>
        </Canvas>
      </KeyboardControls>
      <Loader />
    </div>
  );
}

export default App;
