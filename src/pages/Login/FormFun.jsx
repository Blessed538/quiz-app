import { useState, useEffect } from 'react';

const FormFun = (callback, validate) => {

  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const {value, name} = e.target;
    setValues({
      ...values,
      [name]:value
    })
  }
 
  

  function login() {
    console.log('No errors, submit callback called!');
  }

  // useEffect(() => {
  //   if (Object.keys(errors).length === 0 && isSubmitting) {
  //     callback();
  //   }
  // }, [errors]);

  const handleSubmit = (event) => {
    // axios.post('http://localhost:4000/registration',
    // {
    //   user: {
    //     username:username,
    //     email:email,
    //     password:password
    //   }
    // },
    // {withCredentials:true}
    // ).then(response => {
    //   console.log('registration res', response);
    // }).catch(error => {
    //   console.log('registration error', error);
    // })
     event.preventDefault();
    setErrors(validate(values));
    // setIsSubmitting(true);
  };

  

  return {
    handleSubmit,handleChange, values, errors }
};

export default FormFun;