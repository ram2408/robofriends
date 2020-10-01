import React from 'react';
const Card = (props) => {
	const {name,email,id} = props;
    return (
        <div>
            <img alt='robots' src={`https://robohash.org/${id}?150*150`}/>
            <div>
                <h2>{name}</h2>
                <p>Welcome <b>{email}</b></p>
            </div>
        </div>
    );
} 
export default Card;