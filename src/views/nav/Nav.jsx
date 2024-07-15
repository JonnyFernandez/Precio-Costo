import n from './Nav.module.css'
import { useNavigate } from 'react-router-dom'


const Nav = () => {
    const navigate = useNavigate()

    const handleSelect = (e) => {
        const value = e.target.value;
        if (value === "Calc") navigate('/price-cal')
        if (value === "ButgetA") navigate('/butget')
        if (value === "ButgetB") alert('No disponible Facturas B')
        if (value === "Opciones") navigate('/')

    }

    return (
        <div className={n.heade}>
            <div className={n.logo} onClick={() => navigate('/')}>BOX TOOLS</div>
            <div className={n.nav}>
                <select onChange={handleSelect}>
                    <option value="Opciones">Opciones</option>
                    <option value="Calc">Precios por Porcentaje</option>
                    <option value="Calc">Precios por Margen</option>
                    <option value="ButgetA">Presupuesto A</option>
                    <option value="ButgetB">Presupuesto B</option>
                    <option value="ButgetB">Información</option>
                    <option value="ButgetB">Algoritmos de calculo</option>
                    <option value="ButgetB">Developer</option>
                </select>

                {/* <h5>perfil</h5> */}
            </div>
        </div>
    )
}

export default Nav