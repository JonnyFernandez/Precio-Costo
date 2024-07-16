import d from './Nav.module.css'
// import { useNavigate } from 'react-router-dom'


const Nav = () => {



    return (
        <div className={d.body}>
            <nav>

                <div className={d.logo}>
                    <img src='../../../IconOrange.ico' />
                </div>
                <h3 className={d.title}>Tool´s Boox</h3>

                <ul className={d.links}>
                    <li>
                        <a>Upload</a>
                    </li>
                    {/* <li>
                        <a>Licence</a>
                    </li> */}
                    <li>
                        <div className={d.dropdown}>
                            <a>
                                <p>Explore</p>
                                <span className="material-icons"> expand_more </span>
                            </a>
                            <div className={d.menu}>
                                <a href='/price-cal'>Precios por Porcentaje</a>
                                <a href='/price-margin' >Precios por Margen</a>
                                <a href='ButgetA'>Presupuesto A</a>
                                <a href='ButgetB'>Presupuesto B</a>
                                {/* <a>Free Videos</a>
                                <a>Pexels Blog</a> */}
                            </div>
                        </div>
                    </li>
                </ul>
                <button type="button">Donate</button>
            </nav>
        </div>
    )
}

export default Nav