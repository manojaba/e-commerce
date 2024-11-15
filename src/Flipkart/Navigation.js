export default function Navigation() {
    return (
        <>
            <nav className="flex">
                <div>
                    <img src="e-commerce/src/assets/flipkart-logo.svg" alt='flipkart logo'></img>
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