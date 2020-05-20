import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail}></Route>
    </BrowserRouter>
  );
}
