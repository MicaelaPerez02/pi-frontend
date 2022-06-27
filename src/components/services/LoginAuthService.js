const API_URL = "http://localhost:8080";
export default function LoginAuthService({ username, password }) {
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
    if (res.status !== 200) {
      throw new Error("Lo sentimos, no pudimos iniciar sesión. Intentelo más tarde");
    }
    return res.json();
  }).then(res => {
    const { jwt } = res;
    return jwt;
  });
}



