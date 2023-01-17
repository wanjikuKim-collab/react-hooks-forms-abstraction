import React, { useState } from "react";

function Form() {
  const [formData, setformData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false
  })

  function handleChange(event){
    const name = event.target.name;
    let value = event.target.value;

    if(event.target.type === "checkbox"){
      value= event.target.checked
    }
    
     setformData({
      ...formData,
      [name]:value,
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" type="text" onChange={handleChange} value={formData.firstName} />
      <input name="lastName" type="text"  onChange={handleChange} value={formData.lastName} />
      <input name="admin"    type="checkbox"onChange={handleChange} checked={formData.admin}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
