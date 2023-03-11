import { Modal } from "./app.styles";
import { useState } from "react";

import { StartPlay, Playing } from "./components";
import { LocalesProvider } from "./i18n/i18n";

function App() {
    const [play, setPlay] = useState<boolean>(false);

    return (
        <LocalesProvider>
            <Modal play={play}>
                {play ? <Playing /> : <StartPlay setPlay={setPlay} />}
            </Modal>
        </LocalesProvider>
    );
} 

export default App;
