import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();


  return (
   
      <>
        <div className="row">

          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="row d-flex">
                  <div className=" mr-auto  p-2">
                    <h4>All Exercises</h4>
                  </div>
                  <div className="p-2">
                    <form>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search.." />

                      </div>
                    </form>
                  </div>
                  <div className="p-2">
                    <button type="button" onClick="window.location.href='add-exercise.html'"
                      className="btn btn-primary waves-effect waves-light"> +
                      New
                      Exercise</button>
                  </div>

                </div>


              </div>
            </div>
          </div>
        </div>



        <div class="table-responsive">
          <table class="table table-striped mb-0">
            <tr>
              <th> Activity Type</th>
              <th> Date </th>
              <th> Sets</th>
              <th> Duration (min) </th>
              <th> Description </th>
              <th> Set Counter <i class="mdi mdi-alarm-off"></i> </th>
              <th> Delete</th>
              <th> Edit  <i class="mdi mdi-pencil"></i> </th>

            </tr>

          </table>
         
          {posts.map((post) => (
            <ul>
              <Post post={post} setCurrentId={setCurrentId} />
            </ul>
          ))}
        </div>
      </>
    
  );
};

export default Posts;
