import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './todo.css'
import Sidebar from "react-sidebar";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const containerStyle = {
  position: 'relative',
  width: '100%',
  height: '100%'
}
const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627
  },
  zoom: 11
};
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0, sidebarOpen: true, headColor: '', showNav: false };
  }

  listenScrollEvent = e => {
    if (window.scrollY > 800) {
      this.setState({ headColor: 'black', showNav: true })
    } else {
      this.setState({ headColor: 'white', showNav: false })
    }
  }
 
  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className='Container'>
        <div className='Header' >
          {this.state.showNav ? <div className='linkTable'>
            <a href="#" className='linkText'>Link 1</a>
            <a href="#" className='linkText'>Link 2</a>
            <a href="#" className='linkText'>Link 3</a>
          </div> : null}
        </div>
        <div className='outer'>
          <div className='card'>
          </div>
          <div className='textCard'>
            <text style={{ color: '#65CCBB', fontSize: '15px', textAlign: 'left', fontWeight: 'bold', marginTop: '20px' }}>Upcoming Program</text>
            <h2>Donate vitamin B12 supply program</h2>
            <p>When a child gets access to good food, it can change just about everything. Sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            <div className='button'>

            </div>
          </div>
        </div>
        <div className='middle'>
          {/* <div className='medView'>
            <div className='innerView'>

            </div>
          </div> */}
          <div className='textCard'>
            <text style={{ color: '#65CCBB', fontSize: '15px', textAlign: 'left', fontWeight: 'bold', marginTop: '20px' }}>Upcoming Program</text>
            <h2>Donate vitamin B12 supply program</h2>
            <p>When a child gets access to good food, it can change just about everything. Sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            <div className='button'>

            </div>
          </div>
          <img src='https://preview.colorlib.com/theme/charitee/assets/img/gallery/xabout2.png.pagespeed.ic.F46wcyErVA.webp'></img>
        </div>
        <div className='footer'>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyAKlRBgm-MA2-ye6gAbEpm2tSpaz4d78kw" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default Todo;
