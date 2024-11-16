export default function Slider() {
    return (
        <div className="carousel w-full">
            <div id='slide1' className="carousel-item relative w-full">
                <img className="w-full" src='https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/1316eb53d6f52c71.jpg?q=20'
                    alt='carousal img -02'></img>
                <div>
                    <a href='#slide2'>left</a>
                    <a href='#slide2'>Right</a>
                </div>
            </div>
            <div id='slide2' className="carousel-item relative w-full">
                <img className="w-full" src='	https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/d9290fb51138d286.png?q=20
' alt='carousal img-01'></img>
            </div>



        </div>
    )
}