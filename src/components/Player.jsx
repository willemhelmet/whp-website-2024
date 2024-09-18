import { useCallback, useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera, PointerLockControls } from "@react-three/drei";
import { useSphere } from "@react-three/cannon";
import Crosshair from "./Crosshair";
import { useMyStore } from "../utils/store";
import * as THREE from "three";

function Player() {
  const direction = new THREE.Vector3();
  const frontVector = new THREE.Vector3();
  const sideVector = new THREE.Vector3();
  const speed = new THREE.Vector3();
  const SPEED_SCALAR = 4;
  const PLAYER_SIZE = 0.5;

  const { camera } = useThree();

  const [ref, api] = useSphere((index) => ({
    mass: 1,
    type: "Dynamic",
    position: [0, -PLAYER_SIZE, 0],
    args: [PLAYER_SIZE],
  }));

  const {
    isMouseCaptured,
    setIsMouseCaptured,
    forward,
    backward,
    left,
    right,
    movementActions,
  } = useMyStore();

  // TODO: Toggle a "pause" menu that appears when the mouse isn't captured
  useEffect(() => {
    console.log("isMouseCaptured: " + isMouseCaptured);
  }, [isMouseCaptured]);

  const handleKeyDown = useCallback(
    (e) => {
      switch (e.code) {
        case "KeyW":
          movementActions.setForward(true);
          break;
        case "KeyS":
          movementActions.setBackward(true);
          break;
        case "KeyA":
          movementActions.setLeft(true);
          break;
        case "KeyD":
          movementActions.setRight(true);
          break;
        default:
          return;
      }
    },
    [movementActions],
  );

  const handleKeyUp = useCallback(
    (e) => {
      switch (e.code) {
        case "KeyW":
          movementActions.setForward(false);
          break;
        case "KeyS":
          movementActions.setBackward(false);
          break;
        case "KeyA":
          movementActions.setLeft(false);
          break;
        case "KeyD":
          movementActions.setRight(false);
          break;
        default:
          return;
      }
    },
    [movementActions],
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

  const velocity = useRef([0, 0, 0]);

  useFrame(() => {
    ref.current.getWorldPosition(camera.position);
    camera.position.y = camera.position.y + 1.35 - PLAYER_SIZE;
    frontVector.set(0, 0, Number(backward) - Number(forward));
    sideVector.set(Number(left) - Number(right), 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED_SCALAR)
      .applyEuler(camera.rotation);
    speed.fromArray(velocity.current);
    api.velocity.set(direction.x, -3, direction.z);
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
      <mesh ref={ref}></mesh>
    </group>
  );
}

export default Player;
