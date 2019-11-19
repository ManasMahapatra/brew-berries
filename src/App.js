import React from 'react';
import BackGround from './components/background/background.component';
import TitleType from './components/title/title.component';
import LandingPage from './pages/landing-page/landing-page.component';
import './App.css';
class App extends React.Component {
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
    //event.Native event gives statistics in regard to the element that fired the event
    //but we need statistics with respect to the whole window object.
    this.setState({ x : window.event.screenX});
  }
  render(){
    let x = this.state.x;
    //setting the clippath dynamically {creating string literal}
    let clipPathX = "polygon(0% 0%, 0% 100%, " + x + "px " + "100%, " + x + "px 0%)";
    return(
      <div className="app" onMouseMove={this.onMouseMove}>
        {/* Load the landing page */}
        <LandingPage clipPathX={clipPathX}/>
      </div>
    )
  }
}

export default App;
