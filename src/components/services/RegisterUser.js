const API_URL = "http://localhost:8080";
export default function RegisterUser({ name, surname, username, email, password, city, roles }) {
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
      roles
    }
    )

  }).then(res => {
    if (res.status !== 201) throw new Error("Lamentablemente no ha podido registrarse. Por favor intente más tarde");
    return res.json()
  }).then(res => {
    const { jwt } = res
    return jwt
  })
}