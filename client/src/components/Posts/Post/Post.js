import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { counterPost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (

    <div class="table-responsive">
    <table class="table table-striped mb-0">
        <tr>
          <td>{post.activity}</td>
          <td>{post.date}</td>
          <td>{post.sets}</td>
          <td>{post.duration}</td>
          <td>{post.description}</td>
          <td><button size="small" color="primary" onClick={() => dispatch(counterPost(post._id))}> Count Sets {post.setCount} </button></td>
          <td><button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</button></td>
          <td> {moment(post.createdAt).fromNow()} </td>
          <td> <button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /> Edit</button></td>
        </tr>
      </table>
      

    </div>
  );
};

export default Post;
