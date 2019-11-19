import React from 'react';
import BackGround from '../../components/background/background.component';
import TitleType from '../../components/title/title.component';
import './landing-page.styles.scss';

let LandingPage = (props) => (
    <div className = "container">
        {/* Load the background */}
        <BackGround clipPathX={props.clipPathX}/>
        {/* Load the title */}
        <TitleType />
    </div>   
)
export default LandingPage;