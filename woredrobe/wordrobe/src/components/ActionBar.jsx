import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useWardrobe } from '../context/WardrobeContext';

export default function ActionBar() {
  const { addItem } = useWardrobe();
  const [form, setForm] = useState({ name: '', category: 'Shirt', color: '#2C3E50' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) return;
    addItem(form);
    setForm({ name: '', category: 'Shirt', color: '#2C3E50' });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 p-6 glass-card rounded-2xl mb-8 items-center justify-center">
      <input 
        type="text" placeholder="Item Name (e.g. Linen Blazer)" 
        className="action-input w-64"
        value={form.name} onChange={e => setForm({...form, name: e.target.value})}
      />
      <select 
        className="action-input"
        value={form.category} onChange={e => setForm({...form, category: e.target.value})}
      >
        {['Shirt', 'Top', 'Jeans', 'Trousers', 'Dress', 'Jacket', 'Shoes'].map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <input 
        type="color" className="w-10 h-10 rounded-full border-none cursor-pointer"
        value={form.color} onChange={e => setForm({...form, color: e.target.value})}
      />
      <button type="submit" className="bg-slate-900 text-white p-3 rounded-full hover:scale-105 transition">
        <Plus size={20} />
      </button>
    </form>
  );
}