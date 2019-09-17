import React from 'react';
import Logo from '../../assets/icons/logo.png';
import './Sidebar.scss';
import fire from '../../config/Firebase';
import SearchIcon from '../../assets/icons/search.png';

class Sidebar extends React.Component {
    logOut = e => {
        fire.auth().signOut();
        console.log('klik');
    };
    render() {
        return (
            <div className="navbarWrapper">
                <div className="upperContent">
                    <nav className="navbar">
                        <a href="">
                            <img
                                src={Logo}
                                alt="twitter"
                                className="twitImage"
                            />
                        </a>
                    </nav>
                    <div className="group">
                        <div className="navItem ">
                            <a href="" className="navItem link">
                                Search
                            </a>
                        </div>
                    </div>
                    <div className="group">
                        <div className="navItem">
                            <a href="" className="navItem link">
                                Dodaj Muze
                            </a>
                        </div>
                        <div className="navItem">
                            <a href="" className="navItem link">
                                Your Music
                            </a>
                        </div>
                        <div className="navItem">
                            <a href="" className="navItem link">
                                Your Profile
                            </a>
                        </div>
                    </div>
                </div>
                <div className="downContent">
                    <button className="logout" onClick={this.logOut}>
                        Wyloguj sie
                    </button>
                </div>
            </div>
        );
    }
}

export default Sidebar;
