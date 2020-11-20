import React from 'react'
import s from './menu.module.css'
import transport from '../../img/transport.png'
import electronika from '../../img/elektronika.png'
import sport from '../../img/sport.png'
import shmot from '../../img/shmot.png'
import enimals from '../../img/enimals.png'
import nadvizh from '../../img/nedvizh.png'
import sad from '../../img/sad.png'
import bisnes from '../../img/bisnes.png'
const Menu =()=>{
    return <div className={s.menu}>
        <a className={s.item} href="/katalog/electro#1"><span className={s.text}> <img className={s.imgMenu} src={electronika} alt=""/> <br/> Електроника</span></a>
        <a className={s.item} href="/katalog/transport#1"><span className={s.text}> <img className={s.imgMenu} src={transport} alt=""/> <br/> Транспорт</span></a>
        <a className={s.item} href="/katalog/sport#1"><span className={s.text}><img className={s.imgMenu} src={sport} alt=""/> <br/> Спорт</span></a>
        <a className={s.item} href="/katalog/shmot#1"><span className={s.text}><img className={s.imgMenu} src={shmot} alt=""/> <br/> Одяг</span></a>
        <a className={s.item} href="/katalog/bisness#1"><span className={s.text}><img className={s.imgMenu} src={bisnes} alt=""/> <br/> Бізнес та послуги</span></a>
        <a className={s.item} href="/katalog/zoo#1"><span className={s.text}><img className={s.imgMenu} src={enimals} alt=""/> <br/> Тварини</span></a>
        <a className={s.item} href="/katalog/city#1"><span className={s.text}><img className={s.imgMenu} src={nadvizh} alt=""/> <br/> Нерухомість</span></a>
        <a className={s.item} href="/katalog/house#1"><span className={s.text}><img className={s.imgMenu} src={sad} alt=""/> <br/> Дім і сад</span></a>
    </div>
}
export default Menu