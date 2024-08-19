function Lighting() {
  return (
    <group>
      <ambientLight />
      <pointLight castShadow position={[10, 10, 10]} />
    </group>
  );
}

export default Lighting;
