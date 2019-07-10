import React from 'react'
import { ReactComponent as ImagemSvg } from '../../assets/tela-login.svg'
import './styles.scss'

const HeaderLogin = ({ action }) => {
  return (
    <div className="headerLogin">
      <h1 className="logo-white">{'<inspiraCode/>'}</h1>
      <ImagemSvg className="imgSvg" />
      <button onClick={action}>Entrar</button>
    </div>
  )
}
export default HeaderLogin
