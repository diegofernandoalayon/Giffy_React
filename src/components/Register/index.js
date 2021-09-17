import React, { useState } from "react";
import registerService from "../../services/register";
import {useForm} from 'react-hook-form'

const validateFields = values =>{
    const errors = {};
    if (!values.username) {
      //agregando validacion
      errors.username = "Required username";
    }
    if (!values.password) {
      errors.password = "Required password";
    } else if (values.password.length < 3) {
      errors.password = "Length must be greater than 3";
    }
    return errors;
}
const handleSubmit = (values, {setFieldError})=>{
    return registerService(values).catch(() => {
        setFieldError("username", "This username is not valid");
      });
}
const initialValues = {
    username: "",
    password: "",
  }

export default function Register() {
    const {handleSubmit, register, errors} = useForm()
    const onSubmit = (values) =>{
        console.log(values)
    }
    const [registered, setRegistered] = useState(false)

    if(registered){
        return<h4>
            Congratulations ✔️! You've been successfully registered!
        </h4>
    }
  return (
    <>
     
    </>
  );
}


/**
 * 
 *  <Formik
        initialValues={initialValues}
        validate={validateFields}
        onSubmit={
            (values, {setFieldError})=>{
                return register(values)
                .then(()=>{
                    setRegistered(true)
                })
                .catch(() => {
                    setFieldError("username", "This username is not valid");
                  });
            }
        }
      >
        {
          //recibe una render Prop
          ({errors,isSubmitting }) => (
            <Form className="form" >
              <Field
                name="username"
                placeholder="Put here the username"
                className={errors.username ? "error" : null}
              />
              <ErrorMessage className='form-error' name='username' component='small'/>
             
              <Field
                name="password"
                placeholder="Put here the password"
                className={errors.password?'error':null}
                type='password'
              />
              <ErrorMessage className='form-error' name='password' component='small'/>
              <button className="btn" disabled={isSubmitting}>
                Registrarse
              </button>
             
            </Form>
          )
        }
      </Formik>
 */