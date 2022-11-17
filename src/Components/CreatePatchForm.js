import React, {useState} from 'react';

function CreatePatchForm(props) {

    const [formValues, setFormValues] = useState([{ characterID: ""}])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, { characterID: ""}])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    
    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }

    return (
        <div>
            <div className="inline">
                {props.characters.map((element, index) => (
                    <div>
                        <label>{element.label} - {element.value}</label>
                        <br/>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
            {formValues.map((element, index) => (
                <div className="form-inline" key={index}>
                <label>Character</label>
                <input type="text" name="characterID" value={element.characterID || ""} onChange={e => handleChange(index, e)} />
                {
                    index ? 
                    <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
                    : null
                }
                </div>
            ))}
            <div className="button-section">
                <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
                <button className="button submit" type="submit">Submit</button>
            </div>
        </form>
      </div>
    );
  }

  export default CreatePatchForm;