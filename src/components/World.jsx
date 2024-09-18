import { Box, Sky, Stars } from "@react-three/drei";
import { useControls } from "leva";

//import JNL from "./JNL.jsx";
import Alien from "./Alien.jsx";
import JNL2 from "./JNL_04.jsx";
//import PhysicsBall from "./PhysicsBall.jsx";
import PortfolioImage from "./PortfolioImage.jsx";
import PortfolioVideo from "./PortfolioVideo.jsx";
import Poster from "./Poster.jsx";
import { text } from "../data/text.js";
import Smiley from "./Smiley";
import Suzanne from "./Suzanne";
import TriangleMan from "./TriangleMan.jsx";
import Apartment from "./Apartment_Maquette.jsx";

function World() {
  // const { x, y, z } = useControls({
  //   x: {
  //     value: 0,
  //     min: -2.5,
  //     max: 8.5,
  //     step: 0.01,
  //   },
  //   y: {
  //     value: 0,
  //     min: -2,
  //     max: 6,
  //     step: 0.01,
  //   },
  //   z: {
  //     value: 0,
  //     min: -22,
  //     max: 22,
  //     step: 0.01,
  //   },
  // });
  const { position, rotation, scale } = useControls({
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
    scale: {
      x: 1,
      y: 1,
      z: 1,
    },
  });
  return (
    <group>
      <Alien
        position={[-0.84, -0.354, -2.85]}
        rotation={[0, -1.965, 0]}
        scale={[0.08, 0.08, 0.08]}
      />
      <Apartment
        position={[-5, 2, -9.75]}
        rotation={[0, Math.PI * 1.5, 0]}
        scale={[0.3, 0.3, 0.3]}
      />
      <Poster
        position={[-4, 2, -9.75]}
        rotation={[0, Math.PI * 0.5, 0]}
        title={text[9].title}
        body={text[9].body}
      />
      {/* Debug Box
      <Box
        position={[position.x, position.y, position.z]}
        rotation={[rotation.x, rotation.y, rotation.z]}
        args={[scale.x, scale.y, scale.z]}
        material-color={"hotpink"}
      /> */}
      <axesHelper position={[position.x, position.y, position.z]} />
      <JNL2 />
      <TriangleMan
        position={[6.26, -0.7, -0.39]}
        scale={0.7}
        textureImageURL={"/textures/triangle/triangle-1.png"}
        textureDataURL="/textures/triangle/triangle.json"
      />
      <TriangleMan
        position={[6.26, -0.7, -8.6]}
        scale={0.7}
        textureImageURL={"/textures/triangle/triangle-2.png"}
        textureDataURL="/textures/triangle/triangle.json"
      />
      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />
      <Stars />
      <Suzanne
        position={[5.87, 0, -6.33]}
        rotation={[0, -Math.PI * 0.35, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <Smiley
        position={[-1.75, 0.75, -7.6]}
        rotation={[0, -Math.PI * 0.35, 0]}
        scale={[0.25, 0.25, 0.25]}
      />
      {/* Hackathons */}
      <PortfolioImage
        position={[1, 0.75, -13.35]}
        src={"/portfolio/hack-sommilar.jpg"}
      />
      <Poster
        position={[1, 0, -13.35]}
        rotation={[0, 0, 0]}
        scale={[0.4, 0.4, 0.4]}
        title={text[8].title}
        body={text[8].body}
      ></Poster>
      <PortfolioImage
        position={[3.17, 0.75, -13.35]}
        src={"/portfolio/edible-apartment.png"}
      />
      <Poster
        position={[3.17, 0, -13.35]}
        rotation={[0, 0, 0]}
        scale={[0.4, 0.4, 0.4]}
        title={text[6].title}
        body={text[6].body}
      ></Poster>
      <PortfolioImage
        position={[5.36, 0.75, -13.35]}
        scale={[0.75, 0.75, 0.75]}
        src={"/portfolio/hack-seereal.png"}
      />
      <Poster
        position={[5.36, 0, -13.35]}
        rotation={[0, 0, 0]}
        scale={[0.4, 0.4, 0.4]}
        title={text[7].title}
        body={text[7].body}
      ></Poster>
      {/* Verizon 5G Stadium in Fortnite */}
      <PortfolioImage
        position={[-1.3, 0.25, -13.35]}
        scale={[1.5, 1.5, 1.5]}
        src={"/portfolio/5g-stadium.png"}
      />
      <PortfolioImage
        position={[-2.1, 0.25, -12.1]}
        rotation={[0, Math.PI * 0.5, 0]}
        scale={[1.5, 1.5, 1.5]}
        src={"/portfolio/5g-fortnite-pic.jpg"}
      />
      <Poster
        position={[-0.84, -0.94, -11.33]}
        rotation={[-Math.PI * 0.5, 0, Math.PI * 0.5]}
        title={text[3].title}
        body={text[3].body}
      ></Poster>
      {/* Nike Watch Her Glow */}
      <Poster
        position={[-1.35, 2, -4.5]}
        rotation={[0, Math.PI * 0.5, 0]}
        title={text[2].title}
        body={text[2].body}
      ></Poster>
      <PortfolioVideo
        position={[-2.09, 0, -9.84]}
        rotation={[0, Math.PI * 0.5, 0]}
        width={410}
        height={250}
        scale={0.05}
        src={"/portfolio/nike-color-bars.webm"}
      />
      <PortfolioVideo
        position={[-2.09, 0, -8.43]}
        rotation={[0, Math.PI * 0.5, 0]}
        width={960}
        height={512}
        scale={0.04}
        src={"/portfolio/nike-glowing-up.webm"}
      />
      <PortfolioVideo
        position={[-1.35, 0.25, -6]}
        rotation={[0, Math.PI * 0.5, 0]}
        width={512}
        height={512}
        scale={0.05}
        src={"/portfolio/nike-watch-her-glow.webm"}
      />
      <PortfolioVideo
        position={[-1.35, 0, -4.5]}
        rotation={[0, Math.PI * 0.5, 0]}
        width={360}
        height={640}
        scale={0.05}
        src={"/portfolio/nike-ar-filter.webm"}
      />
      {/* Snap Lenses */}
      <Poster
        position={[6.75, 2.2, -2.5]}
        rotation={[0, -Math.PI * 0.5, 0]}
        title={text[1].title}
        body={text[1].body}
      ></Poster>
      <PortfolioVideo
        position={[6.75, 0.2, -1.9]}
        rotation={[0, -Math.PI * 0.5, 0]}
        width={320}
        height={576}
        scale={0.05}
        src={"/portfolio/snap-elephant-body.webm"}
      />
      <PortfolioVideo
        position={[6.75, 0.2, -2.9]}
        rotation={[0, -Math.PI * 0.5, 0]}
        width={269}
        height={480}
        scale={0.05}
        src={"/portfolio/snap-eyebrows.webm"}
      />
      <PortfolioVideo
        position={[6.75, 0.2, -3.9]}
        rotation={[0, -Math.PI * 0.5, 0]}
        width={267}
        height={480}
        scale={0.05}
        src={"/portfolio/snap-relighting.webm"}
      />
      <PortfolioVideo
        position={[6.75, 0.2, -4.9]}
        rotation={[0, -Math.PI * 0.5, 0]}
        width={267}
        height={480}
        scale={0.05}
        src={"/portfolio/snap-watch.webm"}
      />
      {/* Vision pro */}
      <Poster
        position={[3.91, 1.66, 0.37]}
        rotation={[0, Math.PI, 0]}
        title={text[0].title}
        body={text[0].body}
      ></Poster>
      <PortfolioVideo
        position={[2.35, 0.2, 0.37]}
        rotation={[0, Math.PI, 0]}
        width={640}
        height={480}
        scale={0.05}
        src={"/portfolio/vp-apollo-11-1.webm"}
      />
      <PortfolioVideo
        position={[4.05, 0.2, 0.37]}
        rotation={[0, Math.PI, 0]}
        width={640}
        height={480}
        scale={0.05}
        src={"/portfolio/vp-apollo-11-2.webm"}
      />
      <PortfolioVideo
        position={[5.75, 0.2, 0.37]}
        rotation={[0, Math.PI, 0]}
        width={640}
        height={480}
        scale={0.05}
        src={"/portfolio/vp-apollo-11-3.webm"}
      />
      {/* VR */}
      <Poster
        position={[6, -0.94, -11.33]}
        rotation={[-Math.PI * 0.5, 0, -Math.PI * 0.5]}
        title={text[4].title}
        body={text[4].body}
      ></Poster>
      <PortfolioVideo
        position={[6.75, 0.77, -12.73]}
        rotation={[0, -Math.PI * 0.5, 0]}
        width={512}
        height={256}
        scale={0.05}
        src={"/portfolio/vr-cave-1.webm"}
      />
      <PortfolioVideo
        position={[6.75, 0.07, -12.73]}
        rotation={[0, -Math.PI * 0.5, 0]}
        width={512}
        height={256}
        scale={0.05}
        src={"/portfolio/vr-cave-2.webm"}
      />
      <PortfolioVideo
        position={[6.75, 0.07, -11.375]}
        rotation={[0, -Math.PI * 0.5, 0]}
        width={512}
        height={256}
        scale={0.05}
        src={"/portfolio/vr-sillytown-1.webm"}
      />
      <PortfolioVideo
        position={[6.75, 0.77, -11.375]}
        rotation={[0, -Math.PI * 0.5, 0]}
        width={512}
        height={256}
        scale={0.05}
        src={"/portfolio/vr-sillytown-2.webm"}
      />
      <PortfolioVideo
        position={[6.75, 0.07, -10.02]}
        rotation={[0, -Math.PI * 0.5, 0]}
        width={512}
        height={256}
        scale={0.05}
        src={"/portfolio/vr-sillytown-3.webm"}
      />
    </group>
  );
}
export default World;
