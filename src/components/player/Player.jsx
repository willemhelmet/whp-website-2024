import Ecctrl from "ecctrl";

function Player() {
  return (
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
      camZoomSpeed={0}
    />
  );
}

export default Player;
