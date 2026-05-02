import React, { useState } from 'react';
import { Shirt, Trash2, Plus, Package, Palette, Layers, ChevronDown } from 'lucide-react';

const CATEGORIES = ['shirt', 'top', 'jeans', 'trousers', 'dress', 'jacket', 'shoes'];
const COLORS = ['white', 'black', 'navy', 'blue', 'red', 'grey', 'beige', 'maroon', 'green', 'pink'];

const colorDot = {
  white: '#FFFFFF', black: '#1C1C1E', navy: '#000080', blue: '#2B58A1',
  red: '#A12B2B', grey: '#808080', beige: '#F5F5DC', maroon: '#800000',
  green: '#2E7D32', pink: '#E91E8C'
};

const Wardrobe = ({ user, setUserData, email }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('shirt');
  const [color, setColor] = useState('white');

  const addClothing = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newItem = {
      id: Date.now(),
      name: name.trim(),
      category,
      color
    };

    setUserData(prev => ({
      ...prev,
      [email]: {
        ...prev[email],
        clothes: [...(prev[email]?.clothes || []), newItem]
      }
    }));

    setName('');
  };

  const removeItem = (id) => {
    setUserData(prev => ({
      ...prev,
      [email]: {
        ...prev[email],
        clothes: prev[email].clothes.filter(c => c.id !== id)
      }
    }));
  };

  const clothes = user?.clothes || [];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-10 text-left">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">My Wardrobe</h1>
        <p className="text-gray-500 mt-2">Manage your collection and organize your personal style.</p>
      </header>

      {/* Optimized Action Bar */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2 mb-12">
        <form onSubmit={addClothing} className="flex flex-col md:flex-row items-center gap-2">
          
          {/* Name Input */}
          <div className="flex-grow flex items-center bg-gray-50 rounded-xl px-4 py-3 w-full">
            <Package size={18} className="text-gray-400 mr-3" />
            <input
              type="text"
              className="bg-transparent w-full outline-none text-sm text-gray-700"
              placeholder="e.g. Vintage White Oxford"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Category Select */}
          <div className="relative w-full md:w-48">
            <div className="flex items-center bg-gray-50 rounded-xl px-4 py-3 cursor-pointer">
              <Layers size={18} className="text-gray-400 mr-3" />
              <select 
                className="bg-transparent w-full outline-none text-sm text-gray-700 appearance-none cursor-pointer"
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
              >
                {CATEGORIES.map(c => (
                  <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
                ))}
              </select>
              <ChevronDown size={14} className="text-gray-400 ml-auto" />
            </div>
          </div>

          {/* Color Select */}
          <div className="relative w-full md:w-48">
            <div className="flex items-center bg-gray-50 rounded-xl px-4 py-3 cursor-pointer">
              <Palette size={18} className="text-gray-400 mr-3" />
              <select 
                className="bg-transparent w-full outline-none text-sm text-gray-700 appearance-none cursor-pointer"
                value={color} 
                onChange={(e) => setColor(e.target.value)}
              >
                {COLORS.map(c => (
                  <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
                ))}
              </select>
              <ChevronDown size={14} className="text-gray-400 ml-auto" />
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full md:w-auto bg-gray-900 hover:bg-black text-white text-sm font-semibold px-8 py-3 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <Plus size={18} /> Add Item
          </button>
        </form>
      </div>

      {/* Grid Display */}
      {clothes.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32 border-2 border-dashed border-gray-200 rounded-[32px]">
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
            <Package size={32} className="text-gray-300" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Your wardrobe is empty</h3>
          <p className="text-gray-500 text-sm mt-1">Add your first piece above to see it in your digital closet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clothes.map(item => (
            <div key={item.id} className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:shadow-gray-200/50 transition-all relative">
              <div 
                className="w-10 h-10 rounded-full mb-4 border border-gray-100 shadow-sm"
                style={{ background: colorDot[item.color] || '#ccc' }} 
              />
              <h4 className="font-bold text-gray-900 truncate">{item.name}</h4>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">{item.category} • {item.color}</p>
              
              <button
                onClick={() => removeItem(item.id)}
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 p-2 text-gray-300 hover:text-red-500 transition-all"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wardrobe;