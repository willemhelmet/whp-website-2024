import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";

import Lighting from "./components/Lighting.jsx";
import Player from "./components/Player.jsx";

import World from "./components/World.jsx";

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
    </div>
  );
}

export default App;
