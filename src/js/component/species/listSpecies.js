import React, { useContext } from 'react'
import {Context} from '../../store/appContext'
import {Link} from 'react-router-dom'

export default function ListSpecies(){
    const {store, actions} = useContext(Context)
    let imgUrl = "https://starwars-visualguide.com/assets/img/species"

    return(
        <div>
            <h1> Species</h1>
            <ul className="list-group list-group-horizontal overflow-auto">
                {store.species.length > 0 ? store.species.map((specie, index)=>{
                    return(
                        <li key={index} className="list-group-item" style={{background: "black"}}>
                            <div className="card">
                                <img src={`${imgUrl}/${specie.uid}.jpg`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{specie.name}</h5>                    
                                    <Link to={`/species/${specie.uid}`} className="btn btn-primary">Details</Link>
                                </div>
                            </div>
                        </li> 
                    )
                }) : <h1>No data available</h1> }
            </ul> 
        </div>
    )
}