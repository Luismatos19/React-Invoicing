import { Invoice } from "../types/Invoice";

export const invoicesMock: Invoice[]= [
    {
        "id": 1,
        "tax": 13.00,
        "invoice_number": 10,
        "logo": "https://www.i9ce.com.br/arquivos/uploads/2017/10/logo-company.jpg",
        "customer_info": {
            "name": "Mr. John Doe",
            "web_link": "John Doe Designs Inc.",
            "address1": "1 Infinite Loop",
            "address2": "Cupertino, California, US",
            "postal": "90210"
        },
        "company_info": {
            "name": "Metaware Labs",
            "web_link": "www.metawarelabs.com",
            "address1": "123 Yonge Street",
            "address2": "Toronto, ON, Canada",
            "postal": "M5S 1B6"
        },
        "items": [
            {   
                "id": 1,
                "quantity": 10,
                "description": "Gadget",
                "cost": 9.95,
                "discount": 5
            },
            {
                "id": 2,
                "quantity": 10,
                "description": "Gadget",
                "cost": 9.95,
                "discount": 15
            },
            {
                "id": 3,
                "quantity": 10,
                "description": "Gadget",
                "cost": 9.95,
                "discount": 25
            }
        ]
    },
    {
        "id": 2,
        "tax": 10.00,
        "invoice_number": 10,
        "logo": "",
        "customer_info": {
            "name": "Mr. John Doe",
            "web_link": "John Doe Designs Inc.",
            "address1": "1 Infinite Loop",
            "address2": "Cupertino, California, US",
            "postal": "90210"
        },
        "company_info": {
            "name": "Metaware Labs",
            "web_link": "www.metawarelabs.com",
            "address1": "123 Yonge Street",
            "address2": "Toronto, ON, Canada",
            "postal": "M5S 1B6"
        },
        "items": [
            {
                "id": 1,
                "quantity": 10,
                "description": "Gadget",
                "cost": 9.95,
                "discount": 50
            }
        ]
    },
    {
        "id": 3,
        "tax": 23.00,
        "invoice_number": 9,
        "logo": "https://www.i9ce.com.br/arquivos/uploads/2017/10/logo-company.jpg",
        "customer_info": {
            "name": "Mr. John Doe",
            "web_link": "John Doe Designs Inc.",
            "address1": "1 Infinite Loop",
            "address2": "Cupertino, California, US",
            "postal": "90210"
        },
        "company_info": {
            "name": "Metaware Labs",
            "web_link": "www.metawarelabs.com",
            "address1": "123 Yonge Street",
            "address2": "Toronto, ON, Canada",
            "postal": "M5S 1B6"
        },
        "items": [
            {   
                "id": 1,
                "quantity": 10,
                "description": "Gadget",
                "cost": 9.95,
                "discount": 5
            }
        ]
    }

]