import Wall from "./Wall";
import Floor from "./Floor";

function InvisibleWalls() {
  return (
    <group>
      <Floor />
      {/* Ground Floor Walls */}
      <Wall position={[-2, 0, -3.9]} args={[0.75, 2, 6.9]} visible={false} />
      <Wall position={[-1.3, 0, 0.05]} args={[0.5, 2, 1.13]} visible={false} />
      <Wall position={[-2.7, 0, -10.5]} args={[1, 2, 5.9]} visible={false} />
      <Wall position={[2.5, 2, -14]} args={[8.9, 6, 1]} visible={false} />
      <Wall position={[7.4, 2, -6.5]} args={[1, 6, 13.75]} visible={false} />
      <Wall position={[4, 0, 0.5]} args={[5.7, 2, 0.05]} visible={false} />
      <Wall position={[1, 0, -0.05]} args={[0.2, 2, 0.9]} visible={false} />

      {/* Stairs */}
      <Wall
        position={[6.2, -0.35, -8.1]}
        rotation={[-Math.PI * 0.335, 0, 0]}
        args={[1.2, 7, 0.1]}
        visible={false}
      />
      {/* Loft Floor */}
      <Wall
        position={[-1.0, 1.3, -11.5]}
        args={[13, 0.17, 8]}
        visible={false}
      />
      <Wall
        position={[6.5, 1.3, -12.3]}
        args={[2, 0.17, 2.2]}
        visible={false}
      />
    </group>
  );
}
export default InvisibleWalls;
