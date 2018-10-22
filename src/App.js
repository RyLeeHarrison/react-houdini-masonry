import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

import Masonry from './Masonry';

import Api from './Api/Api';

const images = [
  'https://images.unsplash.com/photo-1539979295193-ce3e38c97cd9?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1515705576963-95cad62945b6?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1530788838254-7a5833c8fda9?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1462822257719-8e456a6b23ef?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1437448317784-3a480be9571e?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1530634693970-4f30bb329de4?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1517685704588-0935ac847be7?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1539159214938-974a19ae1b24?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1518791884817-84582c4856ff?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1532063373913-a81fad379948?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1531176175280-33e81422832a?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1529458026081-439a0f7715b6?auto=format&fit=crop&w=800&q=60',
]

const sampleText = [
  '1 Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix. Vix stet honestatis definitionem an, et natum ocurreret cum, semper interpretaris cu mea. Eam saperet fierent luptatum no. Ius ei dicunt detracto elaboraret. Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix. Vix stet honestatis definitionem an, et natum ocurreret cum, semper interpretaris cu mea. Eam saperet fierent luptatum no. Ius ei dicunt detracto elaboraret.',
  '2 Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix. Vix stet honestatis definitionem an, et natum ocurreret cum, semper interpretaris cu mea. Eam saperet fierent luptatum no. Ius ei dicunt detracto elaboraret.',
  '3 Lorem ipsum dolor sit amet.',
  '4 Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix. Vix stet honestatis definitionem an, et natum ocurreret cum, semper interpretaris cu mea. Eam saperet fierent luptatum no. Ius ei dicunt detracto elaboraret.',
  '5 Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix. Vix stet honestatis definitionem an.',
  '6 Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix. Vix stet honestatis definitionem an, et natum ocurreret cum, semper interpretaris cu mea. Eam saperet fierent luptatum no. Ius ei dicunt detracto elaboraret Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix. Vix stet honestatis definitionem an, et natum ocurreret cum, semper interpretaris cu mea.',
  '7 Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix. Vix stet honestatis definitionem an, et natum ocurreret cum, semper interpretaris cu mea. Eam saperet fierent luptatum no. Ius ei dicunt detracto elaboraret.',
  '8 Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix.',
  '9 Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix. Vix stet honestatis definitionem an, et natum ocurreret cum, semper interpretaris cu mea..',
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Masonry gallery with <code>CSS Houdini</code> and  <code>React</code></p>
          <a
            className="App-link"
            href="https://github.com/w3c/css-houdini-drafts/wiki"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn About Houdini
          </a>
        
        </header>

        <Masonry
          images={images}
          padding={20}
          columns='auto'
        />

        <section className="App-section">
          <p>Masonry Elements</p>        
        </section>

        <Masonry
          text={sampleText}
          padding={20}
          columns='auto'
        />

        <section className="App-section">
          <p>Api Example</p>        
        </section>

        <Api q='react.js' maxResults={15} />

      </div>
    );
  }
}

export default App;
