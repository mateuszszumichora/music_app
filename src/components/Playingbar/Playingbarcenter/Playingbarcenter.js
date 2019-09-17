import React from 'react';
import './Playingbarcenter.scss';
import ShuffleIcon from '../../../assets/icons/shuffle_26px.png';
import NextIcon from '../../../assets/icons/end_26px.png';
import PlayIcon from '../../../assets/icons/play_26px.png';
import RepeatIcon from '../../../assets/icons/repeat_26px.png';
import PreviousIcon from '../../../assets/icons/skip_to_start_26px.png';

const Playingbarcenter = () => {
    return (
        <div className="content">
            <div className="content upper">
                <div className="buttons">
                    <button className="controlButton">
                        <img src={ShuffleIcon} alt="shuffle" />
                    </button>
                    <button className="controlButton">
                        <img src={PreviousIcon} alt="previous" />
                    </button>
                    <button className="controlButton">
                        <img src={PlayIcon} alt="play" className="bigger" />
                        <img src={PlayIcon} alt="pause" className="pause" />
                    </button>

                    <button className="controlButton">
                        <img src={NextIcon} alt="next" />
                    </button>
                    <button className="controlButton">
                        <img src={RepeatIcon} alt="repeat" />
                    </button>
                </div>
            </div>
            <div className="content down">
                <div className="playbackbar">
                    <span className="progressTime now">0.00</span>
                    <div className="progressBar">
                        <div className="progressBar background">
                            <div className="progress"></div>
                        </div>
                    </div>
                    <span className="progressTime remaining">0.00</span>
                </div>
            </div>
        </div>
    );
};

export default Playingbarcenter;
