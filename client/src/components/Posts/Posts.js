import React from 'react';

import { useSelector } from 'react-redux';

import Post from './Post/Post';


const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
 


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
        <ul>
          <table class="table table-striped mb-0">
            <tr>
              <th style={{width: "12%", overflow: "hidden", textAlign: "center", content:"center"}}> Activity Type</th>
              <th style={{width: "12%", overflow: "hidden", textAlign: "center"}}> Date </th>
              <th style={{width: "12%", overflow: "hidden", textAlign: "center"}}> Sets</th>
              <th style={{width: "12%", overflow: "hidden", textAlign: "center"}}> Duration (min) </th>
              <th style={{width: "12%", overflow: "hidden", textAlign: "center"}}> Description </th>
              <th style={{width: "12%", overflow: "hidden", textAlign: "center"}}> Set Counter <i class="mdi mdi-alarm-off"></i> </th>
              <th style={{width: "12%", overflow: "hidden", textAlign: "center"}}> Delete</th>
              <th style={{width: "12%", overflow: "hidden", textAlign: "center"}}> Edit  <i class="mdi mdi-pencil"></i> </th>

            </tr>

          </table>
          </ul>
         
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
