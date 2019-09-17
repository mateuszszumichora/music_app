import React from 'react';
import './MainContent.scss';
import { storage } from '../../config/Firebase';

class MainContent extends React.Component {
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
            <div className="Wrapper">
                <input onChange={this.handleChange} type="file" />
                <button onClick={this.handleUpload}>Upload</button>
                <progress value={this.state.progress} max="100" />
            </div>
        );
    }
}

export default MainContent;
