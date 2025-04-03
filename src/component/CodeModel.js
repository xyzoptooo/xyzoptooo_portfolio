import React, { useRef } from 'react';
import { Html } from '@react-three/drei';

export function CodeModel(props) {
  return (
    <group {...props}>
      <mesh position={[0, 0.5, 0]} rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[2, 0.1, 1.5]} />
        <meshStandardMaterial color="gray" />
        <Html transform>
          <div className="code-editor">
            {/* Add your code editor content here */}
          </div>
        </Html>
      </mesh>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 0.2, 2]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
    </group>
  );
}