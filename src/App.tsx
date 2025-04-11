import React from 'react';
import './styles/App.module.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <ContactForm />
    </div>
  );
}
export default App;