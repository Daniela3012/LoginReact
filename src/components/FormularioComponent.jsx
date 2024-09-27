  import React, { useState } from 'react'
import { useForm } from '../hooks/useForm';

  export const FormularioComponent = () => {
    
    const initialForm = {
      userName: '',
      email: '',
      password: ''
    }
    const {formState, onInputChange} = useForm(initialForm);
    const {userName, email, password} = formState;

    const onSubmit = (event) => {
      event.preventDefault();
      console.log(formState);
    }
    return (
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">User Name</label>
          <input type="text"
          className="form-control"
          name="userName"
          placeholder='Enter you User Name'
          value={userName}
          onChange={onInputChange}></input>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email"
          className="form-control"
          name="email"
          placeholder='Enter email'
          value={email}
          onChange={onInputChange}></input>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password"
          className="form-control"
          name="password"
          placeholder='Enter password'
          value={password}
          onChange={onInputChange}></input>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
