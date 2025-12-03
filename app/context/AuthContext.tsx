"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type AuthUser = { username: string } | null;

type AuthContextType = {
  user: AuthUser;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<{ ok: boolean; message?: string }>;
  logout: () => void;
  register: (username: string, password: string) => Promise<{ ok: boolean; message?: string }>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_KEY = "app_auth_user";
const USERS_KEY = "app_users";

function loadUserFromStorage(): AuthUser {
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

function saveUserToStorage(user: AuthUser) {
  try {
    if (user) localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    else localStorage.removeItem(AUTH_KEY);
  } catch (e) {}
}

function loadUsers(): Record<string, string> {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch (e) {
    return {};
  }
}

function saveUsers(users: Record<string, string>) {
  try {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  } catch (e) {}
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser>(() => {
    // initialize synchronously from localStorage to avoid redirect flash
    try {
      const raw = localStorage.getItem(AUTH_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  });

  useEffect(() => {
    saveUserToStorage(user);
  }, [user]);

  const login = async (username: string, password: string) => {
    const users = loadUsers();
    if (users[username] && users[username] === password) {
      setUser({ username });
      return { ok: true };
    }
    return { ok: false, message: "Invalid username or password" };
  };

  const logout = () => {
    setUser(null);
  };

  const register = async (username: string, password: string) => {
    const users = loadUsers();
    if (users[username]) {
      return { ok: false, message: "User already exists" };
    }
    // password length 1..8
    if (password.length < 1 || password.length > 8) {
      return { ok: false, message: "Password must be between 1 and 8 characters" };
    }
    users[username] = password;
    saveUsers(users);
    setUser({ username });
    return { ok: true };
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
