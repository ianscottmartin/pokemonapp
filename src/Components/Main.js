import React, { useState } from "react";
import Card from "./Card";
import PokemonInfo from "./PokemonInfo";
import { useEffect } from "react";

import axios from "axios"

const Main = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")

    useEffect(() => {

    })

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
