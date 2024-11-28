import d from './GainCalculator.module.css';
import { useState } from 'react';
import Nav from '../nav/Nav';
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
        const address = "Dirección: Calle Falsa 123, Buenos Aires, Argentina";
        const phone = "Teléfono: +54 11 1234-5678";

        // Encabezado
        doc.setFontSize(18);
        doc.text(companyName, 105, 15, { align: "center" }); // Título centrado
        doc.setFontSize(12);
        doc.text(cuit, 14, 25);
        doc.text(businessName, 14, 30);
        doc.text(address, 14, 35);
        doc.text(phone, 14, 40);

        // Nota aclaratoria
        doc.setFontSize(14);
        doc.setTextColor(255, 0, 0); // Rojo para destacar el mensaje
        doc.text('NOTA DE ENTREGA - SIN VALIDEZ FISCAL', 105, 50, { align: "center" });

        // Título del presupuesto
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0); // Volver al color negro
        doc.text('Presupuesto', 14, 60);

        // Tabla de productos
        doc.autoTable({
            startY: 65, // Posición de inicio de la tabla
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
                <Nav />
            </div>
            <div className={d.body}>
                <div className={d.card}>
                    <h2>Calculadora de Presupuesto</h2>
                    <div className={d.form}>
                        <label htmlFor="">Producto:</label>
                        <input
                            type="text"
                            placeholder="Producto"
                            value={newItem.name}
                            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                        />
                        <label htmlFor="">Precio:</label>
                        <input
                            type="number"
                            placeholder="Precio"
                            value={newItem.price}
                            onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) || 0 })}
                        />
                        <label htmlFor="">Cantidad:</label>
                        <input
                            type="number"
                            placeholder="Cantidad"
                            value={newItem.quantity}
                            onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) || 1 })}
                        />
                        <label htmlFor="">IVA:</label>
                        <input
                            type="number"
                            placeholder="IVA (%)"
                            value={newItem.tax}
                            onChange={(e) => setNewItem({ ...newItem, tax: parseFloat(e.target.value) || 0 })}
                        />
                        <button onClick={addItem}>Agregar</button>
                    </div>

                    <div className={d.items}>
                        <h3>Productos</h3>
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
