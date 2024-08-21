import { useCallback, useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera, PointerLockControls } from "@react-three/drei";
import Crosshair from "./Crosshair";
import { useMyStore } from "../utils/store";
import * as THREE from "three";

/** TODO:
 * Look into changng WSAD into a physics based system
 */
function Player() {
  const ref = useRef();

  const direction = new THREE.Vector3();
  const frontVector = new THREE.Vector3();
  const sideVector = new THREE.Vector3();
  const SPEED_SCALAR = 0.05;

  const { camera } = useThree();

  const {
    isMouseCaptured,
    setIsMouseCaptured,
    forward,
    backward,
    left,
    right,
    setForward,
    setBackward,
    setLeft,
    setRight,
  } = useMyStore();

  useEffect(() => {
    console.log("isMouseCaptured: " + isMouseCaptured);
  }, [isMouseCaptured]);

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
    [setForward, setBackward, setLeft, setRight],
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
    [setForward, setBackward, setLeft, setRight],
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
    <group>
      <PerspectiveCamera ref={ref} makeDefault position={[0, 0, 0]}>
        <Crosshair />
      </PerspectiveCamera>
      <PointerLockControls
        onLock={() => setIsMouseCaptured(true)}
        onUnlock={() => setIsMouseCaptured(false)}
      />
    </group>
  );
}

export default Player;
