import React, {useState} from "react";
import House from "../assets/house.jpg"

const Housecard = ({house}) =>{
    let [price, setPrice] = useState("2,000,000")
    let [count, setCount] = useState(0)

    function changePrice(){
        setPrice(3000000)
    }

    function addCount(){
        setCount(++count)
    }
    return(
        <>
        <div className="card" style={{width: "18rem", marginTop: "15px"}}>
            <img src={house.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{house.housename}</h5>
                        <h5>Price: {price} ksh</h5>
                        <h5>Location: {house.location}</h5>
                        <p className="favoritecount">&#10084; {count}</p>
                        <button type="button" className="btn btn-primary" onClick={changePrice}>Buy House</button>
                        <button className="btn btn-secondary favoritebutton" onClick={addCount}>Like</button>
                </div>
        </div>
        </>
    )
}
export default Housecard