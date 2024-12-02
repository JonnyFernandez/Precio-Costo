import d from './Nav.module.css'
import { NavLink } from 'react-router-dom'


const Nav = ({ changeCard }) => {
    return (
        <div className={d.body}>

            <nav>

                <h1 className={d.tools}>Tools</h1>
                <ul className={d.links}>


                    <li>
                        <div className={d.dropdown}>
                            <a>
                                <p>Opciones</p>
                                <span className="material-icons"> expand_more </span>
                            </a>
                            <div className={d.menu}>
                                <NavLink to={'/'}>Precio Venta</NavLink>
                                <NavLink to={'/presupuestoB'}>Presupuesto B</NavLink>


                            </div>
                        </div>
                    </li>
                </ul>
                {/* <button onClick={() => changeCard()} type="button">Guirar</button> */}
            </nav>
        </div>
    )
}

export default Nav