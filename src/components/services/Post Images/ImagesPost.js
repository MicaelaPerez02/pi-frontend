const API_URL = "http://localhost:8080";

export default function ImagesPost({ title, url, products }) {
    const authToken = JSON.parse(localStorage.getItem("user"));

    return fetch(`http://localhost:8080/images/addImage`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${authToken}`,
            "content-type": "application/json",
        },
        body: JSON.stringify({
            title,
            url,
            products
        }),
    })
        .then((res) => {
            if (res.status !== 200)
                throw new Error(
                    "Lo sentimos, la imagen no pudo ser registrada. Intentelo más tarde" +
                    res.status,
                );
            return res.json();
        })
        .then((res) => console.log(res));
}