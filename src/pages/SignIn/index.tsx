import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

import '../../styles/Global.css'

function SignIn() {
    const [ authType, setAuthType ] = useState('signIn');
    const { authenticate, login, createCredentials } = useAuth();
    const { register, handleSubmit } = useForm();

    const options = [
        { value: 'signIn', text: 'sign in'},
        { value: 'signUp', text: 'sign up'}
    ]

    const onSubmit = async (data: any) => {
        return authType === 'signIn' ? login(data) : createCredentials(data);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register('email')} />
                <input type="password" {...register('password')} />
                <select onChange={e => setAuthType(e.target.value)}>
                    {options.map(option => (
                        <option label={option.text} value={option.value}/>
                    ))}
                </select>
                <input type="submit" value={authType} />
            </form>

            <p> Is Authenticated: <span> {`${authenticate}`} </span></p>
        </>
    )
}

export default SignIn
