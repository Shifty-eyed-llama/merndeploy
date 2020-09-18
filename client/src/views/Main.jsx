import React, { useEffect, useState } from 'react';
import axios from 'axios';

import PetTable from '../components/PetTable';
import PetForm from '../components/PetForm';


export default () => {

    const [pets, setPets] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pet')
        .then(res => {
            console.log(res); //Always console.log your res first
            setPets(res.data);
            setLoaded(true);
        });
    }, []);

    const removeFromDom = petId => {
        setPets(pets.filter(pet => pet._id !== petId));
    }

    // ADD PET TO END OF LIST WITHOUT RELOADING PAGE
    const addPet = (pet) => {
        setPets([...pets, pet]);
    }

    return (
        <div>
            {/* <PetForm addPet={addPet} />
            <hr/> */}
            {loaded && <PetTable pets={pets} removeFromDom={removeFromDom}/>}
        </div>
    )
}
