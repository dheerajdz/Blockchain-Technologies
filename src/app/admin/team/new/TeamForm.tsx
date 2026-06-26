'use client';

export default function TeamForm() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const res = await fetch('/api/team', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      window.location.href = '/admin/team';
    } else {
      const json = await res.json().catch(() => ({ message: 'Error' }));
      alert(json.message || 'Failed to add member');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm text-[#A1A1AA] mb-2">Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-[#2A468B]/50 focus:ring-1 focus:ring-[#2A468B]/30 transition-all"
            placeholder="e.g. John Doe"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm text-[#A1A1AA] mb-2">Role *</label>
          <input
            id="role"
            name="role"
            type="text"
            required
            className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-[#2A468B]/50 focus:ring-1 focus:ring-[#2A468B]/30 transition-all"
            placeholder="e.g. Lead Developer"
          />
        </div>
      </div>

      <div>
        <label htmlFor="bio" className="block text-sm text-[#A1A1AA] mb-2">Bio</label>
        <textarea
          id="bio"
          name="bio"
          rows={4}
          className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-[#2A468B]/50 focus:ring-1 focus:ring-[#2A468B]/30 transition-all resize-none"
          placeholder="Short bio..."
        />
      </div>

      <div>
        <label htmlFor="order" className="block text-sm text-[#A1A1AA] mb-2">Display Order</label>
        <input
          id="order"
          name="order"
          type="number"
          defaultValue={0}
          className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-[#2A468B]/50 focus:ring-1 focus:ring-[#2A468B]/30 transition-all"
        />
      </div>

      <div className="pt-2 flex items-center gap-3">
        <button type="submit" className="btn btn-primary">
          Add Member
        </button>
        <a href="/admin/team" className="btn btn-outline text-sm py-2.5 px-5">
          Cancel
        </a>
      </div>
    </form>
  );
}
