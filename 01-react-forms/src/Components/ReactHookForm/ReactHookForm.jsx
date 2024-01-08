import logo from '../../assets/react.svg'
import {useForm} from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const ReactHookForm = () => {
//* CREACIÓN DEL ESQUEMA  DEL FORMULARIO DE USUARIO UTILIZANDO YUP, PARA VALIDAR NUESTRO FORMULARIO O NUESTROS CAMPOS

const userFormSchema = yup.object({
  firstName: yup.string().required("Name is required"),
  lastName: yup.string().required("Last name is required"),
  age: yup.number().positive('Age must be a number').integer('Type your age'),
  email: yup.string()
  .email('Email must be valid')
  .required('Email is required'),
  password: yup.string().required('No ingresaste password')
  .min(5, 'Password must have at least 5 characters')
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%.^&*])/,   'La contraseña debe tener al menos 5 caracteres, un número, una letra mayúscula, una letra minúscula y un caracter especial'),
        gender: yup
                .mixed() //elegir
                .oneOf(['M','F','O'], 'Choose genre: Hombre, Mujer u Otro')
                .defined() //tome la seleccion del usuario
}).required()

  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />
        <form
          onSubmit={() => { }/* HANDLE SUBMIT */}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
        
          <label htmlFor='firstName'>Nombre</label>
          <input
            type='text'
            name='firstName'
            placeholder='Tu Nombre'
            id='firstName'
          />

          <label htmlFor='lastName'>Apellido</label>
          <input
            type='text'
            name='lastName'
            placeholder='Tu Apellido'
            id='lastName'
          />

          <label htmlFor='age'>Edad</label>
          <input
            type='number'
            name='age'
            placeholder='Tu Edad'
            id='age'
          />

          <label htmlFor='gender'>Genero</label>
          <select name='gender' id='gender'>
            <option value=''>Elige un genero</option>
            <option value='M'>Masculino</option>
            <option value='F'>Femenino</option>
            <option value='O'>Otro</option>
          </select>

          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
            id='email'
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
          />

          <button type='submit'>
            Iniciar Sesion
          </button>
        </form>
      </div>
    </div>
  )
}

export default ReactHookForm