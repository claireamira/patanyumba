import React from "react";
import Housecard from "./Housecard";

const Cardcontainer = () =>{
    return(
        <>
        <div className="container houseContainer">
            <div className="row align-items-start">
                <div className="col-md-4">
                    <Housecard/>
                </div>
                <div className="col-md-4">
                    <Housecard/>
                </div>
                <div className="col-md-4">
                    <Housecard/>
                </div>
                <div className="col-md-4">
                    <Housecard/>
                </div>
                <div className="col-md-4">
                    <Housecard/>
                </div>
                <div className="col-md-4">
                    <Housecard/>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Cardcontainer