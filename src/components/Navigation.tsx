import { Svg } from "./Svg"
// import { ReactComponent } from "../media/Vector.svg"

export function Navigation() {

    const logo = require('../media/logotype.png')
    const help = require('../media/help.png')
    const search = require('../media/search.png')
    const bell = require('../media/bell.png')
    const eye = require('../media/eye.png')
    const avatar = require('../media/avatar.png')
    const open = require('../media/open.png')

    return(
        <nav className='navigation'>
        <div className='navigation-left-content'>
          <div className='logo'>
            Логотип
          </div>
          <div className='navigation-left-content__links'>
            <div>
                <Svg id="heart"></Svg>
                <p>Профиль</p>
            </div>
            <div>
                <Svg id="instr"></Svg>
                <p>Врачи и клиники</p>
            </div>
            <div>
                <Svg id="message"></Svg>
                <p>Сообщения</p>
            </div>
            <div>
                <Svg id="test"></Svg>
                <p>Тестирование</p>
            </div>
            <div>
                <Svg id="book"></Svg>
                <p>Полезно знать</p>
            </div>
          </div>
          <button>Подать заявку</button>
          <div className="logo-help">
            <div className="logo-help__help">
                <img src={help} alt="" />
                <p>Помощь</p>
            </div>
            <img className="logo-help__logo" src={logo} alt="" />
          </div>
        </div>
        <div className='navigation-right-content'>
          <p className='nav-profile'>Мой профиль</p>
          <div className="navigation-right-content__links">
            <div className="left-links">
                <img src={search} alt="" />
                <img src={bell} alt="" />
                <img src={eye} alt="" />
            </div>
            <div className="right-links">
                <div className="circle">
                    <img src={avatar} alt="" />
                </div>
                <img src={open} alt="" />
            </div>
          </div>
        </div>
      </nav>
    )
}