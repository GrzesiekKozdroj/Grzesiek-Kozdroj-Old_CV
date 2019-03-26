import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class App extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (<>
            <section className="main__container">
            
            <section className="left__side">
                <div className="my__picture" alt="my picture"></div>
            
                <h1 className="my__name">Grzegorz Kozdroj</h1>
                <h3 className="contacts">Contact me:</h3>
            
                <div className="left__content">
                    <p className="phone button">+44 745 453 40 18</p>
                </div>
            
                <div className="left__content">
                    <p className="email button">GregKozdroj@gmail.com</p>
                </div>
            
                <div className="left__content">
                    <a className="github button" href="https://github.com/GrzesiekKozdroj" target="_blank">Github</a>
                </div>
            
                <div className="left__content">
                    <a className="linkedin button" href="https://www.linkedin.com/in/grzegorz-kozdroj/" target="_blank">Linkedin</a>
                </div>
            </section>
            
            
            <section className="right__side">
            
                <h2 className="right__header">Profile</h2>
                <p>
                    Previously I have worked in a factory, where robots produce contacts lenses. I wanted to challenge
                    myself and do something different, to find a career where skills and quality of my work matter. I am
                    impressed by how computer programs can be automated to carry out sophisticated task. In 2018 I became
                    interested in coding. my first lessons were on mobile app SoloLearn, then various online tutorials and
                    finally a Boot Camp. Since then I am completely hooked up into coding.
                </p>
            
                <h2 className="right__header">Projects</h2>
                <ul className="projects__list">
            
            
                    <li>
                        <p>
                            <a className="button__link button" href="https://github.com/GrzesiekKozdroj/gimball" target="_blank">Guild Ball</a>
                            Work In Progress. Physical tabletop game into jQuery, JavaScript and HTML canvas.
                        </p>
                    </li>
                    <a href='https://github.com/GrzesiekKozdroj/gimball' target="_blank"><img className="projects__image" src={require("../img/guildball.jpg")}/></a>
                    <a href="https://grzesiekkozdroj.github.io/tic-tac-toe-5/" target="_blank"><img className="projects__image" src={require('../img/ttt5.jpg')}/></a>
                    <li>
                        <p>
                            <a className="button__link button" href="https://github.com/GrzesiekKozdroj/tic-tac-toe-5" target="_blank">Tic-Tac-Toe-5</a>
                            Tic-tac-toe game using jQuery.
                        </p>
                    </li>
            
                    <li>
                        <p className="sitonchair">
                            <a className="button__link button" href="https://github.com/GrzesiekKozdroj/Sit-On-Chair-Web-Page"
                                target="_blank">Sit
                                On Chair</a>
                            Bootcamp project with Pixel Perfect and basic HTML & CSS.
                        </p>
                    </li>
                    <a href="https://grzesiekkozdroj.github.io/Sit-On-Chair-Web-Page/" target="_blank"><img className="projects__image" src={require("../img/sitonchair.jpg")}/></a>
            
                </ul>
            
                <h2 className="right__header">Tools/technologies</h2>
                <ul className="right__side__list tools">
                    <li>HTML, RWD, Sass, CSS,</li>
                    <li>JavaScript, jQuery, React.js, ECMAScript 6,</li>
                    <li>Git, gulp, yarn, Visual Studio.</li>
                </ul>
            
                <h2 className="right__header">Education</h2>
                <div className="education">
                        <a href="https://coderslab.pl/en" target="_blank">
                            <div className="cl__logo" alt="Coders Lab, IT school"></div>
                        </a>
                    <ul className="right__side__list">
                        <li>Coders Lab, IT school (January - February 2019)</li>
                        <li>240 hours of classes focusing on the above technologies</li>
                        <li>With exams at the end of each week</li>
                        <li>They got me completely hooked up with coding</li>
                    </ul>
                </div>
            
                <h2 className="right__header">Hobbies</h2>
                <div className="hobbies__content">
                    <p>Painting tabletop fantasy minatures.
                        I like good fantasy and sci-fi games, books and movies.
                        I play table top games and computer games</p>
                    <img className="models" src={require("../img/cabinet.jpg")} alt="picture of my display cabinet"/>
                </div>
            </section>
            
            </section>
            
            </>)

    }
}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App/>
,
        document.getElementById('app')
    );
});