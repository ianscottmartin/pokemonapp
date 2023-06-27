import React from "react";
import Card from "./Card";
import Pokemon from "./PokemonInfo";
import axios from "axios"

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
                </div>
                <div className="right-content">
                    <PokemonInfo />
                </div>
            </div>
        </>
    )
}







export default Main;
