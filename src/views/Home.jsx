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

    let price = data.cost * (1 + (data.iva / 100) + (data.iibb / 100) + (data.others / 100) + (data.gain / 100))
    let priceOff = price * (1 - (data.off / 100))
    let discount = price - priceOff
    let costProduction = data.cost * (1 + (data.iva / 100) + (data.iibb / 100) + (data.others / 100))
    let margin = ((priceOff - costProduction) / costProduction) * 100


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
                                <input type="text" name='cost' value={data.cost} onChange={handleChange} placeholder='Costo' />
                            </div>
                            <div className={d.inputs}>
                                <label htmlFor="">IVA: %</label>
                                <input type="text" name='iva' value={data.iva} onChange={handleChange} placeholder='IVA' />
                            </div>
                            <div className={d.inputs}>
                                <label htmlFor="">IIBB: %</label>
                                <input type="text" name='iibb' value={data.iibb} onChange={handleChange} placeholder='IIBB' />
                            </div>
                            <div className={d.inputs}>
                                <label htmlFor="">Otros: %</label>
                                <input type="text" name='others' value={data.others} onChange={handleChange} placeholder='Otros' />
                            </div>
                            <div className={d.inputs}>
                                <label htmlFor="">Ganancia: %</label>
                                <input type="text" name='gain' value={data.gain} onChange={handleChange} placeholder='Ganancia' />
                            </div>
                            <div className={d.inputs}>
                                <label htmlFor="">Descuento: %</label>
                                <input type="text" name='off' value={data.off} onChange={handleChange} placeholder='Descuento' />
                            </div>

                        </div>
                    </div>

                    <div className={`${d.back} ${!isFlipped ? d.flip : ''}`}>
                        <div className={d.insideFront}>
                            <h2>Resultados</h2>

                            <div className={d.inputs}>
                                <label htmlFor="">Precio:</label>
                                <span>$ {price.toFixed(2)}</span>
                            </div>

                            <div className={d.inputs}>
                                <label htmlFor="">Precio Off:</label>
                                <span>$ {priceOff.toFixed(2)}</span>
                            </div>
                            <div className={d.inputs}>
                                <label htmlFor="">Descuento:</label>
                                <span>$ {discount.toFixed(2)}</span>
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
                    <div className={d.change} onClick={() => setIsFlipper(prev => !prev)}> Enviar </div>
                    {data.cost || data.iva || data.iibb || data.others || data.gain || data.off ? <button className={d.change2} onClick={reset}> Reset </button> : ''}
                </div>
            </div>
        </div>
    )
}
export default Home








