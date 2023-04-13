import React, { useState } from "react";
import "../styles/progresscircularbar.css";
import "../styles/myskills.css";
import imgHtml from "../img/html-icon.svg";
import imgCss from "../img/css-icon.svg";
import imgJs from "../img/javascript-icon.svg";
import imgReact from "../img/react-js-icon.svg";
import imgBoostrap from "../img/boostrap.svg";
import imgRedux from "../img/redux.svg";
import imgNode from "../img/nodejs.svg";
import imgExpress from "../img/expressjs.svg";
import imgSql from "../img/sql.svg";
import imgPostgresql from "../img/postgresql.svg";
import imgSelenium from "../img/selenium.svg";
import imgCypress from "../img/cypress.svg";
import imgAppium from "../img/appium.svg";
import imgPlaywright from "../img/playwright.svg";
import imgCucumber from "../img/cucumber.svg";
import imgGit from "../img/git.svg";
import imgJira from "../img/jira.svg";
import imgScrum from "../img/scrum.svg";
/*Página de SVG: iconduck.comf*/

import { Container, Row, Col } from 'react-grid-system';


const Skills_FrontEnd = () => {
  return (
        <Container>
          <Row>
          <Col md={12}>
          <p className="Titles">My Skills</p>
          </Col>
          </Row>
         
      <Row>
        <Col md={3}>
        <div className="divContainer">
        <div className="divSubContainer">
          <p className="skillsTitles">FRONT END</p>
          {/* HTML */}
          <div className="percent" style={{ "--clr": "yellow", "--num": "90" }}>
            <div className="dot"></div>
            <svg>
              <circle cx="70" cy="70" r="70">
                {" "}
              </circle>
              <circle cx="70" cy="70" r="70">
                {" "}
              </circle>
            </svg>
            <div className="number">
              <h3>80%</h3>
            </div>
          </div>
          <img className="orbita1" src={imgReact} />
          <img className="orbita2" src={imgJs} />
          <img className="orbita3" src={imgHtml} />
          <img id="img3" src={imgRedux} />
          <img id="img4" src={imgCss} />
          <img id="img5" src={imgBoostrap} />
          
          
          </div>
          </div>
        </Col>
        <Col md={3}>

        <div className="divContainer">
        <div className="divSubContainer">
          <p className="skillsTitles">BACK END</p>
          {/* CYPRESS */}
          <div className="percent" style={{ "--clr": "green", "--num": "90" }}>
            <div className="dot"></div>
            <svg>
              <circle cx="70" cy="70" r="70">
                {" "}
              </circle>
              <circle cx="70" cy="70" r="70">
                {" "}
              </circle>
            </svg>
            <div className="number">
              <h3>85%</h3>
            </div>
          </div>
          <img className="orbita1" src={imgNode} />
          <img className="orbita2" src={imgExpress} />
          <img className="orbita3" src={imgSql} />
          <img id="img4" src={imgPostgresql} />
          
        </div>
        </div>
        
        </Col>
        <Col md={3}>
        <div className="divContainer">
        <div className="divSubContainer">  
          <p className="skillsTitles">QA AUTOMATION</p>
          {/* NODE */}
          <div className="percent" style={{ "--clr": "blue", "--num": "90" }}>
            <div className="dot"></div>
            <svg>
              <circle cx="70" cy="70" r="70">
                {" "}
              </circle>
              <circle cx="70" cy="70" r="70">
                {" "}
              </circle>
            </svg>
            <div className="number">
              <h3>75%</h3>
            </div>
          </div>
                   <img className="orbita1" src={imgSelenium} />
          <img className="orbita2" src={imgCypress} />
          <img className="orbita3" src={imgCucumber} />
          <img id="img4" src={imgAppium} />
          <img id="img5" src={imgPlaywright} />
            </div>
          </div>
        </Col>
        <Col md={3}>
        <div className="divContainer">
        <div className="divSubContainer">  
          <p className="skillsTitles">OTHERS</p>
          {/* NODE */}
          <div className="percent" style={{ "--clr": "red", "--num": "90" }}>
            <div className="dot"></div>
            <svg>
              <circle cx="70" cy="70" r="70">
                {" "}
              </circle>
              <circle cx="70" cy="70" r="70">
                {" "}
              </circle>
            </svg>
            <div className="number">
              <h3>85%</h3>
            </div>
          </div>
                   <img className="orbita1" src={imgScrum} />
          <img className="orbita2" src={imgGit} />
          <img className="orbita3" src={imgJira} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
        
  );
};
export default Skills_FrontEnd;
