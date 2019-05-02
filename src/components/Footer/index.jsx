import React from 'react';
import './styles.scss';

const Footer = () => (
    <footer>
        © {new Date().getFullYear()},
            <br />
        built with
            {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        <br />
        deployed with
            {` `}
        <a href="https://jenkins.io/">Jenkins</a>
    </footer>
);

export default Footer;