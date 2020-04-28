import React from 'react';
import {Title} from '../pageObjects';
import {properties} from '../Config/properties';
import SkypeLogo from '../Images/Skype.svg';

function Home() {
  return (
    <div id="mainBody">
        <div className="content overlay">
            <div className="description">
                <p>Thinking out of the box is outdated.</p>
                <p>Let's just throw the box away.</p>
                <a href="/about"><button class="btn btn-outline-secondary btn-lg">Tell Me More!</button></a>
            </div>
        </div>
        <div className="content-grid">
            <div className="">
                <Title title="Why NoBox Software Solutions?" />
                <p>We believe that software should be as unique as the business that uses it. All of our software is designed with you in mind.</p>
                <p>We start with what happens in your business, and finish with making your business accessible everywhere.</p>
            </div>
            <div className="feature-grid-3">
                <Title title="Need to Contact Us?" />
                <p>We're here for you, regardless of your need. Feel free to get hold of us in one of these ways:</p>
                <p><img src={SkypeLogo} alt="Skype Logo" className="icon-skype"/><a href="tel:{properties.MainPhone}">{properties.MainPhone}</a></p>
                <p><img src={SkypeLogo} alt="Email Logo" className="icon-email"/><a href="tel:{properties.MainPhone}">{properties.CompanyEmail}</a></p>
                <p><img src={SkypeLogo} alt="Address Logo" className="icon-address"/><a href="tel:{properties.MainPhone}">{properties.CompanyAddressLongForm}</a></p> 
            </div>
            
        </div>
    </div>
  );
}

export default Home;
