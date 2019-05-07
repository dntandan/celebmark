import React from 'react';
import { 
    MDBCol,
    MDBCard,
    MDBCardImage,
    MDBBtn,
    MDBCardBody,
    MDBCardText,
    MDBCardTitle,
    MDBIcon,
} from 'mdbreact';

let InviteCard = (props) => {

    return (
        <MDBCol  lg="4" className="my-3 px-2 py-4 mr-3 float-left responsive-card-width-invite">
            <MDBCard cascade>
                <MDBCardImage cascade className="img-fluid"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRJo0vSwBerTbNFMZw3zPfr9yCrMFuuNSm0sUeKTlKlwjLAe0aoQ"/>
                <MDBBtn floating tag="a" className="ml-auto mr-4 lighten-3 mdb-coalor" action>
                    <MDBIcon icon="user"/>
                </MDBBtn>
                <MDBCardBody cascade>
                    <MDBCardTitle>Deep Narayan Tandan</MDBCardTitle>
                    <MDBCardText>
                        <li className="list-inline-item m-1">
                            <MDBIcon fas className="cyan-text" size="md" icon="poll"/><span
                            className="font-weight-bold">&nbsp;Event Type:</span> invite.event_type
                        </li>
                        &nbsp; &nbsp;
                        <li className="list-inline-item m-1">
                            <MDBIcon fas className="cyan-text" size="md" icon="headset"/><span
                            className="font-weight-bold">&nbsp;Celebrity Role:</span> invite.role
                        </li>
                        &nbsp; &nbsp;
                        <li className="list-inline-item m-1">
                            <MDBIcon fas className="cyan-text" size="md" icon="map-marker-alt"/><span
                            className="font-weight-bold">&nbsp;Event City:</span> invite.city
                        </li>
                        &nbsp; &nbsp;
                        <li className="list-inline-item m-1">
                            <MDBIcon fas className="cyan-text" size="md" icon="city"/><span
                            className="font-weight-bold">&nbsp;Event Venue:</span> invite.venue
                        </li>
                        &nbsp; &nbsp;
                    </MDBCardText>
                </MDBCardBody>
                <div className="rounded-bottom mdb-color unique-color-dark text-center pt-3">
                    <ul className="list-unstyled list-inline font-medium">
                        <li className="list-inline-item pr-2 white-text">
                            <MDBIcon far icon="calendar-check"/> 05/10/2015
                        </li>
                        <li className="list-inline-item pr-2">
                            <a href="#!" className="white-text">
                                <MDBIcon far icon="dot-circle"/> Status
                            </a>
                        </li>
                    </ul>
                </div>
            </MDBCard>
        </MDBCol>
    );
}

export default InviteCard;