import React from 'react';
import logo from '../../assets/logo.png'
import './title.styles.scss';
const TitleType = () => (
    <div className="title-type">
        <h1 className="title-type__label">It takes two hands <br /> to hold a whoo...ooper!!</h1>
        <img src={logo} alt="" className="title-type__title"/>
    </div>
)

export default TitleType;