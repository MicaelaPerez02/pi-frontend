
const API_URL = "http://localhost:8080";
export default function LoginAuth({ username, password }) {
  return fetch(`${API_URL}/authenticate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username,
      password
    })
  }).then(res => {
    if (res.status !== 201) throw new Error("Lamentablemente no ha podido iniciar sesión. Por favor intente más tarde");
    console.log(res.status);
    return res.json();
  }).then(res => {
    const { jwt } = res;
    return jwt;
  });
}



