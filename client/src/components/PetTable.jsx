
import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

export default (props) => {

    return (
        <div>
            <h1>Pet Shelter</h1>
            <h3>Adopt one of these pets already guy.</h3>
            <Link to={'/pet/new'} >Add a new pet</Link>
            <table>
                <thead>
                    <tr>
                        <th>Pet Name</th>
                        <th>Pet Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {console.log(props.pets)}
                   
                    {console.log(props.pets.sort((a,b) => (a.petType > b.petType) ? 1 : ((b.petType > a.petType) ? -1 : 0)))}
                       
                    {props.pets.map((pet, idx) => 
                          <tr key={idx}>
                                <td>{pet.petName}</td>
                                <td>{pet.petType}</td>
                                <td><Link to={`/pet/${pet._id}`}>View</Link> | <Link to={`/pet/${pet._id}/edit`}>Edit</Link></td>
                            </tr>
                        )}
                </tbody>

            </table>
        </div>
    )
}