import React from 'react';
import { Shirt, Footprints, Layers, Trash2, Scissors } from 'lucide-react';
import { useWardrobe } from '../context/WardrobeContext';

const Icons = {
  Shirt: <Shirt size={20} />,
  Shoes: <Footprints size={20} />,
  Top: <Layers size={20} />,
  Jacket: <Scissors size={20} />
};

export default function WardrobeGrid() {
  const { items, removeItem } = useWardrobe();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {items.map(item => (
        <div key={item.id} className="group relative bg-white p-6 rounded-3xl border border-slate-100 hover:border-slate-300 transition-all text-center">
          <button 
            onClick={() => removeItem(item.id)}
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 text-slate-300 hover:text-red-400 transition"
          >
            <Trash2 size={16} />
          </button>
          <div className="bg-slate-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
            {Icons[item.category] || <Shirt size={20} />}
          </div>
          <h3 className="text-sm font-medium">{item.name}</h3>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="w-3 h-3 rounded-full border border-black/5" style={{ backgroundColor: item.color }} />
            <span className="text-[10px] uppercase tracking-tighter text-slate-400">{item.category}</span>
          </div>
        </div>
      ))}
    </div>
  );
}