import React, { useEffect, useState } from "react";
import '../../styles/Components/Product.css';
import useFavs from "../../hooks/useFavs";
import useUser from "../../hooks/useUser";
import useFetchAuth from '../../hooks/useFetchAuth';

export default function Fav({ id, id2, onDelete }) {
    const [products, setProducts] = useState(id);
    const [userId, setUserId] = useState(localStorage.getItem("userId"));
    const { Favs } = useFavs();
    const { addFav } = useUser();
    const { data } = useFetchAuth(`/favourites/allFavourites`);
    const [isFaved, setIsFaved] = useState("");
    const [isFav, setIsFav] = useState(false);
    const [state, setState] = useState(false);
    const idsFavs = data.map(fav => console.log(fav.id));

    const toggleBtn = (e) => {
        setState(prevState => !prevState);
        e.preventDefault();
    }

    const handleDelete = () => {
        onDelete(id2)
    }

    const authToken = localStorage.getItem("user");

    return (
        <>
        </>
    )

}
