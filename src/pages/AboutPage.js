import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Andrew Park. I am a soon-to-be-graduate of the Full Stack Web Development Program through the University of Washington. I have learned a great deal in a short time and I plan to learn a lot more in the near future. I have worked with numerous technologies and I would like to create apps using MERN.</p>

            <p>My dream is to own my own business. I have worked as a software/hardware tester for the last ten years. I currently reside in Seattle, WA.</p>

            <p>Please check out my <a href="https://www.github.com/awpdev">Github profile</a> as I look forward to being involved in some way on a project.</p>

            <p><a href="https:www.linkedin.com/in/andrew-park-b6602b15">Here </a>is my LinkedIn profile.</p>

            <p>Please view my <a href="https://awpdev.github.io/assets/Andrew's%20Resume.pdf">resume.</a></p>
            </Content>
        </div>
    );

}

export default AboutPage;