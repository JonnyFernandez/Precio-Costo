import d from './Home.module.css'
import Nav from '../components/Nav'
import { useState } from 'react'

const Home = () => {
    const [isFlipped, setIsFlipper] = useState(false)
    const [data, setData] = useState({ cost: '', iva: '', iibb: '', others: '', gain: '', off: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: Number(value) })
    };

    const reset = () => {
        setData({ cost: '', iva: '', iibb: '', others: '', gain: '', off: '' })
        setIsFlipper(false)
    }

    // precio de venta segun margen de ganancias
    let cost = data.cost * (1 + (data.iva + data.iibb) / 100);
    let ganancia = 1 - ((data.gain + data.others) / 100);
    let price2 = cost / ganancia
    let priceOff2 = price2 - (price2 * (data.off / 100));
    let discount2 = price2 - priceOff2
    let margin = ((priceOff2 - cost) / cost) * 100


    return (
        <div className={d.home}>
            <div className={d.header}>
                <Nav />
            </div>

            <div className={d.body}>

                <div className={`${d.card}`}>
                    <div className={`${d.front} ${isFlipped ? d.flip : ''}`}>
                        <div className={d.insideFront}>
                            <h2>Costos y Porcentajes</h2>
                            <div className={d.inputs}>
                                <label htmlFor="">Costo: $</label>
                                <input type="text" name='cost' value={data.cost} onChange={handleChange} placeholder='Costo' pattern="[0-9]*" inputMode="numeric" />
                            </div>
                            <div className={d.inputs}>
                                <label htmlFor="">IVA: %</label>
                                <input type="text" name='iva' value={data.iva} onChange={handleChange} placeholder='IVA' pattern="[0-9]*" inputMode="numeric" />
                            </div>
                            <div className={d.inputs}>
                                <label htmlFor="">IIBB: %</label>
                                <input type="text" name='iibb' value={data.iibb} onChange={handleChange} placeholder='IIBB' pattern="[0-9]*" inputMode="numeric" />
                            </div>
                            <div className={d.inputs}>
                                <label htmlFor="">Otros: %</label>
                                <input type="text" name='others' value={data.others} onChange={handleChange} placeholder='Otros' pattern="[0-9]*" inputMode="numeric" />
                            </div>
                            <div className={d.inputs}>
                                <label htmlFor="">Ganancia: %</label>
                                <input type="text" name='gain' value={data.gain} onChange={handleChange} placeholder='Ganancia' pattern="[0-9]*" inputMode="numeric" />
                            </div>
                            <div className={d.inputs}>
                                <label htmlFor="">Descuento: %</label>
                                <input type="text" name='off' value={data.off} onChange={handleChange} placeholder='Descuento' pattern="[0-9]*" inputMode="numeric" />
                            </div>

                        </div>
                    </div>

                    <div className={`${d.back} ${!isFlipped ? d.flip : ''}`}>
                        <div className={d.insideFront}>
                            <h2>Resultados</h2>

                            <div className={d.inputs}>
                                <label htmlFor="">Precio:</label>
                                <span>$ {price2.toFixed(2)}</span>
                            </div>

                            <div className={d.inputs}>
                                <label htmlFor="">Precio Off:</label>
                                <span>$ {priceOff2.toFixed(2)}</span>
                            </div>
                            <div className={d.inputs}>
                                <label htmlFor="">Descuento:</label>
                                <span>$ {discount2.toFixed(2)}</span>
                            </div>
                            <div className={d.inputs}>
                                <label htmlFor="">Margen Ganancia:</label>
                                <span>{margin ? margin.toFixed(2) : 0}%</span>
                            </div>
                            <div className={d.inputs}>
                                <label htmlFor="">Off Aplicado:</label>
                                <span>{data.off ? data.off : 0}%</span>
                            </div>
                        </div>
                    </div>
                    <div className={d.change} onClick={() => setIsFlipper(prev => !prev)}> {isFlipped ? 'Volver' : 'Ver'} </div>
                    {data.cost || data.iva || data.iibb || data.others || data.gain || data.off ? <button className={d.change2} onClick={reset}> Reset </button> : ''}
                </div>
            </div>
        </div>
    )
}
export default Home








