import d from './Nav.module.css'
import { NavLink } from 'react-router-dom'


const Nav = () => {


    return (
        <div className={d.body}>
            <nav>

                <div className={d.logo}>
                    {/* <img src='../../../public/avatar-9-3d.png' /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="4.5em" height="4.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.39 14.04a2.57 2.57 0 0 0-2.57-2.57a2.565 2.565 0 1 0 2.57 2.57m1.71 0a4.274 4.274 0 0 1-8.05 2A4.274 4.274 0 0 1 1 14.11V7c0-.44.39-.82.86-.82s.84.38.85.82v3.62c.72-.54 1.61-.86 2.57-.86c1.63 0 3.05.92 3.77 2.27a4.27 4.27 0 0 1 3.77-2.27c2.36 0 4.28 1.92 4.28 4.28m-9.26 0c0-1.42-1.15-2.57-2.56-2.57a2.57 2.57 0 0 0-2.57 2.57a2.565 2.565 0 0 0 5.13 0m15 2.92c.11.16.16.34.16.51c0 .26-.12.53-.34.68a.9.9 0 0 1-.51.17c-.25 0-.5-.11-.65-.32l-1.91-2.53L17.7 18c-.17.21-.42.32-.67.32c-.18 0-.36-.06-.53-.17c-.21-.15-.33-.43-.33-.69c0-.17.06-.35.16-.5l2.17-2.92l-2.17-2.93a.83.83 0 0 1-.16-.5c0-.26.12-.51.33-.68c.39-.28.91-.21 1.2.16l1.89 2.52l1.91-2.52c.26-.37.79-.44 1.16-.16c.23.17.34.43.34.7c0 .17-.05.34-.16.48l-2.18 2.93z" /></svg>
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