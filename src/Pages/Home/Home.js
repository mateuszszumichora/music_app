import React from 'react';
import fire from '../../config/Firebase';
import Playingbar from '../../components/Playingbar/Playingbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import AddMusic from '../../components/MainContent/addMusic/AddMusic';
class Home extends React.Component {
    render() {
        return (
            <div className="mainWrapper">
                <div className="topWrapper">
                    <Sidebar className="sidebar" />
                    <AddMusic className="maincontent" />
                </div>
                <Playingbar className="playingbar" />
            </div>
        );
    }
}

export default Home;
