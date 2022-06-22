const API_URL = "http://localhost:8080";

export default function SignUpAuth({ name, surname, username, email, password, city }) {
  return fetch(`${API_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      surname,
      username,
      email,
      password,
      city,
      roles: {
        id:2,
        name:"USER"
      }
    }
    )

  }).then(res => {
    if (res.status!== 201) throw new Error("ERROOORRR")
    return res.json()


  }).then(res => console.log(res));
}