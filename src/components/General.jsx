import Section from "./Section"
import { useState } from "react"

function General(){
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [editMode, setEditMode] = useState(false);
const [error, setError] = useState('');

function toggleEditMode(e) {
    e.preventDefault();
    if (checkEmail(e, email)) {
        editMode ? setEditMode(false) : setEditMode(true)
    }
}

function checkEmail(e, input) {
    const regex = /\w+@\w+.com/;
    const found = input.match(regex)
    if (!found) {
        setError('Email should have (@) and (.com), Example: user@email.com')
        return false
    }
    setError('')
    return true
}

return (
        <Section title={"General Information"} editMode={editMode} callback={toggleEditMode}>
            {!editMode 
            ? ( <div>
                    <div className="error">{error}</div>
                    <input
                        value={firstName}
                        placeholder="First name"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        value={lastName}
                        placeholder="Last name"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <input
                        value={email}
                        placeholder="Email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        value={phone}
                        placeholder="Phone"
                        type="number"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>) 
            : ( <div className="display">
                    <div>Name: {firstName + " " + lastName}</div>
                    <div>Email: {email}</div>
                    <div>Phone: {phone}</div>
                </div>)
            }
        </Section>
    )
}

export default General