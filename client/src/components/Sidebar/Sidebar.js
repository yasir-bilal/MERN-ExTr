import React, { useState, useEffect } from 'react';
// import { Router } from 'react-router';


import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

import Posts from '../Posts/Posts';
import Form from '../Form/Form';
// import '../../App.css';


function Sidebar() {

    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    // const classes = useStyles();
  
    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch]);    
    return (

        <div id="wrapper">


            <div className="topbar">


                <div className="topbar-left">
                    <a href="index.html" className="logo">
                        <span>
                            <img src="" alt="" height="18" />
                        </span>
                        <i>
                            <img src="" alt="" height="22" />
                        </i>
                    </a>
                </div>

                <nav className="navbar-custom">

                    <ul className="navbar-right d-flex list-inline float-right mb-0">
                        <li className="dropdown notification-list d-none d-sm-block m-t-20">
                            <strong>User 1</strong>
                            <br />
                            xyz @abc.com
                        </li>


                        <li className="dropdown notification-list">
                            <div className="dropdown notification-list nav-pro-img">
                                <a className="dropdown-toggle nav-link arrow-none waves-effect nav-user" data-toggle="dropdown"
                                    href="index.html" role="button" aria-haspopup="false" aria-expanded="false">
                                    <img src="assets/images/users/user-4.jpg" alt="user" className="rounded-circle" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right profile-dropdown ">

                                    <a className="dropdown-item" href="index.html"><i className="mdi mdi-account-circle"></i>
                                        Profile</a>
                                    <a className="dropdown-item" href="exercise.html"><i className="mdi mdi-bike"></i> Exercise</a>
                                    <a className="dropdown-item d-block" href="index.html"><i className="mdi mdi-settings"></i>
                                        Settings</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item text-danger" href="index.html"><i className="mdi mdi-power text-danger"></i>
                                        Logout</a>
                                </div>
                            </div>
                        </li>

                    </ul>

                    <ul className="list-inline menu-left mb-0">
                        <li className="float-left">
                            <button className="button-menu-mobile open-left waves-effect">
                                <i className="mdi mdi-menu"></i>
                            </button>
                        </li>

                    </ul>

                </nav>

            </div>

            <div className="left side-menu">
                <div className="slimscroll-menu" id="remove-scroll">

                    <div id="sidebar-menu">

                        <ul className="metismenu" id="side-menu">

                            <li>
                                <a href="index.html" className="waves-effect">
                                    <i className="mdi mdi-home-variant"></i><span> Dashboard </span>
                                </a>
                            </li>

                            <li>
                                <a href="exercise.html" className="waves-effect"><i className="mdi mdi-bike"></i><span>
                                    Exercise </span></a>
                            </li>
                            <li>
                                <a href="calendar.html" className="waves-effect"><i className="mdi mdi-calendar-check"></i><span>
                                    Calendar </span></a>
                            </li>

                            <li>
                                <a href="index.html" className="waves-effect"><i className="mdi mdi-account-circle"></i><span>
                                    Profile </span></a>
                            </li>
                            <li>
                                <a href="index.html" className="waves-effect"><i className="mdi mdi-settings"></i><span>
                                    Settings </span></a>
                            </li>

                        </ul>

                    </div>

                    {/* <div className="clearfix"></div> */}

                </div>


            </div>


            <div className="content-page">

                <div className="content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-sm-12">
                                <div className="page-title-box">
                                    <h4 className="page-title">Dashboard</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item active">
                                            Welcome to Exercise Tracker
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="card mini-stat bg-warning">
                                    <div className="card-body mini-stat-img">
                                        <div className="mini-stat-icon">
                                            <i className="mdi mdi-cube-outline float-right"></i>
                                        </div>
                                        <div className="text-white">
                                            <h6 className="text-uppercase mb-3">All Exercises</h6>
                                            <h4 className="mb-4">15</h4>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="card mini-stat bg-warning">
                                    <div className="card-body mini-stat-img">
                                        <div className="mini-stat-icon">
                                            <i className="mdi mdi-buffer float-right"></i>
                                        </div>
                                        <div className="text-white">
                                            <h6 className="text-uppercase mb-3">Todays Exercise</h6>
                                            <h4 className="mb-4">3</h4>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="card mini-stat bg-warning">
                                    <div className="card-body mini-stat-img">
                                        <div className="mini-stat-icon">
                                            <i className="mdi mdi-tag-text-outline float-right"></i>
                                        </div>
                                        <div className="text-white">
                                            <h6 className="text-uppercase mb-3">Completed</h6>
                                            <h4 className="mb-4">10</h4>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="card mini-stat bg-warning">
                                    <div className="card-body mini-stat-img">
                                        <div className="mini-stat-icon">
                                            <i className="mdi mdi-briefcase-check float-right"></i>
                                        </div>
                                        <div className="text-white">
                                            <h6 className="text-uppercase mb-3">Pending</h6>
                                            <h4 className="mb-4">5</h4>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <Posts setCurrentId={setCurrentId} />
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                </div>

            </div>

            
        </div>

    )
}

export default Sidebar
