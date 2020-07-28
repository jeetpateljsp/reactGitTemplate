import React from 'react'
import PropTypes from 'prop-types';

export default function NavBar({name, onChangeInput, onButtonClick}){
    return(
        <div className="flex-center">
            <input className="search-bar" value={name} onChange={e => onChangeInput(e)}/>
            <div className="submit-button" onClick={() => onButtonClick()}>Search</div>
        </div>
    )
}

NavBar.propTypes = {
    name: PropTypes.string.isRequired,
    onChangeInput: PropTypes.func.isRequired,
    onButtonClick: PropTypes.func.isRequired
}