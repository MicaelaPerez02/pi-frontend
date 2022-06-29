const API_URL = "http://localhost:8080";

export default function CityPost({
    name

}) {
    const authToken = JSON.parse(localStorage.getItem("user"));

    return fetch(`http://localhost:8080/cities/addCity`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${authToken}`,
            "content-type": "application/json",
        },
        body: JSON.stringify({
                name,
                country: "Argentina"
            
        }),
    })
        .then((res) => {
            if (res.status !== 200)
                throw new Error(
                    "Lo sentimos, la ciudad no pudo ser registrada. Intentelo más tarde" +
                    res.status,
                    
                );
            return res.json();
        })
        .then((res) => console.log(res));
}