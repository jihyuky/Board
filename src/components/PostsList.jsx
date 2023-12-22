import Post from './Post'
import classes from './PostsList.module.css'
import { useState, useEffect } from "react"



function PostsList(){
    const [posts, setPosts] = useState([]);

    // Adding a loading page
    const [isFetching, setIsFetching] = useState(false);
    
    // Handling Side effects
    // Fetching data from the JSON file to insert into the board. This is the method to do so.
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
        // Adding data into JSON file
        fetch('http://localhost:8080/posts', {
            method: "POST",
            // stringify method
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        setPosts((existing) => [postData, ...existing])
    }
    return (
    <>
     {/* If isPosting, then have the add post thing up.*/}
    
     {/* Displaying posts. calling the */}
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