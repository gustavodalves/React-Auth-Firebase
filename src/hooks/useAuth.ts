import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

interface IUser {
    email: string;
    password: string;
}

interface IAuth {
    authenticate: boolean;
    login: ({ email, password }: IUser) => Promise<void>;
    validateToken: (token: string) => Promise<boolean>;
    createCredentials: ({ email, password }: IUser) => Promise<boolean>;
}

const useAuth = (): IAuth => {
    const [authenticate, setAuthenticate] = useState(!!localStorage.getItem('token'));
    const auth = getAuth();

    const createCredentials = async ({ email, password }: IUser) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            return true
        } catch(err) {
            return false
        }
    }

    const login = async ({ email, password }: IUser): Promise<void> => {
        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem('token', user.accessToken);
            setAuthenticate(true)
        } catch(err) {
            setAuthenticate(false)
            console.log(err)
        }
    }

    const validateToken = async (token: string): Promise<boolean> => {
        return true;
    }

    return { authenticate, login, validateToken, createCredentials }
}

export default useAuth;
