
import { React, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';


const markerPositions = [{ name: "harinath", lat: "18.8643583", lng: "18.842348" }, { "name": "Likhitha", lat: "19.8643583", lng: "19.842348" }, { "name": "ramu", lat: "20.8643583", lng: "20.842348" }]

export class SecondClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }
    }
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    toggleModal = () => {
        this.setState({ isOpen: false })
    }

    openModal = () => {
        this.setState({ isOpen: true })
    }
    render() {
        return (
            <div style={{
                display: 'block',
                width: 700,
                padding: 30
            }}>
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={
                        {
                            lat: -1.2884,
                            lng: 36.8233
                        }
                    }
                >
                    {markerPositions.map((item, index) => { return (<Marker
                        title={item.name}
                        name={item.name}
                    />)})}
                </Map>
            </div>
        )
    }
}






const mapStyles = {
    width: '100%',
    height: '100%'
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDiFfP-rtF2kX3YiwYHMrNJsdpUvbd_Fbc'
})(SecondClassComponent);


