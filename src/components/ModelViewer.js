// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';

// function Model() {
//   const { scene } = useGLTF('./assets/models/Dome.gltf'); // Load the model
//   return <primitive object={scene} dispose={null} />;
// }

// export const ModelViewer = () => {
//   return (
//     <Canvas
//       camera={{ position: [0, 2, 5], fov: 60 }} // Adjust camera position
//       style={{ height: '100vh', width: '100vw' }}
//     >
//       <ambientLight intensity={0.5} /> {/* Basic lighting */}
//       <Model />
//       <OrbitControls 
//         enablePan={false} // Disable panning
//         enableZoom={false} // Disable zooming
//         minPolarAngle={Math.PI / 2} // Lock vertical rotation
//         maxPolarAngle={Math.PI / 2} 
//       />
//     </Canvas>
//   );
// };


import { Suspense, useMemo } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls, TransformControls, Environment, useGLTF, Html } from '@react-three/drei';

// Extend if you're using custom components
extend({ OrbitControls, TransformControls });

function Model() {
  const { scene } = useGLTF('./assets/models/dome/Dome.gltf'); // Ensure the path is correct
  console.log('scene',scene)
  return <primitive object={scene} dispose={null} />;
}

export const ModelViewer = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 2, 5], fov: 60 }}
      style={{ height: '100vh', width: '100vw' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <Suspense fallback={<Loader />}>
        <Model />
        <Environment preset="sunset" background />
        {/* <Environment preset="sunset" background /> */}
      </Suspense>
      {/* Ground Plane */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[100, 100]} /> {/* Corrected element */}
        <shadowMaterial opacity={0.2} />
      </mesh>
      <OrbitControls 
        enablePan={true} 
        enableZoom={true} 
        enableRotate={true} 
        minPolarAngle={Math.PI / 2} // Prevent vertical movement
        maxPolarAngle={Math.PI / 2} // Prevent vertical movement
      />
    </Canvas>
  );
};

const Loader = () => {
  return (
    <Html center>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontFamily: 'Arial, sans-serif',
          color: '#555',
        }}
      >
        <span>Loading 3D Model...</span>
      </div>
    </Html>
  );
};