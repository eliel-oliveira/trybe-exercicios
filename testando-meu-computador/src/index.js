import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import App from './App';
import Content from './Content';
import Footer from './Footer';

function tick() {
  const element = (
    <div>
      <Header/>
      <App/>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString('pt', { hour12: true })}.</h2>
      <Content/>
      <Footer/>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);