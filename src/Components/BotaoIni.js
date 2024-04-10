import Styles from './BotaoIni.module.css'
import { Link } from 'react-router-dom'
function PaginaInicial() {
    return (
        
            <div className={Styles.container}>

                <div className={Styles.gamecontainer}>

                    <h1><span className={Styles.x}>X</span> Bem-vindo ao JOGO DO VELHO <span className={Styles.x}>O</span></h1>
                    <Link className={Styles.startbutton} to='/facil'>Jogar Sozinho</Link>
                    <Link className={Styles.startbutton} to='/amigo'>Jogar com Amigo</Link>
                </div>
            </div>
      
    )
}
export default PaginaInicial