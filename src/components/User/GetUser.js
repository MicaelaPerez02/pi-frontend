import React from 'react';
import useFetchAuth from '../../hooks/useFetchAuth';

function GetUser() {
    const { data, isLoaded } = useFetchAuth(`/users/allUsers`);

    data.map((users) => {
        if (users.email == JSON.parse(localStorage.getItem("username"))) {
            return (
                localStorage.setItem("userId", users.id)
            )
        }
    })

    return (
        <>
        </>
    )
}

export default GetUser;