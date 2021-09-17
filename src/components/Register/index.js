import React, {useState} from "react";
import registerService from "../../services/register";
import { useForm} from 'react-hook-form'

export default function Register() {
  const {handleSubmit, register, formState:{errors}} = useForm()

  const [registered, setRegistered] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = values => {
    setIsSubmitting(true)
    console.log(values)
    registerService(values)
      .then(() => {
        setRegistered(true)
        setIsSubmitting(false)
      })
  }

  if (registered) {
    return <h4>
      Congratulations ✅! You've been successfully registered!
    </h4>
  }

  return (
    <>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <input className={errors.username ? 'error' : ''} defaultValue='' {...register("username",{ required: true})} placeholder='Put here the username' />
        {errors.username && <span className='form-error'>This field is required</span>}
        <input className={errors.password ? 'error' : ''} type='password' defaultValue='' {...register("password",{required: true, minLength: 3})} placeholder='Put here the password'/>
        {errors.password && <span className='form-error'>Length must be greater than 3</span>}

        <button className="btn" disabled={isSubmitting}>
          Registrarse
        </button>
      </form>
    </>
  );
}