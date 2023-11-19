
import React, { useState } from 'react';
import { Button, Col, FormControl, InputGroup, Modal, Row } from 'react-bootstrap';
import './AuthModal.css'
import { FaCaretDown } from "react-icons/fa";
import facebookIcon from '../../assets/icons-images/icons8-facebook-48.png'
import googleIcon from '../../assets/icons-images/icons8-google-48.png'
import atgPic from '../../assets/illustration-images/atg_illustration.png'

const AuthModal = () => {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const handleCloseModal1 = () => setShowModal1(false);
    const handleShowModal1 = () => setShowModal1(true);

    const handleCloseModal2 = () => setShowModal2(false);
    const handleShowModal2 = () => {
        setShowModal1(false)
        setShowModal2(true)
    };


    return (
        <div>
            <Button className='btn-light' aria-current="page" href="#">Create Account.<span className="text-primary fw-semibold" onClick={handleShowModal1}> It's free</span><FaCaretDown/>
            </Button>
<div className='mx-10'>


            <Modal size="lg" show={showModal1} onHide={handleCloseModal1} className='modal'>
                <p class="d-none d-md-block text-success fw-semibold bg-success-subtle rounded px-5 py-3">Let's
                    learn, share & inspire
                    each other with our passion for computer engineering. Sign up now 🤘🏼
                </p>
                <Modal.Header>
                    <div class="d-block d-md-flex justify-content-between w-100">
                        <div>
                            <h4 class="fw-bold">Create Account</h4>
                        </div>


                        <div>
                            <button className="d-none d-md-inline btn btn-sm border border-0 bg-light-subtle small"
                                data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" onClick={handleShowModal2}> Already have an
                                account, <span className="text-primary fw-semibold">Sign in</span></button>

                        </div>
                        <button type="button" class="d-none d-md-block btn-close btn-close-custom"
                            data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal1}></button>
                        <button type="button" class="d-block d-md-none btn-close rounded-circle "
                            style={{ color: 'white', backgroundColor: 'gray', marginTop:'-35px' }} data-bs-dismiss="modal"
                            aria-label="Close" onClick={handleCloseModal1}></button>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <Row sm={1} lg={2}>
                        <Col>
                            <InputGroup>
                                <FormControl
                                    type='text'
                                    placeholder='First Name'
                                    className='modal-input border border-1' />

                                <FormControl
                                    type='text'
                                    placeholder='Last Name'
                                    className='modal-input border border-1' />

                            </InputGroup>
                            <FormControl
                                type='email'
                                placeholder='Email'
                                className='modal-input border border-1'
                            />
                            <FormControl
                                type='password'
                                placeholder='Password'
                                className='modal-input border border-1'
                            />
                            <FormControl
                                type='password'
                                placeholder='Confirm Password'
                                className='modal-input border border-1'
                            />
                            <button className="d-none d-md-block py-2 btn btn-primary rounded-pill w-100 mt-1 mb-3"> Create Account</button>

                            <div className="d-flex d-md-block justify-content-between w-100">
                                <button className="d-md-none btn btn-primary rounded-pill w-lg-100 my-3 py-2"> Create
                                    Account</button>
                                <button
                                    className="d-md-inline d-md-none btn btn-sm border border-0 text-decoration-underline bg-light-subtle small"
                                    data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" onClick={handleShowModal2}><span> or, Sign
                                        in</span>
                                </button>


                            </div>
                            <div class="border border-1 rounded py-1 px-2 mb-2">
            
                                                <img src={facebookIcon}
                                                    style={{width: "20px", height: "20px"}}/>
                                                <button class="btn btn-light border border-0">
                                                    Sign Up with Facebook
                                                </button>
            
                                            </div>
                                            <div class="border border-1 rounded py-1 px-2 mb-2">
            
                                                <img src={googleIcon}
                                                    style={{width: "20px", height: "20px"}}/>
                                                <button class="btn btn-light border border-0">
                                                    Sign Up with Google
                                                </button>
            
                                            </div>

                        </Col>
                        <Col className=' d-none d-lg-block'>
                        
                        <img src={atgPic} alt=""/>
            
                                            <small class="d-block text-secondary">By signing up, you agree to our Terms &
                                                conditions, Privacy policy</small>
                        </Col>
                    </Row>

                </Modal.Body>
            
            </Modal>

            <Modal size='lg' show={showModal2} onHide={handleCloseModal2}>
            <p class="d-none d-md-block text-success fw-semibold bg-success-subtle rounded px-5 py-3">Let's
                    learn, share & inspire
                    each other with our passion for computer engineering. Sign up now 🤘🏼
                </p>
                <Modal.Header>
                <div class="d-block d-md-flex justify-content-between w-100">
                        <div>
                        <h3 class="fw-bold d-none d-md-inline">Sign In</h3>
                            <h3 class="fw-bold d-block d-md-none">Welcome Back !</h3>
                        </div>


                        <div>
                            <button className="d-none d-md-inline btn btn-sm border border-0 bg-light-subtle small"
                                data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" onClick={handleShowModal2}> Don't have an
                                account yet? <span className="text-primary fw-semibold">Create new for free</span></button>

                        </div>
                        <button type="button" class="d-none d-md-block btn-close btn-close-custom"
                            data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal1}></button>
                        <button type="button" class="d-block d-md-none btn-close rounded-circle "
                            style={{ color: 'white', backgroundColor: 'gray', marginTop:'-35px' }} data-bs-dismiss="modal"
                            aria-label="Close" onClick={handleCloseModal2}></button>
                            
                    </div>
                            
                </Modal.Header>
                
                <Modal.Body>
                <Row sm={1} lg={2}>
                        <Col>
                          
                            <FormControl
                                type='email'
                                placeholder='Email'
                                className='modal-input border border-1'
                            />
                            <FormControl
                                type='password'
                                placeholder='Password'
                                className='modal-input border border-1'
                            />
                            
                            <button className="d-none d-md-block py-2 btn btn-primary rounded-pill w-100 mt-1 mb-3"> Sign In</button>

                            <div className="d-flex d-md-block justify-content-between w-100">
                                <button className="d-md-none btn btn-primary rounded-pill w-lg-100 my-3 py-2"> Sign In</button>
                                <button
                                    className="d-md-inline d-md-none btn btn-sm border border-0 text-decoration-underline bg-light-subtle small"
                                    data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" onClick={handleShowModal2}><span> or, Sign
                                        in</span>
                                </button>


                            </div>
                            <div class="border border-1 rounded py-1 px-2 mb-2">
            
                                                <img src={facebookIcon}
                                                    style={{width: "20px", height: "20px", textAlign:'center'}}/>
                                                <button class="btn btn-light border border-0">
                                                    Sign Up with Facebook
                                                </button>
            
                                            </div>
                                            <div class="border border-1 rounded py-1 px-2 mb-2">
            
                                                <img src={googleIcon}
                                                    style={{width: "20px", height: "20px"}}/>
                                                <button class="btn btn-light border border-0">
                                                    Sign Up with Google
                                                </button>
            
                                            </div>
                                            <div className='text-center'>
                                              <small class="text-secondary fw-bold"> Forgot Password?</small>
  
                                            </div>
                                            
                        </Col>
                        <Col className=' d-none d-lg-block'>
                        
                        <img src={atgPic} alt=""/>
            
                                            
                        </Col>
                    </Row>
                </Modal.Body>
            
            </Modal>
            </div>
        </div >
    );
};

export default AuthModal;