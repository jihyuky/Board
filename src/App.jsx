import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostsList from './components/PostsList'
import MainHeader from './components/MainHeader'


function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  function hideModalHandler(){
    setModalIsVisible(false);
}
  function showModalHandler(){
    setModalIsVisible(true);
  }


  return (<>
  <MainHeader onCreatePost={showModalHandler}> </MainHeader>
  <main> 
      <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler}></PostsList>
  </main>
  
  </>)
}

export default App;
