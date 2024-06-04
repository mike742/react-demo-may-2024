import React, {useState} from 'react';


function RequiredFieldForm(){
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        // Validation
        if(!value.trim()) {
            setError('This field can not be empty!!!');
        } else {
            setError('')
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // ! error => submit
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} 
                   onChange={handleInputChange} 
                   onBlur={handleInputChange} />
            {error && <p style={{color : 'red'}}>{error}</p>}
            <br />
            <button type='submit' disabled={error} >Submit</button>
        </form>
    );
}


export default RequiredFieldForm;