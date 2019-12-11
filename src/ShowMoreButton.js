import React, { Component } from 'react';
import './ShowMoreButton.scss';

class ShowMoreButton extends Component {
    render () {
        return (
            <input 
                type='button' 
                value='Show more' 
                onClick={this.props.handleClick}
                className='show-more-button'
            />
        );
    }
}

export default ShowMoreButton;