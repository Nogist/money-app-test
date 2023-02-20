import { createContext, useState } from "react";
import { Email, Password } from './Password';

interface User {
  email: string;
  password: string;
}

interface UserContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export const UserProvider: React.FC <UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({ email: Email, password: Password });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

