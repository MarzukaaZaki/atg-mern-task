import React, { useState } from 'react';
import { IoMdShare } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegCalendar } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import './Posts.css'
import post1Img from '../../assets/blogposts-images/post1.jpeg'
import post2Img from '../../assets/blogposts-images/post2.jpeg'
import post3Img from '../../assets/blogposts-images/post3.jpeg'
import icon1 from '../../assets/icons-images/icons8-writing-48.png'
import icon2 from '../../assets/icons-images/icons8-microscope-48.png'
import icon3 from '../../assets/icons-images/icons8-calendar-48.png'
import icon4 from '../../assets/icons-images/icons8-briefcase-48.png'
import user1Img from '../../assets/user-images/user1.jpeg'
import user2Img from '../../assets/user-images/user2.png'
import user3Img from '../../assets/user-images/user3.png'
import user4Img from '../../assets/user-images/user4.png'
const Posts = () => {
    const [open, setOpen] = useState(false);
    const handleDropdownToggle= () => {
    
        setOpen(!open);
    }
    return (
        <div className='container posts-container'>
            <div className='row'>
                <div className="col-12 col-md-8">
                    {/* 1st Card */}
                    <div className="card mb-3">
                        <img src={post1Img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="d-flex">
                                <img src={icon1} className="post-img-icon" alt="" />
                                <p className="card-text"><small className="fw-bold">Article</small></p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h5 className="card-title">What if famous brands had regular fonts? Meet RegulaBrands!</h5>
                                <div className='dropdown-container'>
                                    <button onClick={handleDropdownToggle} className="dropdown-button border-0 bg-light-subtle"><BsThreeDots /></button>
                                    <div className={open ? 'dropdown-menu show': 'dropdown-menu'}>
                                        <ul>
                                            <li>Edit </li>
                                            <li> Report </li>
                                            <li>Option 3</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>

                            <p className="text-secondary">I’ve worked in UX for the better part of a decade. From now on, I
                                plan to rei…</p>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    <img src={user1Img} alt=""
                                        className="rounded-circle img-fluid post-user-img me-2" />

                                    <div>
                                        <p className="fw-bold mb-0">Sarthak Kamra</p>
                                        <div className="d-block d-md-none">

                                            <small
                                                className="text-body-secondary fw-semibold me-5">1.4k Views
                                            </small>

                                        </div>

                                    </div>

                                </div>
                                <div className="d-flex">
                                    <div className="d-none d-md-inline">
                                        <IoEyeOutline className='me-2' /><small
                                            className="text-body-secondary fw-semibold me-5">1.4k Views</small>
                                        <IoMdShare className='bg-secondary-subtle rounded' />
                                    </div>
                                    <div>

                                        <button className="d-inline d-md-none py-1 border border-0 rounded"><IoMdShare className='me-2' />Share</button>
                                    </div>

                                </div>


                            </div>

                        </div>
                    </div>
                    {/* 1st Card */}

                    {/* 2nd Card */}
                    <div className="card mb-3">
                        <img src={post2Img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="d-flex">
                                <img src={icon2} className="img-fluid post-img-icon" alt="" />
                                <p className="card-text"><small className="fw-bold">Education</small></p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h5 className="card-title">Tax Benefits for Investment under National Pension Scheme
                                    launched by Government</h5>
                                    <div className='dropdown-container'>
                                    <button onClick={handleDropdownToggle} className="dropdown-button border-0 bg-light-subtle"><BsThreeDots /></button>
                                    <div className={open ? 'dropdown-menu show': 'dropdown-menu'}>
                                        <ul>
                                            <li>Edit </li>
                                            <li> Report </li>
                                            <li>Option 3</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>

                            <p className="text-secondary">I’ve worked in UX for the better part of a decade. From now on, I
                                plan to rei…</p>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    <img src={user2Img} alt=""
                                        className="rounded-circle post-user-img me-2" />

                                    <div>
                                        <p className="fw-bold mb-0">Sarah West</p>
                                        <div className="d-block d-md-none">
                                            <small
                                                className="text-body-secondary fw-semibold me-5">4.8k Views
                                            </small>
                                        </div>

                                    </div>

                                </div>
                                <div className="d-flex">
                                    <div className="d-none d-md-inline">
                                        <IoEyeOutline className='me-2' />
                                        <small className="text-body-secondary fw-semibold me-5">4.8k Views</small>
                                        <IoMdShare className='bg-secondary-subtle rounded' />
                                    </div>
                                    <div>

                                        <button className="d-inline d-md-none py-1 border border-0 rounded"><IoMdShare className='me-2' />Share</button>
                                    </div>

                                </div>


                            </div>

                        </div>
                    </div>
                    {/* 2nd Card */}
                    {/* 3rd Card */}
                    <div class="card mb-3">
                        <img src={post3Img} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <div class="d-flex">
                                <img src={icon3} class="post-img-icon" alt="" />
                                <p class="card-text"><small class="fw-bold">Meetup</small></p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <h5 class="card-title">Finance & Investment Elite Social Mixer @Lujiazui</h5>
                                <div className='dropdown-container'>
                                    <button onClick={handleDropdownToggle} className="dropdown-button border-0 bg-light-subtle"><BsThreeDots /></button>
                                    <div className={open ? 'dropdown-menu show': 'dropdown-menu'}>
                                        <ul>
                                            <li>Edit </li>
                                            <li> Report </li>
                                            <li>Option 3</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>

                            <div class="d-flex">
                                <div class="d-flex me-5">
                                    <FaRegCalendar className='m-1' />
                                    <p>Fri., 12 Oct, 2018</p>
                                </div>
                                <div class="d-flex">
                                    <CiLocationOn className='m-1' />
                                    <p>Ahemedabad, India</p>
                                </div>

                            </div>
                            <button class="border fw-semibold bg-light-subtle w-100 py-2 mb-4 rounded text-danger">
                                Visit Website
                            </button>
                            <div class="d-flex justify-content-between">
                                <div class="d-flex">
                                    <img src={user3Img} alt=""
                                        class="rounded-circle post-user-img me-2" />

                                    <div>
                                        <p class="fw-bold mb-0">Ronal Jones</p>
                                        <div class="d-block d-md-none">
                                            <small
                                                class="text-body-secondary fw-semibold me-5">800 Views</small>
                                        </div>

                                    </div>

                                </div>
                                <div class="d-flex">
                                    <div class="d-none d-md-inline">
                                        <IoEyeOutline className='me-2' />
                                        <small class="text-body-secondary fw-semibold me-5">800 Views</small>
                                        <IoMdShare className='bg-secondary-subtle rounded' />
                                    </div>
                                    <div>

                                        <button class="d-inline d-md-none py-1 border border-0 rounded"><IoMdShare className='me-2' /> Share</button>
                                    </div>

                                </div>


                            </div>

                        </div>
                    </div>
                    {/* 3rd Card */}

                    {/* 4th Card */}
                    <div class="card mb-3">

                        <div class="card-body">
                            <div class="d-flex">
                                <img src={icon4} class="post-img-icon" alt="" />
                                <p class="card-text"><small class="fw-bold">Jobs</small></p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <h5 class="card-title">Software Developer</h5>
                                <div className='dropdown-container'>
                                    <button onClick={handleDropdownToggle} className="dropdown-button border-0 bg-light-subtle"><BsThreeDots /></button>
                                    <div className={open ? 'dropdown-menu show': 'dropdown-menu'}>
                                        <ul>
                                            <li>Edit </li>
                                            <li> Report </li>
                                            <li>Option 3</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>

                            <div class="d-flex">
                                <div class="d-flex me-5">
                                    <FaRegCalendar className='m-1' />
                                    <p>Innovaccer Analytics Private Ltd.</p>
                                </div>
                                <div class="d-flex">
                                    <CiLocationOn className='m-1' />
                                    <p>Noida, India</p>
                                </div>

                            </div>
                            <button class="border bg-light-subtle fw-semibold w-100 py-2 mb-4 rounded"
                                style={{ color: "#02B875" }}> Apply on Timesjobs
                            </button>
                            <div class="d-flex justify-content-between">
                                <div class="d-flex">
                                    <img src={user4Img} alt=""
                                        class="rounded-circle post-user-img me-2" />

                                    <div>
                                        <p class="fw-bold mb-0">Joseph Gray</p>
                                        <div class="d-block d-md-none">
                                            <small
                                                class="text-body-secondary fw-semibold me-5">1.4k Views</small>
                                        </div>

                                    </div>

                                </div>
                                <div class="d-flex">
                                    <div class="d-none d-md-inline">
                                        <IoEyeOutline className='me-2' />
                                        <small class="text-body-secondary fw-semibold me-5">1.4k Views</small>
                                        <IoMdShare className='bg-secondary-subtle rounded' />
                                    </div>
                                    <div>

                                        <button class="d-inline d-md-none py-1 border border-0 rounded">Share</button>
                                    </div>

                                </div>


                            </div>

                        </div>
                    </div>
                    {/* 4th Card */}
                </div>
            </div>
        </div>
    );
};

export default Posts;