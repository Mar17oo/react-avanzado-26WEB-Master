import logo from '../../assets/react.svg'
import { useState } from 'react'

const SimpleForm = () => {
    //* TODA NUESTRA L+OGICA  VA AQUÍ PARA QIUE FUNCIONE EL FORM
    //¨? PASO #2: CREAR LOS ESTADOS DODNE GUARDARÉ LA INFORMACIPON TECLAEDA

    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
    
    //? PASO #4:CREAR LA FUNCION QUE SE EJECUTARA AL HACER CLICK EN EL NOTÓN DE ENVIAR DEL FORMULARIO
    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(email, password);

  return (

    //*VA TODOD NUESTRO DISEÑO HTML
    //? PASO #1: CREAR EL FORMULARIO BASE EN JSX
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />
        
        <form onSubmit={() => {}/* HANDLE SUBMIT */}>
          {/**PASO #3: GUARDO LA INFORMACION EN EL ESTADO DE CORREO Y PASSWORD */}
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
            id='simple-email'
            onChange={(event) => setEmail(event.target.value)}/* HANDLE INPUT */
            value={email}
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='simple-password'
            onChange={(event) => setPassword(event.target.value)/* HANDLE INPUT */}
            value={password}
          />
          
          <button type='submit'>
            Iniciar Sesion
          </button>
          
        </form>
      </div>
    </div>
  )
}
}
export default SimpleForm