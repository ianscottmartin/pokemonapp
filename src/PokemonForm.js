// import React from "react";
// import { Form } from "semantic-ui-react";


// function PokemonForm({ onAddPokemon }) {
//     const [formData, setFormData] = usestate({
//         name: "",
//         id: "",
//         ability: "",
//         stat: "",
//     });

//     function handleChange(event) {
//         setFormData({
//             ...formData,
//             [event.target.name]: event.target.value,
//         });
//     }
//     function handleSubmit() {

//         const newPokemon = {
//             name: formData.name,
//             ability: formData.ability,
//             stats: formData.stat,
//             frontUrl: "",

//         }
//     };

//     fetch("http://localhost:3000/pokemon", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newPokemon),
//     })
//         .then((res) => res.json())
//         .then(onAddPokemon);
// }

// return (
//     <div>
//         <h3>New Pokemon!</h3>
//         <Form onSubmit={handleSubmit}>

//             <Form.Group widths="equal">
//                 <Form.Input
//                     fluid
//                     label="Name"
//                     placeholder="Name"
//                     naem="Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                 />

//                 <Form.Input
//                     fluid
//                     label="stats"
//                     placeholder="stats"
//                     name="stats"
//                     value={formData.stats}
//                     onChange={handleChange}
//                 />

//                 <Form.Input
//                     fluid
//                     label="Front Image URL"
//                     placeholder="Url"
//                     name="frontUrl"
//                     value={formData.frontUrl}
//                     onChange={handleChange}
//                 />


//             </Form.Group>
//             <Form.Button>New Pokomon</Form.Button>
//         </Form>
//     </div>
// );
// export default PokemonForm;
