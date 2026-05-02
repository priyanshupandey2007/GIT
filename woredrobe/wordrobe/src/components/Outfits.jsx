import React, { useState } from 'react';
import Mannequin from './Mannequin';

const colorToHex = (colorName) => {
  const colorMap = {
    white: '#FFFFFF', black: '#1C1C1E', navy: '#000080',
    blue: '#2B58A1', red: '#A12B2B', grey: '#808080',
    beige: '#F5F5DC', maroon: '#800000', green: '#2E7D32', pink: '#E91E8C'
  };
  return colorMap[colorName?.toLowerCase()] || '#888888';
};

const Outfits = ({ user }) => {
  const [combinations, setCombinations] = useState([]);

  const generateOutfits = () => {
    const tops = user.clothes.filter(c => c.category === 'shirt' || c.category === 'top');
    const bottoms = user.clothes.filter(c => c.category === 'jeans' || c.category === 'trousers');

    if (tops.length === 0) {
      alert("Please add some shirts/tops to your wardrobe first!");
      return;
    }

    const generated = tops.map((topItem, index) => ({
      id: Date.now() + index,
      top: topItem,
      bottom: bottoms[index % bottoms.length] || null
    }));

    setCombinations(generated);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-display)' }}>Outfit Combinations</h1>
        <button
          className="btn-primary"
          style={{ width: 'auto', padding: '10px 24px', background: 'var(--gold)' }}
          onClick={generateOutfits}
        >
          ✨ Generate Outfits
        </button>
      </div>

      {combinations.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✨</div>
          <h3>No outfits generated yet</h3>
          <p>Tap the button above to see combinations from your wardrobe.</p>
        </div>
      ) : (
        <div className="outfits-grid">
          {combinations.map((outfit, index) => (
            <div key={outfit.id} className="outfit-card">
              <div className="mannequin-container">
                <Mannequin
                  topColor={colorToHex(outfit.top.color)}
                  bottomColor={outfit.bottom ? colorToHex(outfit.bottom.color) : null}
                />
              </div>
              <div className="outfit-info" style={{ padding: '1.2rem', borderTop: '1px solid var(--border)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Look #{index + 1}
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: '500' }}>
                  {outfit.top.name}{outfit.bottom ? ` + ${outfit.bottom.name}` : ''}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                  {outfit.top.color}{outfit.bottom ? ` & ${outfit.bottom.color}` : ''}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Outfits;