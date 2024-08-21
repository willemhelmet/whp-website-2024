function Lighting() {
  return (
    <group>
      <ambientLight />
      <directionalLight castShadow position={[10, 10, 10]} />
    </group>
  );
}

export default Lighting;
