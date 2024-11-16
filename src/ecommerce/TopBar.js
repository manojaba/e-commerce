import { FaCartArrowDown } from "react-icons/fa";
import { PiSignInBold } from "react-icons/pi";

export default function TopBar() {
    return (
        <div>
            <nav className="w-full flex justify-around">
                <div>
                    <img src={require('../assets/logo.png')}></img>
                </div>
                <div>
                    <input type='text' placeholder="Search"></input>
                </div>
                <div>
                    <FaCartArrowDown />
                </div>
                <div>
                    <PiSignInBold />

                </div>
            </nav>

        </div>
    )
}