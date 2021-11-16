import React, { useState, useEffect } from 'react';
// import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
// import '../../App.css' ;


import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ activity: '', date: '', sets: '', duration: '', description: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();


  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ activity: '', date: '', sets: '', duration: '', description: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <>
    <div id="wrapper">
      <div class="content-page">

        <div class="content">
          <div class="container-fluid"></div>
          <div className="row">
            <div className="col-sm-12">
              <div className="page-title-box">
                <h4 className="page-title">Add New Exercise</h4>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                  <li className="breadcrumb-item active">New Exercise</li>
                </ol>
              </div>
            </div>
          </div>



          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card m-b-20">
                <div className="card-body">

                  <h4 className="mt-0 header-title">New Exercise</h4>

                  <form method="post" autoComplete="off" Validate onSubmit={handleSubmit}>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Activity Type</label>
                      <div className="col-sm-10">
                        <select className="form-control"
                          value={postData.activity} onChange={(e) => setPostData({ ...postData, activity: e.target.value })}
                        >
                          <option> Select an Exercise </option>
                          <option>  Running </option>
                          <option>Cycling </option>
                          <option>Riding  </option>
                          <option> Swiming  </option>
                          <option>Walking</option>
                          <option>Hiking</option>
                        </select>
                      </div>

                    </div>

                    <div className="form-group row">
                      <label for="date-input" className="col-sm-2 col-form-label">Date</label>
                      <div className="col-sm-10">
                        <input className="form-control" type="date" id="date-input"
                          value={postData.date} onChange={(e) => setPostData({ ...postData, date: e.target.value })}

                        />
                      </div>

                    </div>

                    <div className="form-group row">
                      <label for="sets" className="col-sm-2 col-form-label">No. of Sets</label>
                      <div className="col-sm-10">
                        <select className="form-control"
                          type="number" value={postData.sets} onChange={(e) => setPostData({ ...postData, sets: e.target.value })}
                          required>
                          <option>Select No. of sets</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>

                        </select>
                      </div>

                    </div>





                    <div className="form-group row">
                      <label for="datetime-local-input" className="col-sm-2 col-form-label">Duration
                        in minutes
                      </label>
                      <div className="col-sm-10">
                        <input type="number" className="form-control" value={postData.duration} onChange={(e) => setPostData({ ...postData, duration: e.target.value })} min="1" max="60" />

                      </div>

                    </div>







                    <div className="form-group row">

                      <label for="datetime-local-input"
                        className="col-sm-2 col-form-label">Description

                      </label>
                      <div className="col-sm-10">
                        <textarea id="textarea" className="form-control" minlength="1" maxlength="10" rows="3"
                          placeholder="Write any Description here" required
                          value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })}

                        ></textarea>
                      </div>

                    </div>

                    <div className="form-group mb-0 row justify-content-center">

                    <button class="btn btn-primary waves-effect waves-light mr-1" type="submit" >Submit</button>
                    <button class="btn btn-secondary waves-effect" onClick={clear} >Clear</button>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

    </>
  );
};

export default Form;
