export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-layout-wrapper" style={{ minHeight: '100vh', background: 'var(--bg-soft)' }}>
      {children}
    </div>
  );
}
