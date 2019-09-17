import React from 'react';
import './Playingbarright.scss';
import VolumeIcon from '../../../assets/icons/volume_up_26px.png';

const Playingbarright = () => {
    return (
        <div className="rightContent">
            <div className="volumeBar">
                <button className="controlButton">
                    <img src={VolumeIcon} alt="volume" />
                </button>
                <div className="progressBar">
                    <div className="progressBar background">
                        <div className="progress"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Playingbarright;
