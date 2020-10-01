import React from 'react';
const Card = (props) => {
	const {name,email,id} = props;
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-10'>
            <img alt='robots' src={`https://robohash.org/${id}?150*150`}/>
            <div>
                <h2>{name}</h2>
                <p>Welcome <b>{email}</b></p>
            </div>
        </div>
    );
} 
export default Card;