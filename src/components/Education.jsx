import Section from "./Section"
import { useState } from "react"

function Education() {
    const [editMode, setEditMode] = useState(false);
    const [school, setSchool] = useState('')
    const [studies, setStudies] = useState('')
    const [date, setDate] = useState('')

function toggleEditMode(e) {
    e.preventDefault();
    editMode ? setEditMode(false) : setEditMode(true)
}

    return (
        <Section title={"Educational Experience"} editMode={editMode} callback={toggleEditMode}>
            {!editMode 
            ? ( <div>
                    <input type="text" value={school} placeholder="School Name" onChange={(e) => setSchool(e.target.value)}/>
                    <input type="text" value={studies} placeholder="Studies" onChange={(e) => setStudies(e.target.value)}/>
                    <label htmlFor="date">Date</label>
                    <input type="date" value={date} placeholder="Date" onChange={(e) => setDate(e.target.value)}/>
                </div>)
            : ( <div>
                    <div>School: {school}</div>
                    <div>Studies: {studies}</div>
                    <div>Date: {date}</div>
                </div>
                )
            }
        </Section>
    )
}

export default Education