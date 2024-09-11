
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Robot from '../../../public/Robot'




function Model() {
  return (

    <div className='h-96 w-full px-2'>
      <Canvas>
        <ambientLight />
        <OrbitControls enableZoom={false} autoRotate={false} autoRotateSpeed={2} />
        <Suspense fallback={'loading...'}>


          <Robot
            scale={[0.4, 0.4, 0.4]}
            position={[0, -1, 0]}
            rotation={[6.70, 12, 0]}
          />


        </Suspense>
        <Environment preset='sunset' />
      </Canvas>
    </div>
  );
}

export default Model;





