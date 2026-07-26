export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-layout-wrapper" style={{ position: 'relative', zIndex: 100, backgroundColor: '#0A0A0A', minHeight: '100vh' }}>
      {children}
    </div>
  );
}
