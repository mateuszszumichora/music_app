import React from 'react';
import './AddMusic.scss';
import { storage } from '../../../config/Firebase';
import LoginPage from '../../../Pages/LoginPage/LoginPage';

class AddMusic extends React.Component {
    state = {
        mp3: null,
        url: '',
        progress: 0,
        positiveMsg: '',
    };

    handleChange = e => {
        if (e.target.files[0]) {
            this.setState({
                mp3: e.target.files[0],
            });
        }
    };
    handleUpload = () => {
        const { mp3 } = this.state;
        const uploadTask = storage.ref(`mp3/${mp3.name}`).put(mp3);
        if (mp3 === null) {
        }
        uploadTask.on(
            'state_changed',
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
                );

                this.setState({
                    progress: progress,
                });
                if (progress === 100) {
                    this.setState({
                        progress: 0,
                    });
                }
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref('mp3')
                    .child(mp3.name)
                    .getDownloadURL()
                    .then(url => {
                        this.setState({
                            url: url,
                        });
                    });
            },
        );
    };
    render() {
        return (
            <div className="addMusicContainer">
                <div className="buttonsAddMusic">
                    <input
                        id="choose"
                        onChange={this.handleChange}
                        type="file"
                    />
                    <label for="choose" className="input">
                        {' '}
                        Wybierz Plik
                    </label>
                    <br />
                    {this.state.mp3 !== null ? (
                        <button
                            className="uploadButton"
                            onClick={this.handleUpload}
                        >
                            Dodaj do Playlisty
                        </button>
                    ) : null}

                    <progress value={this.state.progress} max="100" />
                </div>
            </div>
        );
    }
}

export default AddMusic;
