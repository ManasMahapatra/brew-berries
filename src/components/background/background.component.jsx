import React from 'react';
import './background.styles.scss';

//let backGroundImage = "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&auto=format&fit=crop&w=1301&q=80";
class BackGround extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            x : 0
        }
        this.onMouseMove = this.onMouseMove.bind(this);
    }
    componentDidMount(){
        //set the initial state to 50% of the screen
        this.setState({ x : (window.innerWidth) / 2 });
    }
    onMouseMove(event){
        this.setState({ x : event.nativeEvent.offsetX});
    }
    render(){
        let x = this.state.x;
        //setting the clippath dynamically {creating string literal}
        let clipPathX = "polygon(0% 0%, 0% 100%, " + x + "px " + "100%, " + x + "px 0%)";
        return(
            <div className="back-ground" onMouseMove={this.onMouseMove}>
                <div className="back-ground__under" onMouseMove={this.onMouseMove}></div>
                {/* <h1 >x: {widthX}</h1> */}
                <div className="back-ground__over" style={{clipPath:clipPathX}} ></div>
            </div>
        )
    }
}

export default BackGround;