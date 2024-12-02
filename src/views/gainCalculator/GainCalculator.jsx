import d from './GainCalculator.module.css';
import { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const GainCalculator = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ name: '', price: 0, quantity: 1, tax: 0 });

    // Agregar un nuevo ítem al presupuesto
    const addItem = () => {
        setItems([...items, { ...newItem, id: Date.now() }]);
        setNewItem({ name: '', price: 0, quantity: 1, tax: 0 });
    };

    // Eliminar un ítem del presupuesto
    const removeItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    // Calcular el precio final de un ítem
    const calculateItemTotal = (price, quantity, tax) => {
        const subtotal = price * quantity;
        return subtotal + (subtotal * tax) / 100;
    };

    // Calcular el precio total del presupuesto
    const calculateTotal = () => {
        return items.reduce(
            (acc, item) => acc + calculateItemTotal(item.price, item.quantity, item.tax),
            0
        );
    };

    // Exportar el presupuesto a PDF
    const exportToPDF = () => {
        const doc = new jsPDF();

        // Información de la empresa
        const companyName = "Distribuidora Marelys";
        const cuit = "CUIT: 20-12345678-9";
        const businessName = "Razón Social: Distribuidora Marelys S.A.";
        const address = "Dirección: Calle 44 5215, Buenos Aires, Argentina";
        const phone = "Teléfono: 221 504-7727";

        // Obtener fecha y hora actuales
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString(); // Fecha en formato local
        const formattedTime = currentDate.toLocaleTimeString(); // Hora en formato local

        // Encabezado
        doc.setFontSize(18);
        doc.text(companyName, 105, 15, { align: "center" }); // Título centrado
        doc.setFontSize(12);
        doc.text(cuit, 14, 25);
        doc.text(businessName, 14, 30);
        doc.text(address, 14, 35);
        doc.text(phone, 14, 40);

        // Fecha y hora
        doc.text(`Fecha: ${formattedDate}`, 14, 50);
        doc.text(`Hora: ${formattedTime}`, 14, 55);

        // Nota aclaratoria
        doc.setFontSize(14);
        doc.setTextColor(255, 0, 0); // Rojo para destacar el mensaje
        doc.text('NOTA DE ENTREGA - SIN VALIDEZ FISCAL', 105, 65, { align: "center" });

        // Título del presupuesto
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0); // Volver al color negro
        doc.text('Presupuesto', 14, 75);

        // Tabla de productos
        doc.autoTable({
            startY: 80, // Posición de inicio de la tabla
            head: [['Producto', 'Cantidad', 'Precio Unitario', 'IVA (%)', 'Total']],
            body: items.map((item) => [
                item.name,
                item.quantity,
                `$${item.price.toFixed(2)}`,
                `${item.tax}%`,
                `$${calculateItemTotal(item.price, item.quantity, item.tax).toFixed(2)}`,
            ]),
        });

        // Total general
        const finalY = doc.lastAutoTable.finalY; // Última posición de la tabla
        doc.setFontSize(14);
        doc.text(`Total: $${calculateTotal().toFixed(2)}`, 14, finalY + 10);

        // Pie de página
        doc.setFontSize(10);
        doc.setTextColor(100); // Gris para el texto adicional
        doc.text('Esta nota de entrega no reemplaza una factura oficial. Para cualquier duda, contáctenos.', 105, 285, { align: "center" });

        // Guardar el PDF
        doc.save('nota_de_entrega.pdf');
    };


    return (
        <div className={d.home}>
            <div className={d.navContent}>
                {/* <Nav changeCard={changeCard} /> */}
            </div>
            <div className={d.body}>
                <div className={d.card}>
                    <h2>Calculadora de Presupuesto</h2>
                    <div className={d.form}>

                        <div className={d.inputContainer}>
                            <label htmlFor="">Producto:</label>
                            <input
                                type="text"
                                placeholder="Producto"
                                value={newItem.name}
                                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                            />
                        </div>

                        <div className={d.inputContainer}>
                            <label htmlFor="">Cantidad:</label>
                            <input
                                type="number"
                                placeholder="Cantidad"
                                value={newItem.quantity}
                                pattern="[0-9]*"
                                inputMode="numeric"
                                onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) })}
                            />
                        </div>
                        <div className={d.inputContainer}>
                            <label htmlFor="">Precio:</label>
                            <input
                                type="number"
                                placeholder="Precio"
                                value={newItem.price}
                                pattern="[0-9]*"
                                inputMode="numeric"
                                onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) })}
                            />
                        </div>
                        <div className={d.inputContainer}>

                            <label htmlFor="">IVA:</label>
                            <input
                                type="number"
                                placeholder="IVA (%)"
                                value={newItem.tax}
                                pattern="[0-9]*"
                                inputMode="numeric"
                                onChange={(e) => setNewItem({ ...newItem, tax: parseFloat(e.target.value) })}
                            />
                        </div>
                        <button onClick={addItem}>Agregar</button>
                    </div>

                    <h3>Productos</h3>
                    <div className={d.items}>
                        <ul>
                            {items.map((item) => (
                                <li key={item.id} className={d.item}>
                                    {item.name} - $ {item.price} x {item.quantity} (IVA: {item.tax}%) =
                                    <strong> ${calculateItemTotal(item.price, item.quantity, item.tax).toFixed(2)}</strong>
                                    <button onClick={() => removeItem(item.id)}>Eliminar</button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={d.total}>
                        <h3>Total: ${calculateTotal().toFixed(2)}</h3>
                        <button onClick={exportToPDF}>Exportar a PDF</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GainCalculator;
