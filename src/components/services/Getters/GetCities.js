import useFetch from "../../../hooks/useFetch";

function GetCities() {
    const { data, isLoaded } = useFetch(`/cities/allCities`);

    const ids = data.map(id => {
        return id.id;
    })

    const maxId = Math.max(...ids);
    const maxIdPlus = maxId + 1;
    return (
        localStorage.setItem('maxIdCities', maxIdPlus)
    )
}

export default GetCities;