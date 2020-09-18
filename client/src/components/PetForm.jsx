import React, {useState } from 'react';
import axios from 'axios';

import { navigate, Link } from '@reach/router';

export default (props) => {
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDesc, setPetDesc] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");

    const [likes, setLikes] = useState(0);

    const [error, setError] = useState([])


    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pet', {
            petName, petType, petDesc, skillOne, skillTwo, skillThree, likes
        })
        .then(res => {
            console.log(res.data)
            // props.addPet(res.data) // this adds pets without reloading
            navigate("/")
            
        })
        // .catch(err => console.log("woopsie doodles"))
        .catch(err => {
            const errs = [];
            console.log(err.response)
            console.log(err.response.data.errors);
            Object.keys(err.response.data.errors).map(key => {
                alert(err.response.data.errors[key].message)
                errs.push(err.response.data.errors[key].message)
            })
            setError(errs)
        })
    }

    return (
        <div>
            <h1>Pet Shelter</h1>
            <h3>Add this pet already there yous</h3>
            <Link to={"/"}>Go Back</Link>
            <form onSubmit={onSubmitHandler}>
            <p>{error[0]}</p>
                <p>
                    <label>Pet Name</label><br/>
                    <input type="text" onChange = {(e) => setPetName(e.target.value)} />
                </p>
                <p>{error[1]}</p>
                <p>
                    <label>Pet Type</label><br/>
                    <input type="text" onChange = {(e) => setPetType(e.target.value)} />
                </p>
                <p>{error[2]}</p>
                <p>
                    <label>Pet Description</label><br/>
                    <input type="text" onChange = {(e) => setPetDesc(e.target.value)} />
                </p>
                <p>
                    <label>Pet Skill</label><br/>
                    <input type="text" onChange = {(e) => setSkillOne(e.target.value)} />
                </p>
                <p>
                    <label>Pet Skill</label><br/>
                    <input type="text" onChange = {(e) => setSkillTwo(e.target.value)} />
                </p>
                <p>
                    <label>Pet Skill</label><br/>
                    <input type="text" onChange = {(e) => setSkillThree(e.target.value)} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}