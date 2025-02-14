import {useForm} from 'react-hook-form';
import "./Form.css"

function RHForm(){
    const{register,handleSubmit,formState:{errors}}=useForm();

    const login=(data)=>{
        alert("login Successfull");
        console.log(data);
    }

    return(
        <div className='form-container'>
          <form onSubmit={handleSubmit(login)}>
            <label>Username</label>
            <input type='text' placeholder='Username' {...register("username",{required:"Username is required"})}/>
            {errors.username && <p>{errors.username.message}</p>}

            <label>Email</label>
            <input type='text' placeholder='Email' {...register("email",{
                required:"Email is required",
                pattern:{
                    value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message:"Invalid email"
                }
            })}/>
            {errors.email && <p>{errors.email.message}</p>}

            <label>Password</label>
            <input type='password' placeholder='Password' {...register("password",{
                required:"Password is required",
                minLength:{
                    value:6,
                    message:"Password must have at least 6 characters"
                }
            })}/>
            {errors.password && <p>{errors.password.message}</p>}

            <button type='submit'>LogIn</button>
          </form>
        </div>
    )
}

export default RHForm;