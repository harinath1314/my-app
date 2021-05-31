
import { React, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from "react-modal";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

export class FunctionalComponent extends Component {
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
                <h4>Task </h4>
                <Form>
                    <Form.Group>
                        <Form.Label>Enter your First name:</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter your First name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your Last name:</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter your Last name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your Phone number:</Form.Label>
                        <Form.Control type="phone"
                            placeholder="Enter your your email address" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your email address:</Form.Label>
                        <Form.Control type="email"
                            placeholder="Enter your your email address" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Enter your Address:</Form.Label>
                        <Button onClick={this.openModal}>Pick Address From Map</Button>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Click here to submit form
  </Button>
                </Form>


                <Modal
                    isOpen={this.state.isOpen}
                    onRequestClose={this.toggleModal}
                    contentLabel="My dialog"
                >
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
                        <Marker
                            onClick={this.onMarkerClick}
                            name={'Marker Location'}
                        />
                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            onClose={this.onClose}
                        >
                            <div>
                                <h4>{this.state.selectedPlace.name}</h4>
                            </div>
                        </InfoWindow>
                    </Map>
                </Modal>
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
})(FunctionalComponent);


