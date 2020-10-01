import React from 'react';
import './index.css'
const SearchBox = ({searchChange}) => {
	return (
		<div className='pa2'>
		<input className='pa3 ba bg-green bg-lightest-blue search-input' type='search' 
		placeholder='search robots'
		onChange={searchChange}
		/>
		</div>
	);
};
export default SearchBox;