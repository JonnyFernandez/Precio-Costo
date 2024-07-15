import d from './PriceCalculator.module.css';
import { useState } from 'react';

const PriceCalculator = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [data, setData] = useState({ cost: '', iva: '', iibb: '', others: '', gain: '', off: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        const processedValue = parseFloat(value.replace(',', '.')) || '';
        setData((prevData) => ({ ...prevData, [name]: processedValue }));
    };

    const reset = () => {
        setData({ cost: '', iva: '', iibb: '', others: '', gain: '', off: '' });
        setIsFlipped(false);
    };

    const cost = data.cost * (1 + ((data.iva / 100) + (data.iibb / 100)));
    const price = cost + (data.cost * ((data.others + data.gain) / 100));
    const priceOff = price * (1 - (data.off / 100));
    const discount = price - priceOff;
    const margin = ((priceOff - cost) / cost) * 100;

    return (
        <div className={d.home}>

            <div className={d.body}>
                <div className={d.card}>
                    <div className={`${d.front} ${isFlipped ? d.flip : ''}`}>
                        <div className={d.insideFront}>
                            <h2>Costs & Percentages</h2>
                            {['cost', 'iva', 'iibb', 'others', 'gain', 'off'].map((field, index) => (
                                <div key={index} className={d.inputs}>
                                    <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}: {field === 'cost' ? '$' : '%'}</label>
                                    <input
                                        type="text"
                                        id={field}
                                        name={field}
                                        value={data[field]}
                                        onChange={handleChange}
                                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                        pattern="[0-9]*"
                                        inputMode="numeric"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`${d.back} ${!isFlipped ? d.flip : ''}`}>
                        <div className={d.insideFront}>
                            <h2>Results</h2>
                            {[
                                { label: 'Price', value: price.toFixed(2) },
                                { label: 'Price Off', value: priceOff.toFixed(2) },
                                { label: 'Discount', value: discount.toFixed(2) },
                                { label: 'Off applied', value: `${data.off || 0}%` },
                            ].map((item, index) => (
                                <div key={index} className={d.inputs}>
                                    <label htmlFor={item.label}>{item.label}:</label>
                                    <span>{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={d.change} onClick={() => setIsFlipped((prev) => !prev)}>
                        {isFlipped ? 'Volver' : 'Ver'}
                    </div>

                    {(Object.values(data).some(value => value)) && (
                        <button className={d.change2} onClick={reset}>
                            Reset
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PriceCalculator;
