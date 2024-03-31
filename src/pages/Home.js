import React, {Component} from "react";
import backImage from "./back.png"; // Импортируем изображение
import "./Home.css"


class Home extends Component{
    constructor(props){
        super(props);
        this.state = {isclicked: false};
        this.handleClick = this.handleClick.bind(this);
    };
    handleClick() {
        this.setState(prevState => 
            ({isclicked: !prevState.isclicked}));
    }

    render() {
        const style = {
            width: "100%",
            height: "400px",
            // position: "relative"
            
        };
    
        const imageStyle = {
            width: "100%",
            height: "100%",
            // objectFit: "relative"
        };
    
        const paragraphStyle = {
            color: "purple",
            top: "50%",
            left: "50%"
        };
    
        const first = {
            position: "relative",
            color: "purple",
            top: "50%",
            left: "50%",
        }
        const color = {
            transitionProperty: "background-color",
            transitionDuration: "3s"
          }
        
        return (
            <div>
                <div >
                    {<img style={imageStyle} src={backImage} alt=""></img>}
                    <button ref={this.wrapperRef} className={this.state.isclicked ? "wrapper" : "is-nav-open"} onClick={e => this.handleClick()} >В ногу со временем!</button>
                    <p style={first}>Разрабатываем и создаем</p>
                </div>
            </div>
        );
    }
}
export default Home;