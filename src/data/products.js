const productList = [
    {
        titulo: 'Nueva York',
        category: 'urbano',
        imagen: 'https://inmobiliare.com/himalaya/wp-content/webp-express/webp-images/uploads/2020/06/Nueva-York_1.jpg.webp',
        itinerario: 'Line 15:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md',
        precio: 15000,
        id: 1,
        stock: 52,
    },
    {
        titulo: 'Machu Picchu',
        category: 'aventura',
        imagen: 'https://www.peru.travel/Contenido/Atractivo/Imagen/pe/145/1.4/Principal/Machu%20Picchu.jpg',
        itinerario: 'Line 15:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md',
        precio: 12000,
        id: 2,
        stock: 34,
    },
    {
        titulo: 'Barcelona',
        category: 'sol y playa',
        imagen: 'https://i0.wp.com/thesefootballtimes.co/wp-content/uploads/2015/11/barcelona1.jpg?w=1920&ssl=1',
        itinerario: 'Line 15:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md',
        precio: 6000,
        id: 3,
        stock: 73,
    },
    {
        titulo: 'Phuket',
        category: 'sol y playa',
        imagen: 'https://www.asiaqua.com/wp-content/uploads/2018/12/diving-day-trip-phuket-koh-phiphi-asiaqua.jpg',
        itinerario: 'Line 15:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md',
        precio: 10000,
        id: 4,
        stock: 98,
    },
    {
        titulo: 'Berna',
        category: 'urbano',
        imagen: 'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1280bp/public/live_banner/bern-1.jpg',
        itinerario: 'Line 15:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md',
        precio: 10000,
        id: 5,
        stock: 35,
    },
    {
        titulo: 'Cancun',
        category: 'sol y playa',
        imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/6a/2a/e4/impactantes-hoteles-en.jpg?w=1400&h=-1&s=1',
        itinerario: 'Line 15:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md',
        precio: 10000,
        id: 6,
        stock: 76,
    },
    {
        titulo: 'Cartagena',
        category: 'urbano',
        imagen: 'https://denomades.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2020/05/11141948/ca-times.brightspotcdn.com_.jpg',
        itinerario: 'Line 15:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md',
        precio: 10000,
        id: 7,
        stock: 33,
    },
    {
        titulo: 'Estambul',
        category: 'religioso',
        imagen: 'https://img.imageboss.me/greca/width/1255/format:webp/5e4affc178bb2.jpeg',
        itinerario: 'Line 15:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md',
        precio: 10000,
        id: 8,
        stock: 78,
    },
    {
        titulo: 'Londres',
        category: 'urbano',
        imagen: 'https://www.tododisca.com/wp-content/uploads/2019/05/Londres-Portada-1.jpg',
        itinerario: 'Line 15:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md',
        precio: 10000,
        id: 9,
        stock: 86,
    },
    {
        titulo: 'Montreal',
        category: 'aventura',
        imagen: 'https://wp-growpro.s3-eu-west-1.amazonaws.com/media/2020/05/Vivir-en-Montreal-1080x675.jpg',
        itinerario: 'Line 15:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md',
        precio: 10000,
        id: 10,
        stock: 38,
    },
    {
        titulo: 'Orlando',
        category: 'aventura',
        imagen: 'https://i0.wp.com/www.wfla.com/wp-content/uploads/sites/71/2020/05/Universal-Orlando-.jpg?w=2000&ssl=1',
        itinerario: 'Line 15:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md',
        precio: 10000,
        id: 11,
        stock: 95,
    },
    {
        titulo: 'Paris',
        category: 'urbano',
        imagen: 'https://lonelyplanetes.cdnstatics2.com/sites/default/files/fotos/Francia_Paris_shutterstock_122085496_Luciano%20Mortula_Shutterstock.jpg',
        itinerario: 'Line 15:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md',
        precio: 10000,
        id: 12,
        stock: 84,
    },
    {
        titulo: 'Rio De Janeiro',
        category: 'sol y playa',
        imagen: 'https://i0.wp.com/imaginariodejaneiro.com/wp-content/uploads/2018/09/rio-de-janeiro-1963744_1280.jpg?w=1220&ssl=1', 
        itinerario: 'Line 15:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md',       
        precio: 10000,
        id: 13,
        stock: 75,
    },
    {
        titulo: 'Roma',
        category: 'historico',
        imagen: 'https://img.bekiaviajes.com/ciudades/portada/0000/6-h.jpg',
        itinerario: 'Line 15:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md',
        precio: 10000,
        id: 14,
        stock: 43,
    },
    {
        titulo: 'Santiago De Chile',
        category: 'urbano',
        imagen: 'https://southjets.com/wp-content/uploads/2019/04/Blog_Post_Chile.jpg',
        itinerario: 'Line 15:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md',
        precio: 10000,
        id: 15,
        stock: 98,
    }
]

export default productList;