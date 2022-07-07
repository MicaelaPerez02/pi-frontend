export default function ImagesPost({ title, url, products }) {
    const authToken = localStorage.getItem("user");

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
            if (res.status !== 201)
                throw new Error(
                    "Lo sentimos, la imagen no pudo ser registrada. Intentelo más tarde" +
                    res.status,
                );
            return res.json();
        })
        .then((res) => console.log(res));
}