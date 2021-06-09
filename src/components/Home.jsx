import './styles/Home.css'
import leoPic from '../images/home/leo.png'
export const Home = () => {
    return(
<div className="container homeBg">
<div className="row">
            <div className="col-3"></div>
            <div className="col-6 align-middle">
            <h4>Hi, my name is Leo and I'm a full stack java developer</h4>
            <img src={leoPic} className="img-fluid leoImg mt-2 mb-2" alt="Leo"></img>
                <p className="text-center">
I have started the role Network Quality Service for Microsoft as contractor via HCL. Currently I'm coding instructor at Nucamp coding bootcamp. Recently I have joined to Pyramid Academy to improve my Java and Backend Skills. I was able to learn Java, Spring Boot framework, and create a few java based projects.
I am a results-driven IT Application Development graduate with related education, practicum, and experience to contribute to long-range operational objectives in Web Developer and Software Developer role.
When not at work, you can find me with my wife enjoying activities related to health including proper diet, running and enjoying the great outdoors in the Pacific NW.
I welcome contact for Network Building via email at leo.sinani@pyramidci.com.
                </p>
            </div>
            <div className="col-3"></div>
        </div>
</div>
    )
}