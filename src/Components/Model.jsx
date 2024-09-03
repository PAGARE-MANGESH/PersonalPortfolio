// import React from 'react'
// import { Suspense } from 'react'


// import { Canvas } from '@react-three/fiber'
// import { Environment, OrbitControls } from '@react-three/drei'
// import Pc from '../../public/Pc'

// function Model() {
//   return (
//     <div className='h-80 w-100 '>
//       <Canvas> 
//         <ambientLight />
//         <OrbitControls enableZoom={false} />
//         <Suspense fallback={null}>
//           <Pc />
//         </Suspense>
//         <Environment preset='sunset' />
//       </Canvas>
//     </div>
//   )
// }

// export default Model




// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { Environment, OrbitControls } from '@react-three/drei';
// import Pc from '../../public/Pc';



// function Model() {
//   return (
//     <div className='h-80 w-full'>
//       <Canvas>
//         <ambientLight />
//         <OrbitControls enableZoom={true}  />
//         <Suspense fallback={null}>

//           {/* <Pc scale={[0.5, 0.80, 0.70]} position={[0, -1, 0]} /> */}
//           <Pc scale={[0.5, 0.5, 0.5]} position={[0, -1, 0]} />

//         </Suspense>
//         <Environment preset='sunset' />
//       </Canvas>
//     </div>
//   );
// }

// export default Model;







import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
// import Pc from '../../public/Pc';
import Robot from '../../public/Robot'

function Model() {
  return (
    <div className='h-96 w-full px-2'>
      <Canvas>
        <ambientLight />
        <OrbitControls enableZoom={true} autoRotate={false} autoRotateSpeed={2} />
        <Suspense fallback={null}>

          {/* <Pc
            scale={[0.5, 0.5, 0.5]} 
            position={[0, -1, 0]} 
            rotation={[0, 11, 0]} // Adjust rotation if necessary
          /> */}


          <Robot
            scale={[0.5, 0.5, 0.5]}
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





