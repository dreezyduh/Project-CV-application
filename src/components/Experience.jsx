import Section from "./Section"
import { useState } from "react"

function Experience() {
    const [editMode, setEditMode] = useState(false);
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [responsibility, setResp] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState(''); 

function toggleEditMode(e) {
    e.preventDefault();
    editMode ? setEditMode(false) : setEditMode(true)
}
    return (
        <Section title={"Practical Experience"} editMode={editMode} callback={toggleEditMode}>
            {!editMode
                ?  (<div>
                        <input type="text" value={company} placeholder="Company" onChange={(e) => {setCompany(e.target.value)}}/>
                        <input type="text" value={position} placeholder="Position Title" onChange={(e) => {setPosition(e.target.value)}}/>
                        <input type="text" value={responsibility} placeholder="Job Responsibilities" onChange={(e) => {setResp(e.target.value)}}/>
                        <input type="date" value={from} placeholder="From" onChange={(e) => {setFrom(e.target.value)}}/>
                        <input type="date" value={to} placeholder="To" onChange={(e) => {setTo(e.target.value)}}/>
                    </div>)
                : ( <div>
                        <div>Company: {company}</div>
                        <div>Position Title: {position}</div>
                        <div>Job Responsibilities: {responsibility}</div>
                        <div>From: {from}</div>
                        <div>To: {to}</div>
                    </div>)
            }
        </Section>
    )
}

export default Experience