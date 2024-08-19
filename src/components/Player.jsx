import { useCallback, useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Crosshair from "./Crosshair";
import { useMyStore } from "../utils/store";

/** TODO:
 * Implement WSAD movement
 */
function Player() {
  const ref = useRef();

  const {
    forward,
    backward,
    left,
    right,
    setForward,
    setBackward,
    setLeft,
    setRight,
  } = useMyStore();

  const handleKeyDown = useCallback(
    (e) => {
      switch (e.code) {
        case "KeyW":
          setForward(true);
          break;
        case "KeyS":
          setBackward(true);
          break;
        case "KeyA":
          setLeft(true);
          break;
        case "KeyD":
          setRight(true);
          break;
        default:
          return;
      }
    },
    [setForward, setBackward, setLeft, setRight]
  );

  const handleKeyUp = useCallback(
    (e) => {
      switch (e.code) {
        case "KeyW":
          setForward(false);
          break;
        case "KeyS":
          setBackward(false);
          break;
        case "KeyA":
          setLeft(false);
          break;
        case "KeyD":
          setRight(false);
          break;
        default:
          return;
      }
    },
    [setForward, setBackward, setLeft, setRight]
  );

  useEffect(() => {
    document.addEventListener("keydown", (e) => handleKeyDown(e));
    document.addEventListener("keyup", (e) => handleKeyUp(e));

    // Called when component is unmounted
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  useFrame(() => {
    if (forward) {
      console.log("Forward");
      ref.current.position.z -= 0.1;
    } else if (backward) {
      console.log("Backward");
      ref.current.position.z += 0.1;
    } else if (left) {
      console.log("Left");
      ref.current.position.x -= 0.1;
    } else if (right) {
      console.log("Right");
      ref.current.position.x += 0.1;
    }
  });
  return (
    <PerspectiveCamera ref={ref} makeDefault position={[0, 0, 0]}>
      <Crosshair />
    </PerspectiveCamera>
  );
}

export default Player;
