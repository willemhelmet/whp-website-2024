import { useCallback, useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Crosshair from "./Crosshair";
import { useMyStore } from "../utils/store";
import * as THREE from "three";

/** TODO:
 * Implement WSAD movement
 */
function Player() {
  const ref = useRef();

  const direction = new THREE.Vector3();
  const frontVector = new THREE.Vector3();
  const sideVector = new THREE.Vector3();
  const SPEED_SCALAR = 0.25;

  const { camera } = useThree();

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
    // WHP - my goofy bad implementation
    // if (forward) {
    //   ref.current.position.z -= 0.1;
    // }
    // if (backward) {
    //   ref.current.position.z += 0.1;
    // }
    // if (left) {
    //   ref.current.position.x -= 0.1;
    // }
    // if (right) {
    //   ref.current.position.x += 0.1;
    // }
    frontVector.set(0, 0, Number(backward) - Number(forward));
    sideVector.set(Number(left) - Number(right), 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED_SCALAR)
      .applyEuler(camera.rotation);
    ref.current.position.x += direction.x;
    ref.current.position.z += direction.z;
  });
  return (
    <PerspectiveCamera ref={ref} makeDefault position={[0, 0, 0]}>
      <Crosshair />
    </PerspectiveCamera>
  );
}

export default Player;
