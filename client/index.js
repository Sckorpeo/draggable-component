import React from "react";
import { createRoot } from 'react-dom/client';
import DraggableBox from "./components/DraggableBox";

const App = () => {
    return (
        <main>
            Hello World!
            <DraggableBox><img src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' /></DraggableBox>
        </main>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);