import React from 'react';
import './styles.scss';

const Go = ({to}) => (
    <div className="Go">
        <a href={`#${to}`}><span className="chevron-down" /></a>
    </div>
);

export default Go;