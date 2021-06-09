import React from 'react';
import BC from '../images/education/BC.png';
import oracle from '../images/education/Oracle.png';
import pyramid from '../images/experience/pyramid.png';
import './styles/Home.css'
export const Education = () => {
    return(
<div className="container homeBg">
<div className="row">
            <div className="col-lg-4 align-middle col-sm-12">
            <a href="https://www.bellevuecollege.edu/" rel="noreferrer" target="_blank"><img src={BC} className="img-fluid leoImg eduLogo mt-2 mb-2" alt="Bellevue College"></img></a>
                <p className="educationP">
Information Technology - Application Development <br/> Bachelor of Applied Science <br /> 2014 - 2018
                </p>
            </div>
            <div className="col-lg-4 align-middle col-sm-12">
            <a href="https://www.credly.com/badges/eab3fb28-1737-460f-9e32-ec13119e8589?source=linked_in_profile" rel="noreferrer" target="_blank"><img src={oracle} className="img-fluid leoImg eduLogo mt-2 mb-2" alt="Oracle"></img></a>
                <p className="educationP">
Oracle Certified Foundations Associate - Java <br/> 2021
                </p>
            </div>
            <div className="col-lg-4 align-middle col-sm-12">
            <a href="https://pyramidci.com/academy" rel="noreferrer" target="_blank"><img src={pyramid} className="img-fluid leoImg eduLogo mt-2 mb-2" alt="Pyramid Academy"></img></a>
                <p className="educationP">
Pyramid Academy - Java Full Stack Developer <br/> 2021
                </p>
            </div>
            
        </div>
</div>
    )
}