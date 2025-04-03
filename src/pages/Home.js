import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Home = () => {
  return (
    <div className="home-page">
      <Canvas camera={{ position: [0, 0, 5], fov: 25 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="orange" />
        </mesh>
        <OrbitControls />
      </Canvas>
      <div className="content">
        <h1>Hi! I Am Daniel.</h1>
        <h2>Web Penetration Tester, Bug-Bounty Hunter & Developer Located in Nairobi Kenya</h2>
      </div>
    </div>
  );
};

export default Home;