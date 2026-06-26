'use client';

import { Trash2 } from 'lucide-react';

export default function DeleteButton({ id, resource }: { id: string; resource: string }) {
  async function handleDelete(e: React.MouseEvent) {
    if (!confirm('Are you sure you want to delete this item?')) {
      return;
    }
    
    try {
      const res = await fetch(`/api/${resource}/${id}`, {
        method: 'DELETE',
      });
      
      if (res.ok) {
        window.location.reload();
      } else {
        const data = await res.json().catch(() => ({ message: 'Error' }));
        alert(data.message || 'Failed to delete');
      }
    } catch {
      alert('Failed to delete');
    }
  }

  return (
    <button
      type="button"
      className="p-2 rounded-lg text-[#71717A] hover:text-red-400 hover:bg-red-500/5 transition-all"
      onClick={handleDelete}
    >
      <Trash2 className="h-4 w-4" strokeWidth={1.5} />
    </button>
  );
}
