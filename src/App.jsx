import React from 'react'
import {Footer} from './Components/ComponentsExport'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes'


const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <main className='main-layout'>
      <RouterProvider router={routes} />
      </main>
      <Footer />
    </>
  )
}

export default App
