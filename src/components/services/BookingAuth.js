
const API_URL = "http://3.133.114.51:8086";

const jwt= "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVc2VyIiwiZXhwIjoxNjU2MDAyMzg5LCJpYXQiOjE2NTYwMDE3ODl9.thHYB3RBI_68_kdOHv0vzBLyJJJ9Y3YPo6hfu2RCc8o"
export default function RegisterUser({ start_time, start_date, finish_date, products, users }) {
  return fetch(`${API_URL}/bookings/addBooking`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization : "Bearer" + jwt
      
    
    },
    body: JSON.stringify({
      
        start_time,
        start_date,
        finish_date,
        products: {
            id: 2
        },
        users: {
            id: 4
        }
    }
    
    )

  }).then(res => {
    if (!res.ok) throw new Error("Lamentablemente no ha podido reservarse. Por favor intente más tarde");
    return res.json()
  }).then(res => {
    console.log(res);
  })
}