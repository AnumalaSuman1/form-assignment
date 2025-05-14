import { useState } from "react"
import "./PersonDetailsForm.css"

const PersonDetailsForm = ()=>{
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEnterEmail] = useState('')
    const [contact,setContact] = useState('')
    const [selectedGender,setSelectedGender] = useState('')
    const [selectedSubjects,setSelectedSubject] = useState([])
    const [url,setUrl] = useState('')
    const [file,setFile] = useState(null)
    const [selectedPet,setSelectedPet] = useState('')
    const [aboutSelf,setAboutSelf] = useState('')
    const [isFirstNameFilled,setFirstNameFilled] = useState(true)
    const [isLastNameFilled,setLastNameFilled] = useState(true)
    const [isContactFilled,setContactFilled] = useState(true)

    const ResetAllFields=()=>{
        setFirstName("")
        setLastName("")
        setEnterEmail("")
        setContact("")
        setSelectedGender("")
        setSelectedSubject([])
        setUrl("")
        setSelectedPet("")
        setAboutSelf("")
    }

    const onFirstNameChange = (event)=>{
        setFirstName(event.target.value)
    }
    const onLastNameChange = (event)=>{
        setLastName(event.target.value)
    }
    const onEmailChange = (event)=>{
        setEnterEmail(event.target.value)
    }
    const onContactChange = (event)=>{
        setContact(event.target.value)
    }
    const onGenderChange = (event)=>{
        setSelectedGender(event.target.value)
    }
    const onUrlChange = (event)=>{
        setUrl(event.target.value)
    }
    const onAboutChange = (event)=>{
        setAboutSelf(event.target.value)
    }
    const onPetChange = (event)=>{
        setSelectedPet(event.target.value)
    }
    const onSelectSubject = (event) => {
        const { value, checked } = event.target;
    
        if (checked) {
            setSelectedSubject([...selectedSubjects, value]);
        } else {
            setSelectedSubject(selectedSubjects.filter((subject) => subject !== value));
        }
      };
    
    const onClickOfSubmit=(event)=>{
        event.preventDefault();
        setFirstNameFilled(firstName != "")
        setLastNameFilled(lastName != "")
        setContactFilled(contact != "")
    }
    return(
        <div className="person-details-forms-container">
            <h1 className="form-heading">
                Form in React
            </h1>
            <form className="form-container" onSubmit={onClickOfSubmit}> 
                <div className="input-field-container">
                    <label htmlFor="firstName" className="label-text">First Name*</label>
                    <input id="firstName" type="text" className="input-field-style" placeholder="Enter First Name" value={firstName} onChange={onFirstNameChange}/>
                    {isFirstNameFilled?<></>:(<p className="error-message">Required*</p>)}
                </div>
                <div className="input-field-container">
                    <label htmlFor="lastName" className="label-text">Last Name*</label>
                    <input id="lastName" type="text" className="input-field-style" placeholder="Enter Last Name" value={lastName} onChange={onLastNameChange}/>
                    {isLastNameFilled?<></>:(<p className="error-message">Required*</p>)}
                </div>
                <div className="input-field-container">
                    <label htmlFor="emailId" className="label-text">Enter Email*</label>
                    <input id="emailId" type="text" className="input-field-style" placeholder="Enter email" value={email} onChange={onEmailChange}/>
                </div>
                <div className="input-field-container">
                    <label htmlFor="contact" className="label-text">Contact*</label>
                    <input id="contact" type="text" className="input-field-style" placeholder="Enter Mobile number" value={contact} onChange={onContactChange}/>
                    {isContactFilled?<></>:(<p className="error-message">Required*</p>)}
                </div>
                <div className="input-field-container">
                <legend className="label-text">Gender</legend>
                <div className="radio-group-container">
                    <label className="radio-label-text">
                        <input type="radio" name="Gender" value="Male" checked={selectedGender === "Male"} onChange={onGenderChange} />
                        Male
                    </label>
                    <label className="radio-label-text">
                        <input type="radio" name="Gender" value="Female" checked={selectedGender === "Female"} onChange={onGenderChange}/>
                        Female
                    </label>
                    <label className="radio-label-text">
                        <input type="radio" name="Gender" value="Other" checked={selectedGender === "Other"} onChange={onGenderChange}/>
                        Other
                    </label>
                    </div>
                </div>
                <div className="input-field-container">
                <legend className="label-text">Your best Subject</legend>
                <div className="subject-group-container">
                    <label className="label-text">
                        <input type="checkbox" value="English" checked={selectedSubjects.includes("English")} onChange={onSelectSubject}/>
                        English
                    </label>
                    <label className="label-text">
                        <input type="checkbox" value="Maths" checked={selectedSubjects.includes("Maths")} onChange={onSelectSubject}/>
                        Maths
                    </label>
                    <label className="label-text">  
                        <input type="checkbox" value="Physics" checked={selectedSubjects.includes("Physics")} onChange={onSelectSubject}/>
                        Physics
                    </label>
                    </div>
                </div>
                <div className="input-field-container">
                    <label htmlFor="resumeFile" className="label-text">Upload Resume*</label>
                    <input type="file" id="resumeFile" className="file-input-style"/>
                </div>
                <div className="input-field-container">
                    <label htmlFor="enterUrl" className="label-text">Enter URL*</label>
                    <input id="enterUrl" type="text" className="input-field-style" placeholder="Enter url" value={url} onChange={onUrlChange}/>
                </div>
                <div className="input-field-container">
                    <label htmlFor="selectPet" className="label-text">Select your pet</label>
                    <select id="selectPet" placeholder="Select your pet" value={selectedPet} className="select-pet-container" onChange={onPetChange}>
                    <option value="Cat">Cat</option>
                    <option value="Dog">Dog</option>
                    <option value="Horse">Horse</option>
                </select>
                </div>
                <div className="input-field-container">
                    <label htmlFor="aboutYourSelf" className="label-text">About</label>
                    <textarea id="aboutYourSelf" className="textarea-field-style" type="text" cols={20} rows={10} placeholder="About your self" value={aboutSelf} onChange={onAboutChange}/>
                </div>
                <div className="buttons-container">
                    <button type="button" className="form-button-element" onClick={ResetAllFields}>Reset</button>
                    <button type="submit" className="form-button-element">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default PersonDetailsForm