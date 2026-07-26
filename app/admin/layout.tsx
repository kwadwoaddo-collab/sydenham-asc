export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-layout-wrapper" style={{ position: 'relative', zIndex: 100, backgroundColor: '#0A0A0A', minHeight: '100vh', color: '#fff' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .admin-layout-wrapper * {
          font-family: system-ui, -apple-system, sans-serif;
        }
        .admin-layout-wrapper h1, 
        .admin-layout-wrapper h2, 
        .admin-layout-wrapper h3,
        .admin-layout-wrapper span,
        .admin-layout-wrapper p,
        .admin-layout-wrapper th,
        .admin-layout-wrapper td {
          color: #ffffff !important;
        }
        .admin-layout-wrapper th {
          color: rgba(255, 255, 255, 0.5) !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
        }
        .admin-layout-wrapper td {
          border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
        }
        .admin-layout-wrapper table {
          background: transparent !important;
          border: none !important;
        }
        .admin-layout-wrapper tr:hover td {
          background: rgba(255, 255, 255, 0.05) !important;
        }
        .admin-layout-wrapper .glass-panel {
          background: rgba(255, 255, 255, 0.03) !important;
          backdrop-filter: blur(24px) !important;
          -webkit-backdrop-filter: blur(24px) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5) !important;
        }
      `}} />
      {children}
    </div>
  );
}
