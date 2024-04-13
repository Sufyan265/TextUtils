import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

    let darkModeStyle = {
        height: "30px",
        width: "30px",
        "--bs-border-opacity": 0.5,
        cursor: 'pointer'

    }

    const changeTitle = () => {
        // For change website title ↓ 
        document.title = "TextUtils - About";
    }
    // For add css in variables (in Object) ↓ 
    let myStyle = {
        transitionDuration: '0.6s',
        // backgroundColor: 'blue',
    }




    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`} style={myStyle}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/TextUtils">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/TextUtils">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={changeTitle} to="/about">About</Link>
                        </li>
                    </ul>

                    <div className='d-flex'>
                        <div className="blueMode mx-1 rounded-circle border border-secondary" style={{ ...darkModeStyle, backgroundColor: "#001d3d" }} onClick={() => { props.toggleMode("darkBlueBody") }}></div>

                        <div className="blueMode mx-1 rounded-circle border border-secondary" style={{ ...darkModeStyle, backgroundColor: "#303339" }} onClick={() => { props.toggleMode("darkBody") }}></div>

                        <div className="blueMode mx-1 rounded-circle border border-secondary" style={{ ...darkModeStyle, backgroundColor: "#24352c" }} onClick={() => { props.toggleMode("darkGreenBody") }}></div>

                        <div className="blueMode mx-1 rounded-circle border border-secondary" style={{ ...darkModeStyle, backgroundColor: "#311d11" }} onClick={() => { props.toggleMode("darkBrownBody") }}></div>

                        <div className="blueMode mx-1 rounded-circle border border-secondary" style={{ ...darkModeStyle, backgroundColor: "#23101b" }} onClick={() => { props.toggleMode("darkPurpleBody") }}></div>

                        <div className="form-check form-switch m-2" > {/* Dark mode  */}
                            <input className="form-check-input" onClick={props.switchDarkMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={props.isChecked} onChange={props.handleCheckboxChange} />
                            <label className={`form-check-label text-${props.theme === "info" ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Dark mode</label>
                        </div>
                    </div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-secondary " type="submit">Search</button>
                    </form>
                </div>
            </div>

        </nav >
    )
}

// 'title' ko pakka string's render krny k liya ↓
// ".isRequired" sy 'title' requird hoga (Otherwise error) ↓ 
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}

// By default 'title' ki value set krny k liya ↓ 
Navbar.defaultProps = {
    title: "Type title here",
}