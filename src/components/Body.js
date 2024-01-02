import React from 'react'
import Login from './Login'
import Browse from './Browse'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Footer from './Footer'


const Body = () => {
  const appRouter = createBrowserRouter([
        {
          path: "/",
          element: <Login/>,
          element: <Footer/>
        }
        ,{
            path: "/browser",
            element: <Browse/>,
        },
    ])
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}


export default Body
