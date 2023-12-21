import Post from './Post'
import NewPost from './NewPost'
import classes from './PostsList.module.css'
import Modal from './Modal'
import { useState, useEffect } from "react"



function PostsList({isPosting, onStopPosting}){


    const [posts, setPosts] = useState([]);
    // Handling Side effects
    useEffect(()=> 
    {
        async function fetchPosts(){
            const response = await fetch('http://localhost:8080/posts')
            const resData = await response.json()
            setPosts(resData.posts)
        }

        fetchPosts()
    }
    , [])

    function addPostHandler(postData){
        fetch('http://localhost:8080/posts', {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        setPosts((existing) => [postData, ...existing])
    }
    return (
    <>
    {isPosting ? (
    <Modal onClose={onStopPosting}>
    <NewPost
    onCancel={onStopPosting}
    onAddPost={addPostHandler}>
    </NewPost>
    </Modal>
    ) : null}
    
    {posts.length>0? (<ul className={classes.post}>
        {[posts.map((post) => 
            <Post key={post.author} author={post.author} body={post.body}/>)]}
    </ul>) : ( <div style={{textAlign: "center", color: "white"}}>
        <h2>There are no posts yet. </h2>
        <p> start adding some! </p>
    </div> )}
    
    </>
    )
}

export default PostsList;