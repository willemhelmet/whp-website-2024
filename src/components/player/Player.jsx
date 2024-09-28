import { useCallback, useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import {
  PerspectiveCamera,
  PointerLockControls,
  useKeyboardControls,
} from "@react-three/drei";
import { useSphere } from "@react-three/cannon";
import Crosshair from "./Crosshair";
import { useMyStore } from "../../utils/store";
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

  const { isMouseCaptured, setIsMouseCaptured } = useMyStore();

  // TODO: Toggle a "pause" menu that appears when the mouse isn't captured
  useEffect(() => {
    console.log("isMouseCaptured: " + isMouseCaptured);
  }, [isMouseCaptured]);

  const velocity = useRef([0, 0, 0]);

  // WHP - figuring out ecctrl
  const [, get] = useKeyboardControls();

  useFrame(() => {
    // WHP - figuring out ecctrl
    const { forward, backward, leftward, rightward } = get();

    ref.current.getWorldPosition(camera.position);
    camera.position.y = camera.position.y + 1.35 - PLAYER_SIZE;
    frontVector.set(0, 0, Number(backward) - Number(forward));
    sideVector.set(Number(leftward) - Number(rightward), 0, 0);
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
