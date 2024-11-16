

export default function Navigation() {
    return (
        <>
            <nav className="flex justify-around">
                <div>
                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt='flipkart logo'></img>
                </div>
                <input type='text' placeholder="Seatch for Products,Brands and More"></input>
                <select>
                    <option>Login</option>
                </select>
                <button>Cart</button>


            </nav>
        </>
    )
}