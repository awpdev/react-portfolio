import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import pic from '../assets/apark.png';

function AboutPage(props) {

    const style = {
        "height": "360",
        "width": "320"
    }

    return(
        <div>
            <Hero title={props.title} />
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                    <img src={pic} alt="andrew" style={style}></img>
                </div>
            </div>

            <Content>
            <p>Hello, my name is Andrew Park. I am a soon-to-be-graduate of the Full Stack Web Development Program through the University of Washington. I have learned a great deal in a short time and I plan to learn a lot more in the near future. </p>

            <p>Please check out my <a href="https://www.github.com/awpdev">Github profile</a> as I look forward to being involved in some way on a project.</p>

            <p><a href="https:www.linkedin.com/in/andrew-park-b6602b15">Here </a>is my LinkedIn profile.</p>

            <p>Please view my resume <a href="https://awpdev.github.io/react-portfolio/assets/Andrew's%20Resume.pdf">here.</a></p>
            </Content>


        </div>
    );

}

export default AboutPage;