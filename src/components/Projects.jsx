import React from 'react';
import nqs from '../images/projects/nqs.png';
import springbootCRUD from '../images/projects/SpringBootCRUD.png';
import humanGoblin from '../images/projects/humanGoblins.png';
import battleship from '../images/projects/battleship.png';
import oldPortfolio from '../images/projects/oldPortfolio.png';
import './styles/Home.css'
export const Projects = () => {
    return(
<div className="container homeBg">
   <div className="row"> 
            <div className="col-lg-6 align-middle col-sm-12">
            <a  href="http://nqs-reporter.herokuapp.com/" rel="noreferrer" target="_blank"><img src={nqs}  className="img-fluid projectImg anim mt-2 mb-2" alt="NQS"></img> </a>
            </div>
            <div className="col-lg-6 align-middle col-sm-12">
            <h3>Network Quality Service Reporter</h3>
                <p >
Technologies: React<br />
Created an Ad reporter for the team to add the important keys, save time, and store the needed data to build a reporting form.
This application is not designed for small screens.
                </p>
            </div>
            
   </div>

   <div className="row"> 
            <div className="col-lg-6 align-middle col-sm-12">
            <a  href="https://github.com/kajayr/SpintBoot_CRUD" rel="noreferrer" target="_blank"><img src={springbootCRUD}  className="img-fluid projectImg anim mt-2 mb-2" alt="SpringBoot"></img> </a>
            </div>
            <div className="col-lg-6 align-middle col-sm-12">
            <h3>Spring Boot CRUD PROJECT</h3>
                <p >
Technologies: Spring Boot, JPA, MySQL<br />
Created an Spring Boot application connected to MySQL via JPA. The Project contains add, update, delete, find, findAll user methods.
                </p>
            </div>
            
   </div>
   <div className="row"> 
            <div className="col-lg-6 align-middle col-sm-12">
            <a  href="https://github.com/kajayr/Human_VS_Gablins_Game" rel="noreferrer" target="_blank"><img src={humanGoblin}  className="img-fluid projectImg anim mt-2 mb-2" alt="humanGoblin"></img> </a>
            </div>
            <div className="col-lg-6 align-middle col-sm-12">
            <h3>Human VS Goblins</h3>
                <p >
Technologies: Java<br />
Game Features: Map, Human, Treasures, Goblins, Info Section, Shop<br />
Play a new advanture game! fight with goblins, get tresures and more! There is a map that human is looking for treasures to upgrade his strength. There are goblins living in area that human should fight with and if winning the fight, human is able to take thier gold and buy health or attack related items. The Human has inventory to keep all the treasures.
               </p>
            </div>
            
   </div>

   <div className="row"> 
            <div className="col-lg-6 align-middle col-sm-12">
            <a  href="https://github.com/kajayr/Battleship" rel="noreferrer" target="_blank"><img src={battleship}  className="img-fluid projectImg anim mt-2 mb-2" alt="battleship"></img> </a>
            </div>
            <div className="col-lg-6 align-middle col-sm-12">
            <h3>Battleship Game</h3>
                <p >
Technologies: Java<br />
Game Features: Double Map, Multiplayer, 5 Ships <br />
Play an interesting multiplayer game! 2 players can interact in this game by having their own board. It contains all the ships such as Carrier, Battleship, Cruiser, Submarine and Destroyer.
               </p>
            </div>
            
   </div>

   <div className="row"> 
            <div className="col-lg-6 align-middle col-sm-12">
            <a  href="http://lsinani.herokuapp.com/" rel="noreferrer" target="_blank"><img src={oldPortfolio}  className="img-fluid projectImg anim mt-2 mb-2" alt="oldPortfolio"></img> </a>
            </div>
            <div className="col-lg-6 align-middle col-sm-12">
            <h3>Old Portfolio Page</h3>
                <p >
Technologies: React<br />
An old portfolio page. My plan about this portfolio was creating something different which is not norm as a portfolio. A relaxing envirment to represent my projects.
               </p>
               <p>
                   You can find even more projects in my <a href="https://github.com/kajayr" rel="noreferrer" target="_blank" className="github">GitHub</a> Page 
               </p>
            </div>
            
   </div>
</div>
    )
}