import React from 'react'
import './styles.scss'
import ImgFront from '../../assets/web_development.png'
import ImgBack from '../../assets/back-end.png'
import ImgUx from '../../assets/undraw_wireframing_nxyi.png'

export default class Categories extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="categorie col-12">
        <h1 className="title pb-3">Conheça um novo universo</h1>
        <div className="row">
          <div className="col-4">
            <div
              className="categorie-body"
              style={{ backgroundImage: `url(${ImgFront})` }}
            >
              <p>Quando você acessa um site, interage diretamente com uma parte “visível” dele. Essa camada é o que chamamos de front-end e inclui a estrutura geral da página (HTML), estilos e comportamentos (CSS) e interações imediatas (Javascript). </p>
              <h1>{'<Front-end>'}</h1>
            </div>
          </div>
          <div className="col-4">
            <div
              className="categorie-body"
              style={{ backgroundImage: `url(${ImgBack})` }}
            >
              <p>Sabe quando você acessa um site para fazer inscrição de algo e funciona perfeitamente? Então, essa parte “invisível” de comunicação com o servidor e armazenamento de dados é a parte do back-end. Ela garante que todas as funcionalidades do site sejam executadas e que haja conversa com o servidor. </p>
              <h1>{'<Back-end>'}</h1>
            </div>
          </div>
          <div className="col-4">
            <div
              className="categorie-body"
              style={{ backgroundImage: `url(${ImgUx})` }}
            >
              <p>A experiência do usuário (User Experience), muito mais do que focar na interface de uma solução, considera como uma pessoa se sente ao usar um produto ou serviço específico. São as percepções do usuário resultantes do uso de um sistema, serviço ou produto. Já a Interface do Usuário (UI) é responsável por criar, planejar e elaborar a forma como um usuário interage e controla determinado projeto, que pode ser um aplicativo, um software, um site, um produto, entre outros. </p>
              <h1>{'<UX/UI>'}</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
