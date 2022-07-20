import React, { useState } from 'react';

const DraggableBox = () => {
    const [deltaX, setDeltaX] = useState(0),
        [deltaY, setDeltaY] = useState(0),
        [dragging, setDragging] = useState(false),
        [pos, setPos] = useState({});

    const handleMouseDown = (ev) => {
        setDeltaX(ev.screenX - ev.currentTarget.getBoundingClientRect().left);
        setDeltaY(ev.screenY - ev.currentTarget.getBoundingClientRect().top);
        setDragging(true);
    }
    const handleMouseUp = () => {
        setDragging(false);
    }
    const handleDrag = (ev) => {
        if (dragging) {
            let left = ev.screenX - deltaX;
            let top = ev.screenY - deltaY;
            setPos({ left: left, top: top });
        }
    }
    return (
        <div
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleDrag}
            style={pos}
            className='draggable-box'
        >
        </div >
    )
}

export default DraggableBox;