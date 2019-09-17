import React from 'react';
import './Playingbarleft.scss';

const Playingbarleft = () => {
    return (
        <div className="leftContent">
            <span class="albumLink">
                <img
                    src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    alt="music logo album"
                    className="albumImage"
                />
            </span>
            <div className="trackInfo">
                <span className="trackName">
                    <span>Happy birthday</span>
                </span>
                <span className="artistName">Mateusz</span>
            </div>
        </div>
    );
};

export default Playingbarleft;
