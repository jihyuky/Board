import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts, {loader as postsLoader} from './routes/Posts.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import NewPost, {action as newPostAction} from './routes/NewPost.jsx'
import RootLayout from './routes/RootLayout.jsx'
import PostDetails, {loader as postDetailsLoader} from "./routes/PostDetails"



// Initializing router component
// create a list of objects that maps to all the urls we want
const router = createBrowserRouter([
  {path: "/", element: <RootLayout/>, children: [
    {path: "/" ,  // <our-domain> / nothing
    element: <Posts />,// App component loaded for this path
    loader: postsLoader,
    children: [{path: "/create-post",element: <NewPost />, action: newPostAction}]}, 
    {path: "/:id", // dynamic path
    element: <PostDetails/>,
  loader: postDetailsLoader}
  ]}
])

// Inserting RouterProvider instead of App to tell vs that we want to change URLS
// Adding a router component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
