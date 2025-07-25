import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "../api/supabaseClient.js"; // Adjust the import path as necessary

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext); // ✅ Add this if not already present


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setUser(session?.user || null);
      if (session?.user) {
        checkAdmin(session.user.email); // 👈 Important
      } else {
        setRole(null);
      }

      setLoading(false);
    };

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
      if (session?.user) {
        checkAdmin(session.user.email); // 👈 Again
      } else {
        setRole(null);
      }
    });

    getSession();
    return () => subscription.unsubscribe();
  }, []);

  const checkAdmin = async (email) => {
    const { data, error } = await supabase
      .from("profiles") // ✅ Make sure table name is correct!
      .select("*")
      .eq("email", email);

    if (error) {
      console.error("Error checking admin:", error);
      setRole(null);
    } else {
      setRole(data.length > 0 ? "admin" : "user"); // ✅ Set role correctly
    }
  };
    const logout = async () => {
        await supabase.auth.signOut();
        setUser(null);
        setRole(null);
    };
  

  return (
    <AuthContext.Provider value={{ user, role, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
