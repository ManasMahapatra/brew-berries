import React from 'react';
import './background.styles.scss';

//let backGroundImage = "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&auto=format&fit=crop&w=1301&q=80";
const BackGround = props => (
    <div className="back-ground">
        <div className="back-ground__under"></div>
        {/* <h1 >x: {widthX}</h1> */}
        <div className="back-ground__over" style={{clipPath:props.clipPathX}} ></div>
    </div>
)

export default BackGround;