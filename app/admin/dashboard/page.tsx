"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";
import { auth, db } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { collection, getDocs, orderBy, query, doc, deleteDoc, updateDoc } from "firebase/firestore";

interface Booking {
  id: string;
  parentName?: string;
  childName?: string;
  phone?: string;
  email?: string;
  notes?: string;
  adminNotes?: string;
  status?: string;
  createdAt?: any;
}

export default function AdminDashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [fetching, setFetching] = useState(true);

  // New states for features
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  
  // Staff Notes editing state
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [editingNoteText, setEditingNoteText] = useState("");

  useEffect(() => {
    if (!loading && !user) {
      router.push("/admin");
    }
  }, [user, loading, router]);

  const fetchBookings = async () => {
    if (!user) return;
    try {
      let q = collection(db, "bookings");
      try {
         q = query(collection(db, "bookings"), orderBy("createdAt", "desc")) as any;
      } catch(e) {}
      
      const snapshot = await getDocs(q);
      const data: Booking[] = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() } as Booking);
      });
      setBookings(data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      try {
        const snapshot = await getDocs(collection(db, "bookings"));
        const data: Booking[] = [];
        snapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() } as Booking);
        });
        setBookings(data);
      } catch (e) {
        console.error(e);
      }
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [user]);

  const handleSignOut = async () => {
    await signOut(auth);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this booking?")) {
      try {
        await deleteDoc(doc(db, "bookings", id));
        setBookings(bookings.filter(b => b.id !== id));
      } catch (error) {
        console.error("Error deleting document:", error);
        alert("Failed to delete booking.");
      }
    }
  };

  const handleToggleStatus = async (booking: Booking) => {
    const newStatus = booking.status === "contacted" ? "new" : "contacted";
    try {
      await updateDoc(doc(db, "bookings", booking.id), { status: newStatus });
      setBookings(bookings.map(b => b.id === booking.id ? { ...b, status: newStatus } : b));
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status.");
    }
  };

  const handleSaveNote = async (id: string) => {
    try {
      await updateDoc(doc(db, "bookings", id), { adminNotes: editingNoteText });
      setBookings(bookings.map(b => b.id === id ? { ...b, adminNotes: editingNoteText } : b));
      setEditingNoteId(null);
    } catch (error) {
      console.error("Error saving note:", error);
      alert("Failed to save note.");
    }
  };

  const exportToCSV = () => {
    const headers = ["Parent Name", "Child Name", "Phone", "Email", "Parent Notes", "Staff Notes", "Status", "Date"];
    const csvRows = [headers.join(",")];

    filteredBookings.forEach(booking => {
      const date = booking.createdAt ? new Date(booking.createdAt.seconds * 1000).toLocaleDateString() : "";
      const row = [
        `"${booking.parentName || ""}"`,
        `"${booking.childName || ""}"`,
        `"${booking.phone || ""}"`,
        `"${booking.email || ""}"`,
        `"${(booking.notes || "").replace(/"/g, '""')}"`,
        `"${(booking.adminNotes || "").replace(/"/g, '""')}"`,
        `"${booking.status === "contacted" ? "Contacted" : "New"}"`,
        `"${date}"`
      ];
      csvRows.push(row.join(","));
    });

    const csvContent = "data:text/csv;charset=utf-8," + csvRows.join("\\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `bookings_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Derived State
  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = (booking.parentName || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (booking.childName || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (booking.email || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (booking.phone || "").includes(searchQuery);
    const matchesStatus = filterStatus === "all" ? true :
                          filterStatus === "new" ? booking.status !== "contacted" :
                          booking.status === "contacted";
    return matchesSearch && matchesStatus;
  });

  const totalBookings = bookings.length;
  const contactedBookings = bookings.filter(b => b.status === "contacted").length;
  const newBookings = totalBookings - contactedBookings;

  if (loading || (!user && !loading)) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-[#FAFAFA]">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] py-12">
      <div className="container mx-auto px-6" style={{ maxWidth: "1400px" }}>
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <div className="eyebrow">Admin Portal</div>
            <h1 className="text-4xl mt-2">Bookings Dashboard</h1>
          </div>
          <button onClick={handleSignOut} className="btn btn-outline" style={{ padding: '10px 24px', fontSize: '0.95rem' }}>
            Sign Out
          </button>
        </div>

        {/* Analytics Cards */}
        {!fetching && (
          <div className="grid-3 mb-8">
            <div className="card compact">
              <div className="ico blue">📋</div>
              <div>
                <h3>{totalBookings}</h3>
                <p>Total Bookings</p>
              </div>
            </div>
            <div className="card compact" style={{ borderLeft: '4px solid var(--accent-dark)' }}>
              <div className="ico" style={{ background: '#fff4c9', color: 'var(--accent-dark)' }}>⭐</div>
              <div>
                <h3>{newBookings}</h3>
                <p>New (Needs Action)</p>
              </div>
            </div>
            <div className="card compact" style={{ borderLeft: '4px solid var(--green)' }}>
              <div className="ico green">✓</div>
              <div>
                <h3>{contactedBookings}</h3>
                <p>Successfully Contacted</p>
              </div>
            </div>
          </div>
        )}

        {/* Toolbar */}
        {!fetching && (
          <div className="form-card mb-6" style={{ padding: '20px', display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
            <div className="field" style={{ flexGrow: 1, marginBottom: 0 }}>
              <label>Search Bookings</label>
              <input 
                type="text" 
                placeholder="Search by name, email, or phone..." 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{ padding: '10px 14px' }}
              />
            </div>
            <div className="field" style={{ minWidth: '200px', marginBottom: 0 }}>
              <label>Status Filter</label>
              <select 
                value={filterStatus}
                onChange={e => setFilterStatus(e.target.value)}
                style={{ padding: '10px 14px' }}
              >
                <option value="all">All Bookings</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
              </select>
            </div>
            <button onClick={exportToCSV} className="btn btn-navy" style={{ padding: '10px 24px', marginBottom: '2px' }}>
              Download CSV
            </button>
          </div>
        )}

        {fetching ? (
          <div className="flex justify-center items-center py-20">
            <p className="text-gray-500 text-lg">Loading bookings...</p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="price-table">
              <thead>
                <tr>
                  <th>Parent Name</th>
                  <th>Child Name</th>
                  <th>Contact</th>
                  <th>Parent Notes</th>
                  <th>Staff Notes</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.length > 0 ? (
                  filteredBookings.map((booking) => (
                    <tr key={booking.id}>
                      <td>{booking.parentName || "-"}</td>
                      <td>{booking.childName || "-"}</td>
                      <td>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          <span>{booking.phone || "-"}</span>
                          <span style={{ fontSize: '0.85rem', color: 'var(--ink-soft)' }}>{booking.email || "-"}</span>
                        </div>
                      </td>
                      <td style={{ maxWidth: '250px', whiteSpace: 'normal', fontSize: '0.9rem', lineHeight: '1.4' }}>{booking.notes || "-"}</td>
                      <td style={{ maxWidth: '250px', whiteSpace: 'normal', fontSize: '0.9rem', lineHeight: '1.4' }}>
                        {editingNoteId === booking.id ? (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <textarea 
                              value={editingNoteText} 
                              onChange={(e) => setEditingNoteText(e.target.value)}
                              style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid var(--line)', minHeight: '80px', fontSize: '0.9rem' }}
                            />
                            <div style={{ display: 'flex', gap: '8px' }}>
                              <button onClick={() => handleSaveNote(booking.id)} style={{ background: 'var(--green)', color: '#fff', border: 'none', padding: '4px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 600 }}>Save</button>
                              <button onClick={() => setEditingNoteId(null)} style={{ background: 'var(--bg-soft)', color: 'var(--ink-soft)', border: 'none', padding: '4px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 600 }}>Cancel</button>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <p style={{ margin: '0 0 6px 0', minHeight: '20px' }}>{booking.adminNotes || <span style={{ color: 'var(--line)' }}>No notes yet...</span>}</p>
                            <button 
                              onClick={() => { setEditingNoteId(booking.id); setEditingNoteText(booking.adminNotes || ""); }}
                              style={{ background: 'transparent', border: 'none', color: 'var(--navy-2)', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 700, padding: 0 }}
                            >
                              Edit Note ✎
                            </button>
                          </div>
                        )}
                      </td>
                      <td>
                        <button 
                          onClick={() => handleToggleStatus(booking)}
                          className="pill" 
                          style={{ 
                            border: 'none', cursor: 'pointer',
                            background: booking.status === "contacted" ? '#e4f6ec' : '#fff4c9', 
                            color: booking.status === "contacted" ? '#1f8a4c' : 'var(--accent-dark)' 
                          }}
                        >
                          {booking.status === "contacted" ? "Contacted ✓" : "New"}
                        </button>
                      </td>
                      <td>
                        <button 
                          onClick={() => handleDelete(booking.id)}
                          style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem', padding: '6px' }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} style={{ textAlign: 'center', padding: '40px', color: 'var(--ink-soft)' }}>
                      No bookings found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
