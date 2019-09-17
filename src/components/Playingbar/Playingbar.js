import React from 'react';
import './Playingbar.scss';
import Playingbarleft from './Playingbarleft/Playingbarleft';
import Playingbarcenter from './Playingbarcenter/Playingbarcenter';
import Playingbarright from './Playingbarright/Playingbarright';

const Playingbar = () => {
    return (
        <div className="nowPlayingBarContainer">
            <Playingbarleft className="left" />
            <Playingbarcenter className="center" />
            <Playingbarright className="right" />
        </div>
    );
};

export default Playingbar;
