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
      role: "USER"
    }
    )

  }).then(res => {
    if (!res.ok) throw new Error("Response is not ok")
    return res.json()


  }).then(res => console.log(res));
}