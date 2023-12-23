import { Link, Form, redirect } from 'react-router-dom';
import Modal from '../components/Modal';
import classes from './NewPost.module.css';

function NewPost() {




  return (
    
    <Modal>
      {/* Modal is wrapping the Form so that it is floating */} 
      {/* Form with capital F allows route to handle the submit action */} 
    <Form method="post" className={classes.form} >
      <p>
        <label htmlFor="">Text</label>
        <textarea id="body" name="body" required rows={3}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" name="author" required />
      </p>
      <p className={classes.actions}>
        <Link type="button" to="..">Cancel</Link>
        <button type="submit">Submit</button>
      </p>
    </Form>
    </Modal>
  );
}

export default NewPost;
// data automatically added by react router
export async function action({request}){
  const formData = await request.formData()
  // formData is complex, so can extract it like below:
  const postData = Object.fromEntries(formData) // creates {body: "", author: ""}
  // also can do formData.get("body")

  // await for the request to be sent
  await fetch('http://localhost:8080/posts', {
    method: "POST",
    // stringify method
    body: JSON.stringify(postData),
    headers: {
        "Content-Type": "application/json"
    }
})
  
return redirect("/");
}