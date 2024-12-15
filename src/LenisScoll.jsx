// import { ReactLenis, useLenis } from 'lenis/react'
// import GridBackgroundDemo from './Components/BG/Bg'

// function Layout() {
//     const lenis = useLenis()

//     return (
//         <ReactLenis root>
//             <GridBackgroundDemo />
//         </ReactLenis>
//     )
// }



import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect } from 'react'
import GridBackgroundDemo from './Components/BG/Bg'



function 
Layout() {
    const lenis = useLenis()

    useEffect(() => {
        function animate(time) {
            lenis.raf(time)
            requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)

        return () => {
            cancelAnimationFrame(animate)
        }
    }, [lenis])

    return (
        <ReactLenis root options={{ smooth: true }} >


            <GridBackgroundDemo />



        </ReactLenis>
    )
}

export default Layout
