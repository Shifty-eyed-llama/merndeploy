
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Link, navigate } from '@reach/router';


export default props => {
    const {id} = props;
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDesc, setPetDesc] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");
    const [error, setError] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(res => {
                setPetName(res.data.petName);
                setPetType(res.data.petType);
                setPetDesc(res.data.petDesc);
                setSkillOne(res.data.skillOne);
                setSkillTwo(res.data.skillTwo);
                setSkillThree(res.data.skillThree);
            })
    }, [])

    const updatePet = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pet/${id}`, {
            petName, petType, petDesc, skillOne, skillTwo, skillThree
        })
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => {
                const errs = [];
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
            <h3>Update This Pet</h3>
            <Link to={"/"}>Go Back</Link>
            <form onSubmit={updatePet}>
            <p>{error[0]}</p>
                <p>
                    <label>Pet Name</label><br/>
                    <input type="text" 
                        value={petName}
                        onChange = {(e) => setPetName(e.target.value)} />
                </p>
                <p>{error[1]}</p>
                <p>
                    <label>Pet Type</label><br/>
                    <input type="text" 
                        value={petType}
                        onChange = {(e) => setPetType(e.target.value)} />
                </p>
                <p>{error[2]}</p>
                <p>
                    <label>Pet Description</label><br/>
                    <input type="text" 
                        value={petDesc}
                        onChange = {(e) => setPetDesc(e.target.value)} />
                </p>
                <p>
                    <label>Pet Skill</label><br/>
                    <input type="text" 
                        value={skillOne}
                        onChange = {(e) => setSkillOne(e.target.value)} />
                </p>
                <p>
                    <label>Pet Skill</label><br/>
                    <input type="text" 
                        value={skillTwo}
                        onChange = {(e) => setSkillTwo(e.target.value)} />
                </p>
                <p>
                    <label>Pet Skill</label><br/>
                    <input type="text" 
                        value={skillThree}
                        onChange = {(e) => setSkillThree(e.target.value)} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}