import React from 'react';
import Element from './Element';

import './styles.scss';

const Timeline = ({ elements }) => (
    <div className="Timeline">
        {elements.map(elem => <Element {...elem} />)}
    </div>
)

export default Timeline;