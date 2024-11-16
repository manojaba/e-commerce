export default function Description() {
    let products = [{ img: '	https://rukminim2.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100', product: 'Grocery' },
    { img: 'https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100', product: 'Mobiles' },
    { img: '	https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100', product: 'Fashion' },

    { img: '	https://rukminim2.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100', product: 'Electronics' },
    { img: 'https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100', product: 'Home & Furniture' },
    { img: '	https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100', product: 'Appliances' },
    { img: 'https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100', product: 'Flight Bookings' },
    { img: 'https://rukminim2.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100', product: 'Beauty,Toys & More' },
    { img: 'https://rukminim2.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100', product: 'Two Wheelers' }]
    return (
        <div className="flex justify-around pt-5 pb-5">
            {
                products.map((each) => {
                    return (
                        <div >
                            <img style={{ width: 64, height: 64 }} src={each.img} alt='grocery img'></img>
                            <p>{each.product}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}