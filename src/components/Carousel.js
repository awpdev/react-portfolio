import React from 'react';

import Project from '../components/Project';

import noteDemo from '../assets/notetakerdemo.gif';
import jsQuiz from '../assets/javascriptquizgif1.gif';
import empTrack from '../assets/etracker.png';
import sched from '../assets/demo1.gif';
import teamGen from '../assets/teamhtml.png';
import readme from '../assets/readme1.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Note Taker Demo',
                    subTitle: 'type and save notes then look up notes',
                    imgSrc: noteDemo,
                    link: 'https://www.github.com/awpdev/Note-Taker',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Code Quiz',
                    subTitle: 'A short quiz that tests your knowledge of JavaScript',
                    imgSrc: jsQuiz,
                    link: 'https://www.github.com/awpdev/Javascript-Quiz',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Employee Tracker',
                    subTitle: 'A CLI based app to maintain a database of employees',
                    imgSrc: empTrack,
                    link: 'https://github.com/awpdev/Employee-Tracker',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Workday Scheduler',
                    subTitle: 'A workday scheduler able to have reminders saved',
                    imgSrc: sched,
                    link: 'https://github.com/awpdev/Work-Day-Scheduler',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Team Generator',
                    subTitle: 'A CLI based application that summarizes software team members data',
                    imgSrc: teamGen,
                    link: 'https://github.com/awpdev/Team-Generator',
                    selected: false
                },
                {
                    id: 5,
                    title: 'README Generator',
                    subTitle: 'Generates a README based on user\'s input',
                    imgSrc: readme,
                    link: 'https://github.com/awpdev/Professional-README-Generator',
                    selected: false
                }
            ]
        }
    }


    handleProjClick = (id, proj) => {

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
            return <Project item={item} click={(e => this.handleProjClick(item.id, e))} key={item.id} />
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