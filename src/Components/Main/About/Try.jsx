// import React, { useState, useEffect, useRef } from 'react';

// const Counter = () => {
//   const [count, setCount] = useState(0); // Initial count is 0
//   const [isCounting, setIsCounting] = useState(false); // To control when the counting starts
//   const counterRef = useRef(null); // To reference the counter element

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsCounting(true); // Start counting when element is in view
//         } else {
//           setIsCounting(false); // Stop counting when element goes out of view
//         }
//       },
//       {
//         threshold: 0.5, // 50% of the element should be visible
//       }
//     );

//     if (counterRef.current) {
//       observer.observe(counterRef.current); // Observe the counter element
//     }

//     return () => {
//       if (counterRef.current) {
//         observer.unobserve(counterRef.current); // Cleanup
//       }
//     };
//   }, []);

//   useEffect(() => {
//     let interval = null;
//     if (isCounting && count < 99) {
//       interval = setInterval(() => {
//         setCount((prevCount) => prevCount + 1);
//       }, 50); // Adjust the speed of counting
//     } else if (count >= 99) {
//       clearInterval(interval);
//     }

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, [isCounting, count]);

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <h1
//         ref={counterRef} // Attach the ref to this element
//         className="text-5xl font-bold text-blue-500 transition-transform duration-500 ease-out transform hover:scale-110"
//       >
//         {count}
//       </h1>
//     </div>
//   );
// };

// export default Counter;
