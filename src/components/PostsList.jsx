import Post from './Post'
import NewPost from './NewPost'
import classes from './PostsList.module.css'
import Modal from './Modal'
import { useState, useEffect } from "react"



function PostsList({isPosting, onStopPosting}){
    const [posts, setPosts] = useState([]);
    // Adding a loading page
    const [isFetching, setIsFetching] = useState(false);
    
    // Handling Side effects
    useEffect(()=> 
    {
        async function fetchPosts(){
            setIsFetching(true)
            const response = await fetch('http://localhost:8080/posts')
            const resData = await response.json()
            
            setPosts(resData.posts)
            setIsFetching(false)
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
    
    {!isFetching && posts.length>0 &&
    (<ul className={classes.post}>
        {[posts.map((post) => 
            <Post key={post.author} author={post.author} body={post.body}/>)]}
    </ul>)}

    {!isFetching && posts.length === 0 &&
    ( <div style={{textAlign: "center", color: "white"}}>
    <h2>There are no posts yet. </h2>
    <p> start adding some! </p>
</div> )}

    {isFetching && (<div style={{textAlign: "center", color: "white"}}>
        <p>Loading Post...</p>
        </div>)
}

    </>)
}

export default PostsList;