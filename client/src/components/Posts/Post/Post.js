import React from 'react';

// import moment from 'moment';
import { useDispatch } from 'react-redux';
import dateformat from "dateformat";

import { counterPost, deletePost } from '../../../actions/posts';


const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
 

  return (
<>
    <div class="table-responsive">
    <table class="table table-striped mb-0">
        <tr>
          <td style={{width: "12%", overflow: "hidden", textAlign: "center", content:"center"}} >{post.activity}</td>
          <td style={{width: "12%", overflow: "hidden", textAlign: "center"}}>{dateformat(post.date, "dd-mmm-yyyy")}</td>
          <td style={{width: "12%", overflow: "hidden", textAlign: "center"}}>{post.sets}</td>
          <td style={{width: "12%", overflow: "hidden", textAlign: "center"}}>{post.duration}</td>
          <td style={{width: "12%", overflow: "hidden", textAlign: "center"}}>{post.description}</td>
          <td style={{width: "12%", overflow: "hidden", textAlign: "center"}}><button size="small" color="primary" onClick={() => dispatch(counterPost(post._id))}> Count Sets: {post.setCount} </button></td>
          <td style={{width: "12%", overflow: "hidden", textAlign: "center"}}><button size="small" color="red" onClick={() => dispatch(deletePost(post._id))}><i class="mdi mdi-delete"></i> Delete</button></td>   
          <td style={{width: "12%", overflow: "hidden", textAlign: "center"}}> <button style={{ color: 'green' }} size="small" onClick={() => setCurrentId(post._id)}><i class="mdi mdi-pencil"></i> Edit</button></td>
        </tr>
      </table>
      

    </div>
    </>
    
  );
};

export default Post;
  