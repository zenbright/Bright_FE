import { FaFacebook } from "react-icons/fa";

import ButtonIcon from "./components/general/buttonIcon";

function App() {
    const handleButtonClick = () => {
        console.log('Button clicked!');
    };

    return (
        <div>
            <ButtonIcon size="130px"
                background="blue-500"
                action={handleButtonClick}
                borderRadius="rounded-3xl"
                shape="rounded-rectangle">
                <FaFacebook size={110} className=""/>
            </ButtonIcon>
        </div>
    );
}

export default App