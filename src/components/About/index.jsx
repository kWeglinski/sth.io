import React from 'react';
import Section from '../Section';
import Go from '../Go';

const About = () => (
  <Section>
    <div className="Section__container">
      <h1>Hi, I'm Krzysztof Węgliński</h1>
      <p>
        And I do javascript since 2009. Last two years I've spent with <strong>React</strong>,
        refactoring, writing from scratch and fixing bugs (anything) working for <i>DCMN</i>.
      </p>
      <p>
        I also was <strong>team leader</strong>. At <i>VR Global</i> my team (of 4) had to take outsourced VR tour creator (sort of CMS)
        and make it inhouse. Not only we did it, we've also made great team of developers who were happy to work together.
        At <i>Clearcode</i> I took over a team (of 3) and improved estimation process which reduced overhours greatly and
        made things deliverable within reasonable time.
      </p>
      <p>
        <strong>React, Node.js, Webpack, D3.js, Gulp, Grunt, Sass or Less [and many more]?</strong> Yes to all of them.
        I've had opportunity to use them on actual commercial projects,
        and do everything you might need me to do.
      </p>
      <p>
        M I eager to learn and grow? Well, right now I'm running 2 bare metal servers at home which run Debian,
        one of them runs <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a> which contains <a href="https://jenkins.io/" target="_blank" rel="noopener noreferrer">Jenkins</a> used to deploy this very website (and couple other things).
        My home is bloated with raspberry pi's and each of them is providing at least one service.
        There's also home automation branch that I'm exploring and writing my own solutions which suit my needs.
        Hope that answers the question.
      </p>
    <Go to="Jobs" />
    </div>
  </Section>
);

export default About;

