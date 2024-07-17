import { useState } from 'react';

const Cell: React.FC<{
    title: string,
    isOn: boolean,
    onClick: React.MouseEventHandler<HTMLDivElement>,
}> = function ({ title, isOn, onClick }) {
    return (
        <div className='cell'
            title={title}
            style={{ backgroundColor: isOn ? 'lightgreen': '' }}
            onClick={onClick}></div>
    );
}

export default Cell;
