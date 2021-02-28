import React from 'react';

import Project from '../components/Project';


import noteDemo from '../assets/images/notetakerdemo.gif';
import jsQuiz from '../assets/images/javascriptquizgif1.gif';
import budget from '../assets/images/budget.png';
import sched from '../assets/images/demo1.gif';
import teamGen from '../assets/images/teamhtml.png';
import readme from '../assets/images/readme1.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';    

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Note Taker',
                    subTitle: 'Take and save notes and view them',
                    imgSrc: noteDemo,
                    link: 'https://www.github.com/awpdev/Note-Taker',
                    selected: false
                },
                {
                    id: 1,
                    title: 'JavaScript Quiz',
                    subTitle: 'A quiz that will test your knowledge of JavaScript',
                    imgSrc: jsQuiz,
                    link: 'https://www.github.com/awpdev/JavaScript-Quiz',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Budget Tracker',
                    subTitle: 'A budget tracker app that will work when offline',
                    imgSrc: budget,
                    link: 'https://www.github.com/awpdev/Budget-Tracker-PWA',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Day Planner',
                    subTitle: 'A workday planner app where you can save reminders',
                    imgSrc: sched,
                    link: 'https://www.github.com/awpdev/Work-Day-Scheduler',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Team Generator',
                    subTitle: 'App will produce a summary of the team members info entered',
                    imgSrc: teamGen,
                    link: 'https://www.github.com/awpdev/Team-Generator',
                    selected: false
                },
                {
                    id: 5,
                    title: 'README Generator',
                    subTitle: 'App will produce a README based on your answers',
                    imgSrc: readme,
                    link: 'https://www.github.com/awpdev/Professional-README-Generator',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Project item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;