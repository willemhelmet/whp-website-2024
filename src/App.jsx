import {Canvas} from '@react-three/fiber'
import { XR, createXRStore } from '@react-three/xr'
import Box from "./components/Box.jsx";
import { Suzanne } from './components/Suzanne.jsx';

const store = createXRStore()

function App() {
  return (
    <>
      <button onClick={() => store.enterVR()}>Enter VR</button>
      <div className="App">
        <Canvas className="webgl">
          <XR store={store}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            {/* <Box position={[-2.2, 0, 0]} />
            <Box position={[2.2, 0, 0]} /> */}
            <Suzanne/>
          </XR>
        </Canvas>
      </div>
    </>
  );
}

export default App;
