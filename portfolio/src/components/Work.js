import React, { useState } from "react";
import { Modal } from 'react-bootstrap'

function Work() {

    const [show, setShow] = useState(false);
    const [project, setProject] = useState('')
    const [githubLink, setGithubLink] = useState('')
    const [deployedLink, setDeployedLink] = useState('')


    const handleClose = () => setShow(false);
    const handleShow = (project) => {
        setProject(project)
        handleLinks(project)
        setShow(true);
    }
    const handleLinks = (project) => {
        console.log(project)
        switch (project) {
            case 'Homework Tracker':
                setGithubLink('https://github.com/DaniDelia253/homework-tracker');
                setDeployedLink('https://quiet-island-37482.herokuapp.com/login')
                break;
            case 'Movie Night':
                setGithubLink('https://github.com/DaniDelia253/movie-night');
                setDeployedLink('https://danidelia253.github.io/movie-night/')
                break;
            case 'Weather Dashboard':
                setGithubLink('https://github.com/DaniDelia253/weather-dashboard');
                setDeployedLink('https://danidelia253.github.io/weather-dashboard/')
                break;
            case 'Note Taker':
                setGithubLink('https://github.com/DaniDelia253/note-taker');
                setDeployedLink('https://mighty-meadow-90247.herokuapp.com/')
                break;
            case 'Random Password Generator':
                setGithubLink('https://github.com/DaniDelia253/random-password-generator');
                setDeployedLink('https://danidelia253.github.io/random-password-generator/')
                break;
            case 'Code Quiz':
                setGithubLink('https://github.com/DaniDelia253/code-quiz');
                setDeployedLink('https://danidelia253.github.io/code-quiz/')
                break;
            case 'Workday Scheduler':
                setGithubLink('https://github.com/DaniDelia253/work-day-scheduler');
                setDeployedLink('https://danidelia253.github.io/work-day-scheduler/')
                break;
            case 'violetlattes':
                setGithubLink('https://github.com/DaniDelia253/violet-lattes');
                setDeployedLink('https://sheltered-castle-99209.herokuapp.com/')
                break;
            default:
                console.log('State not found!');
        }
    }



    return (
        <section className='bodySection' id='work'>
            <div className='bodyBox'>
                <h2 className='sectionHeader'>My Work:</h2>
                <div id='workContainer'>
                    <img onClick={() => handleShow('violetlattes')}
                        className='workImg' src={process.env.PUBLIC_URL + "/work-imgs/violet-lattes.gif"} alt='violet lattes digital art sales'></img>
                    <img onClick={() => handleShow('Homework Tracker')}
                        className='workImg' src={process.env.PUBLIC_URL + "/work-imgs/homeworkTracker.gif"} alt='homework tracker app'></img>

                    <img onClick={() => handleShow('Movie Night')}
                        className='workImg' src={process.env.PUBLIC_URL + "/work-imgs/movieNight.gif"} alt='movie night app'></img>

                    <img onClick={() => handleShow('Weather Dashboard')}
                        className='workImg' src={process.env.PUBLIC_URL + "/work-imgs/weatherDashboard.gif"} alt='weather dashboard app'></img>

                    <img onClick={() => handleShow('Note Taker')}
                        className='workImg' src={process.env.PUBLIC_URL + "/work-imgs/noteTaker.gif"} alt='note taker app'></img>

                    <img onClick={() => handleShow('Random Password Generator')}
                        className='workImg' src={process.env.PUBLIC_URL + "/work-imgs/passwordGenerator.gif"} alt='password generator app'></img>

                    <img onClick={() => handleShow('Code Quiz')}
                        className='workImg' src={process.env.PUBLIC_URL + "/work-imgs/codeQuiz.gif"} alt='code quiz site'></img>

                    <img onClick={() => handleShow('Workday Scheduler')}
                        className='workImg' src={process.env.PUBLIC_URL + "/work-imgs/workdayScheduler.gif"} alt='workday scheduler app'></img>


                    <Modal className='modalBox' show={show} onHide={handleClose}>
                        <Modal.Header id='modalHead' closeButton>
                            <Modal.Title className='modalHeader' >{project}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='linkContainer'>
                                <a className='modalLink' href={githubLink} target='_blank' rel="noreferrer">Click here to view the github repo for this project!</a>
                            </div>
                            <br />
                            <div className='linkContainer'>
                                <a className='modalLink' href={deployedLink} target='_blank' rel="noreferrer">View the deployed application!</a>
                            </div>

                        </Modal.Body>
                    </Modal>

                </div>
            </div>
        </section>
    )
}

export default Work