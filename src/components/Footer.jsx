import './styles/Home.css'
import linkedin from '../images/social/linkedin.svg'
import github from '../images/social/github.svg'
export const Footer = () => {
    return(
<div className="container footerBg">
<div className="row">
            <div className="col-1"></div>
            <div className="col-10 align-middle">
            <a href="https://www.linkedin.com/in/leo-sinani-7b753773/" rel="noreferrer" target="_blank">
    <img className="footerLogo" src={linkedin} alt="linkedin" />
  </a>
  <a href="https://github.com/kajayr" rel="noreferrer" target="_blank">
    <img className="footerLogo" src={github} alt="github" />
  </a>
                <p className="text-center">
Copyright © 2021 Leo Sinani
                </p>
            </div>
            <div className="col-1"></div>
        </div>
</div>
    )
}