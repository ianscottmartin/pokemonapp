import React from "react";

const Card = ({ pokemon, loading }) => {

    return (
        <>
            {
                loading ? <h1>loading...</h1> :
                    pokemon.map((item) => {
                        return (
                            <>
                                <div className="card">
                                    <h2>1</h2>
                                    <img src="./images/charmander2.png" alt="" />
                                    <h2>Charmander</h2>
                                </div>
                            </>
                        )
                    })

            }
        </>
    )
}
export default Card;
