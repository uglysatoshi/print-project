"use client";
import React, { createContext, useContext, useState } from "react";

interface UserContextType {
    name: string;
    group: string;
    date: string;
    score: number;
    rightScore: number;
    semiScore: number;
    theme1: number;
    theme2: number;
    theme3: number;
    theme4: number;
    theme5: number;
    theme6: number;

    setUserData: (data: { name: string; group: string; date: string; score: number; theme1: number; theme2: number; theme3: number; theme4: number; theme5: number; theme6: number; semiScore: number; rightScore: number;}) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [userData, setUserData] = useState({ name: "", group: "", date: "" , score: 0, theme1: 0, theme2: 0, theme3: 0, theme4: 0, theme5: 0, theme6: 0, semiScore: 0, rightScore: 0 });

    const setUserDataHandler = (data: { name: string; group: string; date: string; score: number; theme1: number; theme2: number; theme3: number; theme4: number; theme5: number; theme6: number; semiScore: number; rightScore: number;}) => {
        setUserData(data);
    };

    return (
        <UserContext.Provider value={{ ...userData, setUserData: setUserDataHandler }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
};
