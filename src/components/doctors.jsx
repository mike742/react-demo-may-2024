import React from 'react';
import Doctor from './doctor';

const Doctors = (props) => {
    return (
        // <h1>Doctors works</h1>
        <select id="doctors" name="doctors" onChange={(e) => props.onCurrentDoctor(e)}> 
            {
                props.doctors.map(d => <Doctor key={d.id} doctor={d}></Doctor> )
            }
        </select>
    );
};

export default Doctors;