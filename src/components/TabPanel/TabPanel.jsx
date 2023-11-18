import React from 'react';
import { FaPencilAlt } from "react-icons/fa";
import './TabPanel.css'
const TabPanel = () => {
    return (
        <>
         {/* Desktop and Laptop View Start */}
            <div class="container posts-tab-container text-left mt-4 d-none d-md-block">
                <div class="row d-flex">
                    <div class="col-12 col-lg-8 mb-3 flex-start">
                        <ul class="nav nav-underline">
                            <li class="nav-item">
                                <button class="nav-link active" aria-current="page" href="#">All Jobs(32)</button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" href="#">Article</button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" href="#">Event</button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" href="#">Education</button>
                            </li>

                        </ul>

                    </div>
                    <div class="col-12 col-lg-4 text-primary my-3 my-md-0">
                        <button class="btn bg-secondary-subtle me-2 text-black">Write Post <i
                            class="fa-solid fa-caret-down ms-2"></i></button>
                        <button class="btn btn-primary"><i class="fa-solid fa-user-group me-2"></i> Join Group</button>
                    </div>
                    <hr style={{width:"95%"}} class="ms-3" />
                </div>


            </div>
            {/* Desktop and Laptop View End */}

            {/* Tablet and Mobile View Start  */}
            <div class="posts-tab-container mx-4 d-flex justify-content-between d-block mt-3 d-md-none">
                <div>
                    <p class="fw-bold"> Posts(368)</p>
                </div>
                <div>
                    <button class="border border-0 rounded bg-secondary-subtle px-3 py-2"> Filter: All  <i
                        class="fa-solid fa-caret-down ms-2"></i></button> 
                    <button class="btn d-block d-md-none fixed-bottom fixed-right p-3 w-25 rounded-circle shadow" id="mobileEditButton"><FaPencilAlt/></button>
                </div>

            </div>
            {/* Tablet and Mobile View End */}
           
        </>
    );
};

export default TabPanel;