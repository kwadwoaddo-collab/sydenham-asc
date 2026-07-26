"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";
import { auth, db } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

interface Booking {
  id: string;
  parentName?: string;
  childName?: string;
  phone?: string;
  email?: string;
  notes?: string;
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

  useEffect(() => {
    if (user) {
      const fetchBookings = async () => {
        try {
          // Attempt to order by createdAt if available, otherwise just fetch
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
          // Fallback if index fails
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
      fetchBookings();
    }
  }, [user]);

  const handleSignOut = async () => {
    await signOut(auth);
  };

  if (loading || (!user && !loading)) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-[#0A0A0A]">
        <p className="text-white/60">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-[#0A0A0A] text-white">
      {/* Background Orbs for Premium Apple-grade Aesthetic */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-600/30 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-purple-600/30 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-6 py-12" style={{ maxWidth: "1400px" }}>
        <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
          <div>
            <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase">Admin Portal</span>
            <h1 className="text-4xl font-semibold tracking-tight mt-1 text-white">Bookings Dashboard</h1>
          </div>
          <button onClick={handleSignOut} className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-2.5 rounded-full font-medium transition-all duration-300">
            Sign Out
          </button>
        </div>

        <div className="glass-panel rounded-[32px] p-8 overflow-hidden">
          {fetching ? (
            <div className="flex justify-center items-center py-20">
              <p className="text-white/60 text-lg">Loading bookings...</p>
            </div>
          ) : (
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-white/50 text-sm tracking-wider uppercase">
                    <th className="pb-4 font-medium px-4">Parent Name</th>
                    <th className="pb-4 font-medium px-4">Child Name</th>
                    <th className="pb-4 font-medium px-4">Phone</th>
                    <th className="pb-4 font-medium px-4">Email</th>
                    <th className="pb-4 font-medium px-4">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {bookings.length > 0 ? (
                    bookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-white/5 transition-colors group">
                        <td className="py-4 px-4 whitespace-nowrap">{booking.parentName || "-"}</td>
                        <td className="py-4 px-4 whitespace-nowrap">{booking.childName || "-"}</td>
                        <td className="py-4 px-4 whitespace-nowrap">{booking.phone || "-"}</td>
                        <td className="py-4 px-4 whitespace-nowrap">{booking.email || "-"}</td>
                        <td className="py-4 px-4 min-w-[300px] text-white/80">{booking.notes || "-"}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="text-center py-16 text-white/60">
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
    </div>
  );
}
