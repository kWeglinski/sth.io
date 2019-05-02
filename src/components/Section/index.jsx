import React from 'react';

import './styles.scss';

const Section = ({ children, id }) => (
    <div id={id} className="Section" >
        {children}
    </div>
);

export default Section;
