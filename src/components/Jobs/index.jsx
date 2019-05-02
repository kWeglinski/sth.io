import React from 'react';
import { JOBS } from '../../constants/jobs';
import Section from '../Section';
import Timeline from '../Timeline';

const Jobs = () => (
  <Section id="Jobs">
    <div className="Section__container">
      <h1>
        Last three years of my experience in a nutshell
      </h1>
      <Timeline elements={JOBS} />
      <p className="text-center">To know more about my past visit my <a href="https://www.linkedin.com/in/krzysztofweglinski/" target="_blank" rel="noopener noreferrer">linkedin</a></p>
    </div>
  </Section>
);

export default Jobs;