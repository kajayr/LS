import React from 'react';
import nucampLogo from '../images/experience/nucamp.webp';
import microsoft from '../images/experience/microsoft.png';
import pyramid from '../images/experience/pyramid.png';
import './styles/Home.css'
export const Experience = () => {
    return(
<div className="container homeBg">
<div className="row">
            <div className="col-lg-6 align-middle col-sm-12">
            <h3>Microsoft via HCL</h3>
            <img src={microsoft} className="img-fluid leoImg mt-2 mb-2" alt="microsoft"></img>
                <p >
I worked in phishing and complaints Bing Ads department.
Completed hundreds of tickets from around the world by using Microsoft UCM software.
Developed an application called NQS-Reporter using React.js in order to bring up quality and speed for my team.
                </p>
            </div>
            <div className="col-lg-6 align-middle col-sm-12">
            <h3>Nucamp Coding Bootcamp</h3>
            <img src={nucampLogo} className="img-fluid leoImg mt-2 mb-2" alt="nucamp"></img>
                <p >
A highlight of my responsibilities include facilitating a 4-5 hour workshop once a week to students. 
Teach core, intermediate and advanced React concepts to students.
Grade student assignments and provide feedback.
Assess students understanding of material and provide customized/modified lesson plans if necessary.
                </p>
            </div>
            
        </div>
        <div className="row">
            <div className="col-lg-3 col-sm-1"></div>
            <div className="col-lg-6 col-sm-10 align-middle">
            <h3>Pyramid Academy</h3>
            <img src={pyramid} className="img-fluid leoImg mt-2 mb-2" alt="microsoft"></img>
                <p >
Worked on assignments practicing Core Java fundamentals, Loops, Arrays, Collections, Classes, OOP, Exceptions, IO Files, Functional Programming.
Built several simple projects such as Hangman, Tic-tac-toe, and Battleship using Java and applying Java concepts.
Experience working with multiple people on software projects using Git to put the product together while working remotely.
Experience working with Hibernate to link SQL database
Experience using Git with Github and GitKraken to push commits to a repository. 
                </p>
                <p>Technologies: Java, JavaFX, Spring, Spring Boot, Hibernate, React, GitHub, GitKraken, MySQL, MySQL Workbench, Postman </p>
            </div>
            <div className="col-lg-3 col-sm-1"></div>
        </div>
</div>
    )
}