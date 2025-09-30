// "use client";

//      import { createContext, useContext, useState, useEffect, ReactNode } from "react";
//      import api from "./axios";

//      interface AuthContextType {
//        user: { id: number; email: string; role: string } | null;
//        login: (token: string) => void;
//        logout: () => void;
//        isAuthenticated: boolean;
//      }

//      const AuthContext = createContext<AuthContextType | undefined>(undefined);

//      export function AuthProvider({ children }: { children: ReactNode }) {
//        const [user, setUser] = useState<AuthContextType["user"]>(null);

//        // On mount, check for token and fetch user data
//        useEffect(() => {
//          const token = localStorage.getItem("token");
//          if (token) {
//            api
//              .get("/users/me") // Assume backend has GET /users/me to return user data
//              .then((response) => {
//                setUser(response.data); // Expect { id, email, role }
//              })
//              .catch(() => {
//                localStorage.removeItem("token");
//                setUser(null);
//              });
//          }
//        }, []);

//        const login = (token: string) => {
//          localStorage.setItem("token", token);
//          api.get("/users/me").then((response) => {
//            setUser(response.data);
//          });
//        };

//        const logout = () => {
//          localStorage.removeItem("token");
//          setUser(null);
//        };

//        return (
//          <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
//            {children}
//          </AuthContext.Provider>
//        );
//      }

//      export function useAuth() {
//        const context = useContext(AuthContext);
//        if (!context) {
//          throw new Error("useAuth must be used within an AuthProvider");
//        }
//        return context;
//      }