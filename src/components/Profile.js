import React from 'react';
import { useState, useEffect } from "react";

export const Profile = () => {
    const [mail, setMail] = useState('');

    const getData = () => {
        return localStorage.getItem('mail');
    }

    useEffect(() => {
        setMail(getData());
    }, []);


    return (
        <div>
            <h2>{mail}</h2>

        </div>
    )
}
