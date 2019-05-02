import React from 'react';

const Element = ({ from, to, title, desc }) => (
    <div className="Timeline--element">
        <div className="Timeline--element-time">
            {from} to {to}
        </div>
        <div className="Timeline--element-desc">
            <h2 className="Timeline--element-title">{title}</h2>
            {desc}
        </div>
    </div>
)

export default Element;
