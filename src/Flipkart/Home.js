import Description from "./Description";
import Navigation from "./Navigation";
import Products from "./Products";
import Slider from "./Slider";

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <Navigation />
            <Description />
            <Slider />
            <Products />

        </>
    )
}