import d from './Home.module.css'
import Nav from '../components/Nav'
import { useState } from 'react'

const Home = () => {
    const [isFlipped, setIsFlipper] = useState(false)
    return (
        <div className={d.home}>
            <div className={d.bodyAdmin}>


                <div className={`${d.card}`}>
                    <div className={`${d.front} ${isFlipped ? d.flip : ''}`}>
                        <h1>Front</h1>
                        <h1>Front</h1>
                        <h1>Front</h1>
                    </div>

                    <div className={`${d.back} ${!isFlipped ? d.flip : ''}`}>
                        <h1>Back</h1>
                        <h1>Back</h1>
                        <h1>Back</h1>
                    </div>
                    <div className={d.change} onClick={() => setIsFlipper(prev => !prev)}> Enviar
                    </div>
                </div>





            </div>
        </div>
    )
}
export default Home








