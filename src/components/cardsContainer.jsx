import React, {useState} from "react";
import Housecard from "./Housecard";
import house11 from "../assets/house1.jpg"
import house22 from "../assets/house2.jpg"
import house33 from "../assets/house3.jpg"
import house44 from "../assets/house4.jpg"
import house55 from "../assets/house5.jpg"
import house66 from "../assets/house6.jpg"
import Navbar from "./Navbar";

const Cardcontainer = () =>{
    let house1= {
        image:house11,
        housename:"Mansion",
        location: "Nairobi" 
    }

    let house2= {
        image:house22,
        housename:"Modarn Villa",
        location: "Naivasha"
    }

    let house3= {
        image:house33,
        housename:"5 Bedroom",
        location: "Nakuru"
    }

    let house4= {
        image:house44,
        housename:"6 Bedroom",
        location: "Kisumu"
    }

    let house5= {
        image:house55,
        housename:"4 Bedroom",
        location: "Mombasa"
    }

    let house6= {
        image:house66,
        housename:"7 Bedroom",
        location: "Turkana"
    }

    

    return(
        <>
        <Navbar/>
        <div className="container houseContainer">
            <div className="row align-items-start">
                <div className="col-md-4">
                    <Housecard 
                    house={house1}
                    />
                </div>
                <div className="col-md-4">
                    <Housecard 
                    house={house2}
                    />
                </div>
                <div className="col-md-4">
                    <Housecard 
                    house={house3}
                    />
                </div>
                <div className="col-md-4">
                    <Housecard
                    house={house4}
                    />
                </div>
                <div className="col-md-4">
                    <Housecard
                        house={house5}
                    />
                </div>
                <div className="col-md-4">
                    <Housecard 
                    house={house6}
                    />
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Cardcontainer