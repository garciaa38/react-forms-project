import { useState, useEffect } from "react";

export default function BasicForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneType, setPhoneType] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
    const [bio, setBio] = useState('');
    const [signUp, setSignUp] = useState(false);

    const onSubmit = e => {
        e.preventDefault();

        const basicFormInformation = {
            name,
            email,
            phone,
            phoneType,
            selectedOption,
            bio,
            signUp,
            submittedOn: new Date()
        };

        console.log(basicFormInformation);

        setName('');
        setEmail('');
        setPhone('');
        setPhoneType('');
        setSelectedOption(null);
        setBio('');
        setSignUp(false);
    }

    const handleRadioChange = event => {
        setSelectedOption(event.target.value)
    }

    return (
        <div>
            <h2>Fill out this basic form!</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input id='name' type='text' onChange={e => setName(e.target.value)} value={name}/> 
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input id='email' type='text' onChange={e => setEmail(e.target.value)} value={email}/>
                </div>
                <div>
                    <label htmlFor='phone'>Phone Number:</label>
                    <input id='phone' type='text' onChange={e => setPhone(e.target.value)} value={phone}/>
                    <select name='phoneType' onChange={e => setPhoneType(e.target.value)} value={phoneType}>
                        <option value='' disabled>
                            Select a phone type...
                        </option>
                        <option>
                            Home
                        </option>
                        <option>
                            Work
                        </option>
                        <option>
                            Mobile
                        </option>
                    </select>
                </div>
                <div>
                    <div>Staff or Student?</div>
                    <label htmlFor='staff'>Staff</label>
                    <input id='staff' type='radio'  value="Staff" checked={selectedOption === 'Staff'} onChange={handleRadioChange}/>
                    <label htmlFor='student'>Student</label>
                    <input id='student' type='radio'  value="Student" checked={selectedOption === 'Student'} onChange={handleRadioChange}/>
                </div>
                <div>
                    <label htmlFor='bio'>Bio:</label>
                    <textarea id='bio' onChange={e => setBio(e.target.value)} value={bio}/>
                </div>
                <div>
                    <label htmlFor='signUp'>Sign up for email notifications:</label>
                    <input 
                    type='checkbox' 
                    id='signUp' 
                    value={signUp} 
                    onChange={e => {
                        console.log(e.target.value)
                        if (e.target.value === 'false') {
                                        setSignUp(true);
                                    } else {
                                        setSignUp(false);
                                    }}}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}