import React, { Component } from "react";
import "./style.css";
import projects from "../../projects.json";
import PopUps from "../../components/PopUps";

class Portfolio extends Component {
    state = {
        projects,
        show: false,
        handleClose() {
          this.setState({ show: false });
        },
        handleShow() {
          this.setState({ show: true });
        },
        modaltxt:"",
        techonologies: ""
    };

    render() {
        return (
                <div className="container">
                    <div className="row pagecolor">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                                <h4 className="page-header" style={{fontFamily: 'Times New Roman',color:"#000080"}}>Projects<hr/></h4>
                                <PopUps show={this.state.show} handleClose={this.state.handleClose} modaltxt={this.state.modaltxt} techonologies={this.state.techonologies}></PopUps>
                                <div className="row "> 
                                    {this.state.projects.map((project, index) => (
                                        <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 mb-5" key={index}>
                                            <div className="card bg-light mb-3">
                                                <div className="card-header" style={{textAlign:"center"}}>
                                                    <a href={project.applink} target="blank" style={{color:"#000000", textDecorationLine: 'underline', fontWeight:"bold", fontFamily: 'Times New Roman'}}>{project.title}</a>
                                                </div>
                                                <div className="card-body">
                                                    <a href={project.applink} target="blank"><img className="imgwidth4 bord" src={process.env.PUBLIC_URL + project.image} alt={project.title}></img></a>
                                                    {project.title === "Bamazon" ? (
                                                        <>
                                                            <a href="https://drive.google.com/open?id=1zzmj2OI7pAYA3QPWpkXC7wjjeJJ9tiJi" target="blank" style={{color:"blue", textDecorationLine: 'underline', fontSize:"12px"}}>Video1,</a>
                                                            <a href="https://drive.google.com/open?id=1XzgWptH0HEZ8tvZu_i0xRSk3Y377jheX" target="blank" style={{color:"blue", textDecorationLine: 'underline', fontSize:"12px" }}>Video2,</a><br/>
                                                            <a href="https://drive.google.com/open?id=1GFEC2rTiEaf_kGYNk2_W-tzFT5HP8z19" target="blank" style={{color:"blue", textDecorationLine: 'underline', fontSize:"12px" }}>Video3,</a>
                                                            <a href="https://drive.google.com/open?id=1kljUKlesegiFnhJu4gSLJh04_nMkdTJK" target="blank" style={{color:"blue", textDecorationLine: 'underline', fontSize:"12px" }}>Video4</a>
                                                        </>
                                                    ) : (
                                                        null
                                                    )}
                                                    {project.title === "Constructor Word Guess" ? (
                                                        <>
                                                            <a href="https://drive.google.com/open?id=1LzQMD9sZuWZM2pyDMPTID7hLDstYMJDZ" target="blank" style={{color:"blue", textDecorationLine: 'underline', fontSize:"12px"}}>Video</a>
                                                        </>
                                                    ) : (
                                                        null
                                                    )}
                                                    {project.title === "Liri Node.js" ? (
                                                        <>
                                                        <a href="https://drive.google.com/open?id=11q3r_v-y4sV5RPgg_-O7Hr5XWwjFpi9q" target="blank" style={{color:"blue", textDecorationLine: 'underline', fontSize:"12px"}}>Video1,</a>
                                                        <a href="https://drive.google.com/open?id=1rHIaMe89TpXym55S9p5Chl4RLViwnrCJ" target="blank" style={{color:"blue", textDecorationLine: 'underline', fontSize:"12px" }}>Video2,</a><br/>
                                                        <a href="https://drive.google.com/open?id=1V3-Hd6P2ec07JZsdFOdGMIuJ4gO0PW-a" target="blank" style={{color:"blue", textDecorationLine: 'underline', fontSize:"12px" }}>Video3,</a>
                                                        <a href="https://drive.google.com/open?id=1PZvdZQTEhQX7W5jzJA9cy5m91mzADgjz" target="blank" style={{color:"blue", textDecorationLine: 'underline', fontSize:"12px" }}>Video4</a>
                                                        </>
                                                    ) : (
                                                        null
                                                    )}
                                                </div>
                                                <div className="card-footer" style={{textAlign:"center"}}>
                                                    <button className=" mb-1" style={{color:"#000000", fontWeight:"bold", backgroundColor:"palegreen", fontSize:"15px", fontFamily: 'Times New Roman'}}
                                                            onClick=
                                                            {(event) => 
                                                            {
                                                                event.preventDefault();
                                                                let handleCloseCopy = this.state.handleClose.bind(this);
                                                                this.setState({ show: true, modaltxt: project.overview, handleClose: handleCloseCopy, techonologies:project.techonologies});
                                                            }
                                                            }  >
                                                            Overview
                                                    </button>
                                                    <a href={project.githublink} target="blank" style={{color:"#000000", textDecorationLine: 'underline', fontWeight:"bold", fontFamily: 'Times New Roman' }}>Github</a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                </div>
        );
    }
}
export default Portfolio;