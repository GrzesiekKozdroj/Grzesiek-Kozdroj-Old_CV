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
                <div className="left__content">
                    <a className="portfolio button" href="https://grzesiekkozdroj.github.io/CV/" target="_blank">Portfolio</a>
                </div>
            </section>
            
            
            <section className="right__side">
            
                <h2 className="right__header">work history</h2>
                <ul className="projects__list">
            
            
                    <li>
                        <p>
                        <h4>From November 2011 until January 2019</h4>
I was working as a Production Operator, employed first through Gi Group agency then contracted employee for Cooper Vision contact lenses manufacturer. I was working on production line performing various tasks required to keep production flow seamless, yelds high and product of the highest standards. Resetting robots back to home position, minor repairs performed on machinery running 24/7, recording of every production step as they happen, constant control of quality and volume of produced contact lenses using various tools such as microscopes, documators, Humphrey lens analyzers  as well as massive production odules filled with robots. 
                        </p>
                    </li>
                    <li>
                        <p>
                        <h4>in 2017, sporadically</h4>
I have worked for Autism Hampshire as supply worker mostly in Bassett House. Although I enjoyed this work it was time when I had many life changes and I could not continue working for Cooper Vision, where I moved from part time to full time position and as a supply worker while in the meantime my second daughter was born. In this job I was mainly assisting autistic young adults in they daily routines.
                        </p>
                    </li>
            
                    <li className="bringMeToTop">
                        <p>
                        <h4 >June to October in years 2008, 2009 and 2010</h4>
ADS Recruitment Agency in Southampton:
Full time agency work during summer breaks while studying at university. I have worked in variety of warehouses and food factories. 
                        </p>
                    </li>
            
                </ul>
<section style={{marginTop: -95}}>
            
                <h2 className="right__header">references</h2>
                <div className="education">
                <h4>Cooper Vision SP3</h4>
Ensign Way SO31 4RF Hamble,
My last team leader was Przemek Jasinski
PJasinski@coopervision.co.uk 
<br/><br/>
<h4>Gi Group  </h4> 21London Road SO15 2AD Southampton
Tel: 02380 399 998 southampton@gigroup.com 
<br/><br/>
<h4>Autism Hampshire </h4>Bassett House
3 Basset Avenue SO16 7AA Tel:
023 8076 6162
                </div>
            
                <h2 className="right__header">education</h2>
                <div className="hobbies__content">
                    <p style={{textAlign:"center"}}>July 2011 I was awarded an equivalent of British Bachelor degree standard in Physiotherapy
</p>
<p style={{textAlign:"center"}}>January 2016 Care Certificate by my employer Autism Hampshire</p>
<p style={{textAlign:"center"}}>January-February 2019 Coders Lab, IT school. Now I am qualified junior react developer</p>
                </div></section>
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