import React from 'react';

export const JOBS = [
    {
        from: '2017.02',
        to: '2019.05',
        title: 'DCMN, Berlin',
        desc: <p>
          <b>DSP</b> [Demand Side Platform] - moving features from RoR frontend to React, developed own redux form manager basing on Redux Forms to better fit product needs,
          <br />
          <b>TV Analytics</b> - improved performance through additional frontend caching layer greatly reducing TTFB bottleneck,
          <br />
          <b>MBP</b> [Media Buying Platform] -  built core from scratch, product designed to programmatically buy tv campaigns
          <br />
          <b>Home Page</b> - moved from react only to SSR on next.js
        </p>
    },
    {
        from: '2016.10',
        to: '2017.02',
        title: 'Intive / SMT, Wrocław',
        desc: <p>
          <b>Client landing page</b> - Server Side rendering moved from react with SSR to pug.js as page was static improved load and development time greatly
          <br />
          <b>D3.js based charting library</b> - for customers needs
          <br />
          <b>Node.js and express.js training</b> - conducted training on basics
        </p>
    },
    {
        from: '2016.02',
        to: '2016.10',
        title: 'VR Global, Wrocław',
        desc: <p>
          <b>API</b> - created from scratch node.js API that allowed user to make VR tour on real estates, parsing assets into multiple quality modes.
          <br />
          <b>CMS and Viewer</b> - team lead a team of frontend developers who created CMS that used above mentioned API and preview those tours.
        </p>
    }
];