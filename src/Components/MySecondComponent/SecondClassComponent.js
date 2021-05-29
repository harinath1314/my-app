import React, { useState, useEffect } from 'react';

export default function SecondClassComponent() {
    const [values, setValues] = useState({
        firstName: '',
        phone: '',
        email: '',
        address: '',
        toggle:0
    });

    const handleFirstNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            firstName: event.target.value,
        }));
    };

    const handlephone = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            phone: event.target.value,
        }));
    };
    
    const handlemail = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            email: event.target.value,
        }));
    };
    const handleaddress = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            address: event.target.value,
        }));
    };
    const showDetails = () => {
        console.log("Clicked the sumitted ")
        setValues((values)=>({
            ...values,
            toggle : !values.toggle
        }))
        document.getElementById("block").style.display=  !values.toggle ? "block":"none"
    };
    
    return (
        <div>
            <div >
                <div style={{ marginTop: "50px" }}>SECOND COMPONENT</div>
                <label>firstName</label>
                <input style={{ marginTop: "50px" }}
                    id="first-name"
                    class="form-field"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={values.firstName} 
                    onChange={handleFirstNameInputChange}
                />
            </div>
            <div>
                <label>Phone no</label>
                <input
                    id="phone"
                    class="form-field"
                    type="text"
                    placeholder="phone number"
                    name="phone"
                    value={values.phone}
                    onChange={handlephone}
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    id="email"
                    class="form-field"
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    onChange={handlemail}
                />
            </div>

            <div>
                <label>Address</label>
                <input
                    id="address"
                    class="form-field"
                    type="text"
                    placeholder="address"
                    name="address"
                    value={values.address}
                    onChange={handleaddress}
                />
            </div>



            <button style={{ color: "green", border: "solid", padding: "10px", marginTop: "50px" }} onClick = {showDetails}>
                Submit to see details below and toggle
            </button>




            <div id="block" style={{"display":'none'}}>
                <p>These are the submitted values </p>


                <h2> name :- {values.firstName}</h2>
                <h2> email :- {values.email}</h2>
                <h2> phone :- {values.phone}</h2>
                <h2> address :- {values.address}</h2>


            </div>
        </div>
    )
}
