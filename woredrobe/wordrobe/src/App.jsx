import React from 'react';
import { WardrobeProvider } from './context/WardrobeContext';
import ActionBar from './components/ActionBar';
import WardrobeGrid from './components/WardrobeGrid';
import './styles/boutique.css';

function App() {
  return (
    <WardrobeProvider>
      <div className="min-h-screen px-4 py-12 max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl italic mb-2 tracking-tight">CoutureKeep</h1>
          <p className="text-slate-400 font-light tracking-[0.2em] uppercase text-xs">A Minimalist Digital Wardrobe</p>
        </header>

        <main>
          <ActionBar />
          <section>
            <h2 className="serif text-2xl mb-8">My Collection</h2>
            <WardrobeGrid />
          </section>
        </main>
      </div>
    </WardrobeProvider>
  );
}

export default App;