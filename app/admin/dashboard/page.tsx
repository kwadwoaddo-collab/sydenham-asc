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
  status?: string;
  createdAt?: any;
}

export default function AdminDashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [fetching, setFetching] = useState(true);

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
        
        <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
          <div>
            <div className="eyebrow">Admin Portal</div>
            <h1 className="text-4xl mt-2">Bookings Dashboard</h1>
          </div>
          <button onClick={handleSignOut} className="btn btn-outline" style={{ padding: '10px 24px', fontSize: '0.95rem' }}>
            Sign Out
          </button>
        </div>

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
                  <th>Notes</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.length > 0 ? (
                  bookings.map((booking) => (
                    <tr key={booking.id}>
                      <td>{booking.parentName || "-"}</td>
                      <td>{booking.childName || "-"}</td>
                      <td>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          <span>{booking.phone || "-"}</span>
                          <span style={{ fontSize: '0.85rem', color: 'var(--ink-soft)' }}>{booking.email || "-"}</span>
                        </div>
                      </td>
                      <td style={{ maxWidth: '300px', whiteSpace: 'normal', fontSize: '0.9rem', lineHeight: '1.4' }}>{booking.notes || "-"}</td>
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
                    <td colSpan={6} style={{ textAlign: 'center', padding: '40px', color: 'var(--ink-soft)' }}>
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
