import d from './Nav.module.css'
import { NavLink } from 'react-router-dom'


const Nav = () => {


    return (
        <div className={d.body}>
            <nav>

                <div className={d.logo}>
                    <img src='../../../public/IconOrange.ico' />
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
                                <NavLink to={'/price-cal'}>Precios por Porcentaje</NavLink>
                                <NavLink to={'/price-margin'}>Precios por Margen</NavLink>
                                <NavLink to={'/butgetA'}> Presupuesto A</NavLink>
                                <NavLink to={'/butgetB'}> Presupuesto B</NavLink>
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