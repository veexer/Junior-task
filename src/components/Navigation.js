import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <div style={styles.navi_buttons}>
                <p style={{ marginRight: '15px' }}> Start</p>
                <p>
                    <Link to="/my-profile" style={{ marginRight: '15px', textDecoration: 'none'}}>My Profile</Link>
                </p>
            </div>
        );
    }
}

const styles = {
    navi_buttons: {
        display: 'flex',
        marginRight: '5vw',
    }
}


export default Navigation;