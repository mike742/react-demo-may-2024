import React from 'react';

const Doctor = (props) => {

    return (
        <React.Fragment>
            <option value={props.doctor.id}>{props.doctor.name}</option>
        </React.Fragment>
    );

}; 

export default Doctor;