import Post from './Post'
import classes from './PostsList.module.css'
import { useLoaderData } from 'react-router-dom';



function PostsList(){
    // Replaced useeffect code with this code
    // Loader is in Posts file and is available because it is exported
    // or something
    const posts = useLoaderData()

    // Adding a loading page
    
    // Handling Side effects
    // Fetching data from the JSON file to insert into the board. This is the method to do so.
    // useEffect(()=> 
    // {
    //     async function fetchPosts(){
    //         setIsFetching(true)

            
    //         setPosts(resData.posts)
    //         setIsFetching(false)
    //     }
        
    //     fetchPosts()
    // }
    // , [])


    return (
    <>
     {/* If isPosting, then have the add post thing up.*/}
    
     {/* Displaying posts. calling the */}
    {posts.length>0 &&
    (<ul className={classes.post}>
        {[posts.map((post) => 
            <Post id={post.id} key={post.id} author={post.author} body={post.body}/>)]}
    </ul>)}

    {posts.length === 0 &&
    ( <div style={{textAlign: "center", color: "white"}}>
    <h2>There are no posts yet. </h2>
    <p> start adding some! </p>
</div> )}


    </>)
}

export default PostsList;