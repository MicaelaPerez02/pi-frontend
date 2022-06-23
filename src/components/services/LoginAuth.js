
const API_URL = "http://3.133.114.51:8086";
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
    if (!res.ok) throw new Error("Response is not ok");
    return res.json();
  }).then(res => {
    const { jwt } = res;
    return jwt;
  });
}



