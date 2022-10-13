import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formUsers.css'


const defaultValues = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    birthday: ''
}

const FormUsers = ({createNewUser, updateInfo, updateUserById, setUpdateInfo, setFormIsClose}) => {

   const {handleSubmit, reset, register}  = useForm()

   useEffect(() => {
    if(updateInfo) {
        reset(updateInfo)
    }
   }, [updateInfo])

   const submit = data => {
    if(updateInfo) {
        updateUserById(updateInfo.id, data)
        setUpdateInfo()

    } else {
        createNewUser(data)
    }
    reset(defaultValues)
    setFormIsClose(true)

   }

   const handleCloseForm = () => {
    setFormIsClose(true)
   }

  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
        <i onClick={handleCloseForm} className="form__x fa-regular fa-circle-xmark"></i>
        <h2 className='form_title'>{updateInfo ? 'Edit user' : 'New user'}</h2>
        <div className='form-div'>
            <label className='form-label' htmlFor="email">Email </label>
            <input className='form-input' placeholder='Enter your email' type="email" id='email' {...register('email')}/>
        </div>
        <div className='form-div'>
            <label className='form-label' htmlFor="password">Password</label>
            <input className='form-input' placeholder='Enter your password' type="text" id='password' {...register('password')}/>
        </div>
        <div className='form-div'>
            <label className='form-label' htmlFor="first_name">Firts Name</label>
            <input className='form-input' placeholder='Enter your first name' type="text" id='first_name' {...register('first_name')}/>
        </div>
        <div className='form-div'>
            <label className='form-label' htmlFor="last_name">Last Name</label>
            <input className='form-input' placeholder='Enter your last name' type="text" id='last_name' {...register('last_name')}/>
        </div>
        <div className='form-div'>
            <label className='form-label' htmlFor="birthday">Birthday </label>
            <input className='form-input-birthday' type="date" id='birthday' {...register('birthday')}/>
        </div>
        <button className='form__btn'>{updateInfo ? 'Update' : 'Create'}</button>
    </form>
  )
}

export default FormUsers