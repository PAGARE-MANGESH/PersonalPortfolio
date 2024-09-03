import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// import SidebarDemo from './Components/Sidebar/Sidebar'

import { BackgroundBoxesDemo } from './Components/Aceternity/GridBG'

// import { TimelineDemo } from './Components/Main/TimeLine/TimeLine'



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <BackgroundBoxesDemo />

    {/* <TimelineDemo /> */}

    {/* <SidebarDemo /> */}

  </React.StrictMode>,
)
