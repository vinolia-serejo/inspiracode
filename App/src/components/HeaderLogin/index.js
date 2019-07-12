import React from 'react'
import { ReactComponent as ImagemSvg } from '../../assets/tela-login.svg'
import './styles.scss'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'

const HeaderLogin = ({ action }) => {
  const responseFacebook = response => {
    console.log(response)
  }

  const responseGoogle = response => {
    console.log(response)
  }

  return (
    <div className="headerLogin">
      <h1 className="logo-white">{'<inspiraCode/>'}</h1>
      <ImagemSvg className="imgSvg" />
      <div className="headerText">
        <p>
          {
            '<InspiraCode> é o lugar perfeito para você girl que deseja várias dicas sobre conteudos de programação, experiência do usuário, e muuuito mais, comece agora mesmo, faça login e divirta-se! Bora Codar? '
          }
        </p>
        <button onClick={action} className="login-button">
          Entrar
        </button>
      </div>
    </div>
  )
}
export default HeaderLogin
