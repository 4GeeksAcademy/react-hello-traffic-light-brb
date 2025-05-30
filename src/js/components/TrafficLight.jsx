import React, {useState} from "react";
import redCircle from "/src/img/red-circle.png";
import yellowCircle from "/src/img/yellow-circle.png";
import greenCircle from "/src/img/green-circle.png";


function TrafficLight(){

        const [ yellow, setYellow] = useState();

        const handleClick= (light) => {
            setYellow(light);
        }
        const getGlowClass = (light) => {
                return yellow == light ? "yellow" : '';
        }

        return (
                
            <div className="d-inline mx-auto">
                <button className= {`d-block ${getGlowClass("green")}`} onClick={()=> handleClick('green')}>
                    <img className=""src={greenCircle} width="300px"/>
                </button>

                 <button className= {`d-block ${getGlowClass("yellow")}`} onClick={()=> handleClick('yellow')}>
                    <img src={yellowCircle} width="300px"/>
                </button>

                 <button className= {`d-block ${getGlowClass("red")}`} onClick={()=> handleClick('red')}>
                    <img src={redCircle} width="300px"/>
                </button>

            </div>

        );


}


export default TrafficLight;


// ReactDOM.render(<TrafficLight />, document.querySelector('#app'));