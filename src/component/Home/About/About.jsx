import React from 'react';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <section className="about overflow-hidden py-5" id="about">
            <div className="row w-100">
                <div className="row col-md-11 mx-auto ">
                    <div className="col-md-6 img">
                        <Fade duration={2000} left>
                            <img src='https://png.pngtree.com/png-clipart/20190925/original/pngtree-website-page-under-construction-vector-illustration-concept-png-image_4888926.jpg' alt="" className="img-fluid" style={{height:'450px',width:'550px'}}/>
                        </Fade>
                    </div>
                    <div className="col-md-6 ps-2">
                        <Fade duration={2000} right>
                            <p className="miniTitle">What do we do</p>
                            <h1>HOW WE CAN HELP YOU TO <span style={{color:'#CE5959'}}>BUILD</span> YOUR DREAM</h1>
                            <p className="headerContent">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo impedit beatae cupiditate ut optio soluta vel reiciendis, voluptatibus corrupti ipsum modi enim harum aliquid, architecto iusto eaque quod obcaecati dolorum?</p>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;