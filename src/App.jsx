import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";

import Lighting from "./components/environment/Lighting.jsx";
import Player from "./components/player/Player.jsx";

import World from "./components/environment/World.jsx";

function App() {
  return (
    <div className="App">
      <Canvas shadows className="webgl">
        <Lighting />
        <Physics gravity={[0, -9.8, 0]}>
          <Player />
          <World />
        </Physics>
      </Canvas>
      <Loader />
    </div>
  );
}

export default App;
