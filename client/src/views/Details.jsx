
import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import { Link, navigate } from '@reach/router';

export default props => {

    const [pet, setPet] = useState ({})

    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${props.id}`)
        .then(res => {
            setPet(res.data);
            setLikes(0)
            console.log(res.data)
        })
    }, [])


    const [likes, setLikes] = useState(0);
    const [used, setUsed] = useState(false);

    const likeCount = e => {
        
        setLikes(likes + 1);
        setUsed(true)
    }

    // const { removeFromDom } = props;
    const deletePet = (props) => {
        axios.delete(`http://localhost:8000/api/pet/${props}`)
            .then(res => {
                console.log(res)
                // removeFromDom(petId)
                navigate('/')
            })
    }

    return (
        <div>
            <h1>Pet Shelter</h1>
            <h3>Learn a little about: {pet.petName}</h3>
            <p>Likes: {likes}</p>
            <p>Pet Type: {pet.petType}</p>
            <p>Description: {pet.petDesc}</p>
            <Link to={`/`}>Go Back</Link><br/>
            <button onClick={(e) => {deletePet(pet._id) }}>Adopt this pet </button>
            <br/>
            <button onClick={(e) => {likeCount() }} disabled={used}>Like</button>
        </div>
    )
}