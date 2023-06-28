import React from "react";
import Card from "./Card";
import PokemonInfo from "./PokemonInfo";

// import axios from "axios"

const Main = () => {
    return (
        <>
            <div className="container">
                <div className="left-content">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />

                    <div className="btn-group">
                        <button>Previous</button>
                        <button>Next</button>
                    </div>
                </div>
                <div className="right-content">
                    <PokemonInfo />
                </div>
            </div>
        </>
    )
}







export default Main;
