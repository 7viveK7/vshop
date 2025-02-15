// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { supabase } from '@/lib/supabase';
// import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import { AuthContextType, User } from '@/types';

// const AuthContext = createContext<AuthContextType>({} as AuthContextType);

// export const useAuth = () => useContext(AuthContext);

// interface AuthProviderProps {
//   children: React.ReactNode;
// }

// export function AuthProvider({ children }: AuthProviderProps) {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   // useEffect(() => {
//   //   supabase.auth.getSession().then(({ data: { session } }) => {
//   //     setUser(session?.user ?? null);
//   //     setLoading(false);
//   //   });

//   //   const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
//   //     setUser(session?.user ?? null);
//   //     setLoading(false);
//   //   });

//   //   return () => subscription.unsubscribe();
//   // }, []);

//   const signUp = async (email: string, password: string) => {
//     try {
//       const { error } = await supabase.auth.signUp({
//         email,
//         password,
//       });

//       if (error) throw error;
      
//       toast.success('Registration successful! Please log in.');
//       navigate('/login');
//     } catch (error: any) {
//       toast.error(error.message);
//     }
//   };

//   const signIn = async (email: string, password: string) => {
//     try {
//       const { error } = await supabase.auth.signInWithPassword({
//         email,
//         password,
//       });

//       if (error) throw error;
      
//       toast.success('Welcome back!');
//       navigate('/');
//     } catch (error: any) {
//       toast.error(error.message);
//     }
//   };

//   const signOut = async () => {
//     try {
//       const { error } = await supabase.auth.signOut();
//       if (error) throw error;
      
//       toast.success('Logged out successfully');
//       navigate('/login');
//     } catch (error: any) {
//       toast.error(error.message);
//     }
//   };

//   const value = {
//     user,
//     loading,
//     signUp,
//     signIn,
//     signOut,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }