import { Invoice } from "../models/invoice";

export const invoiceData: any = {
    id: 1,
    name: 'Componentes de PC',
    client:{
        name: 'Manuel',
        lastname: 'Paz de la Vega',
        address: {
            country: 'USA',
            city: 'Los Angeles',
            street: 'One Street',
            number: 25,
        }
    },
    company: {
        name: 'New Age',
        fiscalNumber: 3123123
    },
    items: [
        {
            id: 1,
            product: 'Cpu Intel i9',
            price: 599,
            quantity: 1
        },
        {
            id: 2,
            product: 'Corsair Teclado',
            price: 399,
            quantity: 2
        }
        ,
        {
            id: 3,
            product: 'Monitor LG',
            price: 899,
            quantity: 3
        }
    ]
}