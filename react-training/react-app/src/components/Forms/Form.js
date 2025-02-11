import React,{useState} from 'react'
import './Form.css';

function Form() {
    const [formData, setFormData] = useState({"username":"","email":"","password":""});
    const [errors,setErrors]=useState({"username":"","email":"","password":""});

    const isEmailValid=(email)=>{
        const emailPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    const handleChange = (event) => {
     const name = event.target.name;
     const value = event.target.value;
     setFormData(values => ({...values, [name]: value}))
     let newErrors = { ...errors };

    if (name === "email") {
      newErrors.email = isEmailValid(value) ? "" : "Invalid email format";
    }
    if (name === "password") {
      newErrors.password = value.length >= 6 ? "" : "Password must be at least 6 characters";
    }

    setErrors(newErrors);
     
    }

    const handleSubmit = (event) => {
     event.preventDefault();
      if (!formData.username || !formData.email || !formData.password) {
        setErrors({ username:"Username is required", email: "Email is required", password: "Password is required" });
        return;
      }
  
      if (Object.values(errors).some((err) => err)) {
        alert("Please fix the errors before submitting.");
        return;
      }
      alert("login successfully")
    }
  return (
    <div className='form-container'>
    <form onSubmit={handleSubmit}>
      <label>Username
      <input 
        type="text" 
        name="username" 
        value={formData.username || ""} 
        onChange={handleChange}
      />
      </label>
        {errors.username && <p>{errors.username}</p>}

      <label>Email:
        <input 
          type="text" 
          name="email" 
          value={formData.email || ""} 
          onChange={handleChange}
        />
        </label>
        {errors.email && <p>{errors.email}</p>}

        <label>Password:
        <input 
          type="password"
          name="password" 
          value={formData.password || ""} 
          onChange={handleChange}
        />
        </label>
        {errors.password && <p>{errors.password}</p>}

        <button type="submit">submit</button>
    </form>
    </div>
  )
}

export default Form