import {useState} from "react"

export default function NewData({onSubmission}) {
    const[formData, setFormData]=useState({title:"", newPrice:"", category:"", color:0})
    function handleChange(e){
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault()
        onSubmission(formData)
        setFormData({title:"", newPrice:"", category:"", color:0})
    }
  return (
    
    <form onChange={handleChange} onSubmit={handleSubmit}  id="new-item-form">
    <div className="form-inputs">
        
        
        <input value={formData.img} name="category" className="text-input" type="text" placeholder="img"/>
        <input value={formData.title} name="title" className="text-input" type="text" placeholder="title"/>
        <input value={formData.prevPrice} name="prevPrice" className="text-input" type="numbers" placeholder="prevPrice"/>
        <input value={formData.newPrice} name="newPrice" className="text-input" type="numbers" placeholder="newPrice"/>
        <input value={formData.company} name="company" type="text" placeholder="company"/>
        <input value={formData.color} name="color" className="color" type="text" placeholder="color"/>
        </div>
        <button style={{textAlign:"center"}} className="btns">Add Shoe</button>
    </form>
 
  )
}
