import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState]=useState({
        userName: 'Daniela Pomalaya',
        email: 'holis@gmail.com',
        password: '123456789'
      });
  
      const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
          ...formState, 
          [name]: value
        });
      }
  return {
    formState,
    onInputChange
  }
}
