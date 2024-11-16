import { useState } from "react"

export default function Category() {
    let [categories, setCategories] = useState([{ itemid: 1, cat: 'Grocery', img: '/assets/grocery.png' },
    { itemid: 2, cat: 'Mobiles', img: 'assets/mobiles.png' },
    { itemid: 3, cat: 'Fashion', img: 'assets/fashion.png' },
    { itemid: 4, cat: 'Electronics', img: 'assets/electronics.png' },
    { itemid: 5, cat: 'Home & Furniture', img: 'assets/home&furniture.png' },
    { itemid: 6, cat: 'Appliances', img: 'assets/appliances.png' },
    { itemid: 7, cat: 'Flight Bookings', img: 'assets/flightbookings.png' },
    { itemid: 7, cat: 'Beauty,Toys & More', img: 'assets/beauty.png' },
    { itemid: 8, cat: 'Two Wheelers', img: 'assets/two-wheelers.png' }
    ])

    console.log(categories[0].img)
    return (
        <div className="flex justify-around">
            {
                categories.map((each, index) => {
                    return (
                        <div className="hover:text-blue-400">
                            <img src={each.img} alt={each.cat + 'image'} />
                            <p>{each.cat}</p>
                        </div>
                    )
                })
            }

        </div>

    )
}