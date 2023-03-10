exports.handler = async event => {
    const products = [
        {
          "token": "b7573321-cd54-4c37-95cc-8b2f2c43e844",
          "title": "Nike Air Max 97",
          "color": "grey",
          "price": 170.00,
          "rating": 4.5,
          "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/76b430e5-ed15-4864-99c8-3898162b966a/air-max-97-shoes-xXlgnF.png"
        },
        {
          "token": "4020e60f-388a-49b2-97c1-873b1c3d3fa9",
          "title": "Nike Air Max 97",
          "color": "black",
          "price": 171.00,
          "rating": 4.7,
          "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/59f4bcd2-13db-456c-bd82-0ade942638d4/air-max-97-shoes-h6hqBR.png"
        },
        {
          "token": "1fc7baf3-3e3e-45bf-b9c9-22d2b28edf35",
          "title": "Nike Air Max 97",
          "color": "pink",
          "price": 172.00,
          "rating": 4.7,
          "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/174c8f8a-5716-40d6-b51f-2925c6ad730d/air-max-97-shoes-mrD9xN.png"
        },
        {
          "token": "1fc7baf3-3e3e-45bf-b9c9-22d2b28edf34",
          "title": "Nike Air Max Plus",
          "color": "red",
          "price": 173.00,
          "rating": 4.7,
          "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/31e787cc-b2f0-41b6-aacb-e8776b5e49c7/air-max-plus-older-shoes-KPdnsJ.png"
        },
        {
          "token": "f50d0306-6909-47e2-b7f3-077f138d7b31",
          "title": "Nike Air Max Plus 3",
          "color": "black",
          "price": 220.00,
          "rating": 4.7,
          "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/disuwww5uxkqulu2aivh/air-max-plus-iii-shoes-WV2bDM.png"
        },
        {
          "token": "4f75b9a9-76a8-47d2-a38b-05ca91c3f6d8",
          "title": "Nike Air VaporMax Plus",
          "color": "white",
          "price": 110.00,
          "rating": 4.2,
          "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/pexd96bxgbyteo2xziaf/air-vapormax-plus-shoes-yATY9p7E.png"
        },
        {
          "token": "e1e3f10b-882f-44a7-a7ba-74c07904f86e",
          "title": "Nike Air Max 90",
          "color": "green",
          "price": 75.00,
          "rating": 4.4,
          "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/541e04e6-4e8f-411b-93e2-b3c1f0f235b5/air-max-90-futura-shoes-cVb8PP.png"
        },
        {
          "token": "e1e3f10b-882f-44a7-a7ba-74c07904f86d",
          "title": "Nike Air Max 90",
          "color": "pink",
          "price": 75.00,
          "rating": 4.4,
          "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/544e9b34-fabe-4ada-8735-5f09f5008738/air-max-90-shoes-nqglHB.png"
        },
        {
          "token": "e1e3f10b-882f-44a7-a7ba-74c07904f86c",
          "title": "Nike Air Max 90",
          "color": "white",
          "price": 75.00,
          "rating": 4.4,
          "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/66cdf9bc-7e9f-4f54-9f52-e1621a9a2f31/air-max-90-shoes-nqglHB.png"
        }
    ]

    return {
        statusCode: 200,
        body: JSON.stringify(products);
    }
}