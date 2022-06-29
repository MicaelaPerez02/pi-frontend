const API_URL = "http://localhost:8080";

export default function FeaturesPost({ air_conditioning, wi_fi, heating, parking, gym }) {
    const authToken = JSON.parse(localStorage.getItem("user"));

    return fetch(`http://localhost:8080/features/addFeature`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${authToken}`,
            "content-type": "application/json",
        },
        body: JSON.stringify({
            air_conditioning,
            wi_fi,
            heating,
            parking,
            gym
        }),
    })
        .then((res) => {
            if (res.status !== 201)
                throw new Error(
                    "Lo sentimos, la feature no pudo ser registrada. Intentelo más tarde" +
                    res.status,
                );
            return res.json();
        })
        .then((res) => console.log(res));
}