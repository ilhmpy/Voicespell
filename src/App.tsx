import { Modal } from "./app.styles";
import { useState } from "react";

import { StartPlay, Playing } from "./components";

function App() {
    const [play, setPlay] = useState<boolean>(false);

    return (
        <Modal play={play}>
            {play ? <Playing /> : <StartPlay setPlay={setPlay} />}
        </Modal>
    );
} 

export default App;
