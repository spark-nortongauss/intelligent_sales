import Link from 'next/link';

const links = [
  { href: '/dashboard', label: 'Home' },
  { href: '/sales/reviews', label: 'Sales > Reviews' },
  { href: '/sales/rom/new', label: 'Sales > ROM Generator > Create New' },
  { href: '/sales/rom/search', label: 'Sales > ROM Generator > Search ROM' },
  { href: '/sales/rom/update-item', label: 'Sales > ROM Generator > Update Item' },
  { href: '/sales/leads', label: 'Sales > Lead Generator' }
];

export function Sidebar() {
  return (
    <aside className="w-80 bg-navy text-white min-h-screen p-6">
      <h1 className="text-xl font-bold mb-6">Intelligent Sales</h1>
      <nav className="space-y-2">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="block rounded-lg px-3 py-2 hover:bg-white/10">
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
