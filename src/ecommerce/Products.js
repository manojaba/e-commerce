import { useState } from "react"

export default function Products() {
    let [products, setProducts] = useState([{ id: 1, product: 'Speaker', url: 'assets/products/speaker.png' },
    { id: 2, product: 'Headphones', url: 'assets/products/headphones.png' }
    ])
    return (
        <div>
            {
                products.map((each, index) => {
                    return (
                        <img src={each.url}></img>
                    )
                })
            }

        </div>
    )
}