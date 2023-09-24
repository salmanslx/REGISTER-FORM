import { TextField, Button } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");

  const [Email, setEmail] = useState("");

  const [Password, setpassword] = useState("");

  const [Conformpassword, setconformpassword] = useState("");

  // validate
  const [IsNamevalid, setIsNamevalid] = useState(true);

  const [IsEmailValid, setEmailValid] = useState(true);

  const [IsPasswordValid, setIsPasswordValid] = useState(true);

  const [IsConformPasswordValid, setIsConformPasswordValid] = useState(true);

  // validate name in the  form
  const validateName = (e) => {
    const { value } = e.target;
    if (!!value.match(/^([a-zA-Z ]){2,30}$/)) {
      setName(value);
      setIsNamevalid(true);
    } else {
      setName(value);
      setIsNamevalid(false);
    }
  };
  // validate Email  in the form 
  const validateEmail = (e) => {
    const { value } = e.target;
    if (!!value.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
      setEmail(value);
      setEmailValid(true);
    } else {
      setEmail(value);
      setEmailValid(false);
    }
  };
  // validate passsword  in the from 
  const validatepassword = (e) => {
    const { value } = e.target;
    if (value.length >= 8) {
      setpassword(value);
      setIsPasswordValid(true);
    } else {
      setpassword(value);
      setIsPasswordValid(false);
    }
  }
  const validateconformpassword = (e) => {
    const { value } = e.target;
    if (value == Password) {
      setconformpassword(value);
      setIsConformPasswordValid(true);
    }
    else {
      setconformpassword(value);
      setIsConformPasswordValid(false);
    }
  }

  const showresult = (e) => {
    e.preventDefault()
    if (!name || !Email || !Password || !Conformpassword) {
      alert("fill the from properlliy !!!")
    } else {
      if (IsNamevalid && IsEmailValid && IsPasswordValid && IsConformPasswordValid) {
        alert(
          `     --user-details--
          Name:${name}
          Email:${Email}
          Password:${Password}
          
        `)
      } else {
        alert("fill the form completly")
      }


    }
  }
  return (
    <div style={{ height: '120vh' }} className='d-flex justify-content-center align-items-center'>
      <div style={{ width: '500px', height: '700px' }} className='bg-light p-5 rounded'>
        <h1 className='p-2 text-center'>Register</h1>
        <form onSubmit={showresult}>
          <hr />
          <div className='mt-5'>
            <TextField className='w-100' id="standard-basic" label="Name" variant="standard" name="name" value={name || ""} onChange={(e) => validateName(e)} />
          </div>
          {
            !IsNamevalid &&
            (
              <div className="text-danger fw-bolder">
                *Invalid user name
              </div>
            )
          }
          <div className='mt-5'>
            <TextField className='w-100' id="standard-basic" label="Email" variant="standard" name="Email" value={Email || ""} onChange={(e) => validateEmail(e)} />
          </div>

          {
            !IsEmailValid &&
            (
              <div className='text-danger fw-bolder'>
                *Invalid email
              </div>
            )
          }
          <div className='mt-5'>
            <TextField className='w-100' id="standard-basic" label="Password" variant="standard" type="password" name="Password" value={Password || ""} onChange={(e) => validatepassword(e)} />
          </div>
          {
            !IsPasswordValid &&
            (
              <div className=" text-danger fw-bolder">
                *Atleast 8 characters
              </div>
            )
          }
          <div className='mt-5'>
            <TextField className='w-100' id="standard-basic" label="Confirm Password" variant="standard" type="password" name="Conformpassword" value={Conformpassword || ""} onChange={(e) => validateconformpassword(e)} />
          </div>
          {
            !IsConformPasswordValid &&
            (
              <div className="mb-3 text-danger fw-bolder">
                *Password doesn't match
              </div>
            )
          }
          <div className='mt-5'>
            <Button type='submit' className='w-100 p-3 rounded shadow' variant="contained" color="secondary">
              Sign Up
            </Button>
          </div>
        </form>
        <div>
          <p className='p-2 text-center'>Have an Account?<a href="index.html">Login Here</a></p>
        </div>
      </div>
    </div>

  );
}

export default App;
