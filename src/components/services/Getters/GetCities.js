import useFetch from "../../../hooks/useFetch";

function GetCities(props) {
    const { data, isLoaded } = useFetch(`/cities/allCities`);

    const cityList =
        data.map((city, index) => {
            return (
                <option value={city.id} onChange={props.onChange} key={index}>{city.title}</option>
            )
        })

    const ids = data.map(id => {
        return id.id;
    })

    const maxId = Math.max(...ids);
    const maxIdPlus = maxId + 1;

    return (
        <>
            <label className="inputTitleProdGenerator">Ciudades</label>
            <select id="Cities" name="cities" className='selectCreateProduct form_select'>
                <option hidden >Selecciona la ciudad</option>
                <option disabled >Selecciona la ciudad</option>
                {cityList}
                {localStorage.setItem('maxIdCities', maxIdPlus)}
            </select>
        </>
    )
}

export default GetCities;