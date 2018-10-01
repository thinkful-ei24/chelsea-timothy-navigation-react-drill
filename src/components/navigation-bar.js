import React from 'react';

import './navigation-bar.css';

export default function NavigationBar(props) {
  const links = props.links.map(({ text, href }) => (
    <li>
      <a href={href}>{text}</a>
    </li>
  ));

  return (
    <header className="navigation-bar">
      <h1>{props.title}</h1>
      <nav>
        <ul className="navigation-bar-nav">{links}</ul>
      </nav>
    </header>
  );
}
