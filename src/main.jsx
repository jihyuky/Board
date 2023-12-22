import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts from './routes/Posts.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import NewPost from './routes/NewPost.jsx'
import RootLayout from './routes/RootLayout.jsx'



// Initializing router component
// create a list of objects that maps to all the urls we want
const router = createBrowserRouter([
  {path: "/", element: <RootLayout/>, children: [
    {path: "/" ,  // <our-domain> / nothing
    element: <Posts />,// App component loaded for this path
    children: [{path: "/create-post",element: <NewPost />}]}, 
    
  ]}
])

// Inserting RouterProvider instead of App to tell vs that we want to change URLS
// Adding a router component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
