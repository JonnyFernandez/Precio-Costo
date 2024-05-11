import n from './Nav.module.css'


const Nav = () => {
    return (
        <div className={n.nav}>
            <div className={n.div1}>
                <div className={n.image}></div>
                <div className={n.title}>Price & Cost</div>
            </div>

            <div className={n.div2}>
                <div className={n.item}>Boton1</div>
                <div className={n.item}>Boton2</div>
                <div className={n.item}>Boton3</div>
            </div>
        </div>
    )
}
export default Nav