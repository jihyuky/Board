import './App.css'
import PostsList from '../components/PostsList'
import { Outlet } from 'react-router-dom';


function Posts() {


  return (<>
  <main> 
      <Outlet></Outlet>
      <PostsList />
  </main>
  
  </>)
}

export default Posts;
