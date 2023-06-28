import React, { useState } from "react";
import Card from "./Card";
import PokemonInfo from "./PokemonInfo";
import { useEffect } from "react";

import axios from "axios"

const Main = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState();

    const pokeFun = async () => {
        setLoading(true)
        const res = await axios.get(url);
        // console.log(res)
        setNextUrl(res.date.next);
        setPrevUrl(res.date.previous);
        getPokemon(res.data.results);
        setLoading(false)
        console.log(pokeData)
    }
    const getPokemon = async (res) => {
        res.map(async (item) => {
            const result = await axios.get(item.url)
            // console.log(result.data)
            setPokeData(state => {
                state = [...state, result.data]
                state.sort((a, b) => a.id > b.id ? 1 : -1)
                return state;
            })
        })
    }

    useEffect(() => {
        pokeFun();
    }, [url])

    return (
        <>
            <div className="container">
                <div className="left-content">
                    <Card pokemon={pokeData} loading={loading}  infoPokemon={poke=>setPokeDex(poke)}/>


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
