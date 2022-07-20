import React from "react";
import { createRoot } from 'react-dom/client';
import DraggableBox from "./components/DraggableBox";

const App = () => {
    return (
        <main>
            Hello World!
            <DraggableBox />
        </main>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);