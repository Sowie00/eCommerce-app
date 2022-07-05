import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzNkZDVhMzMzMWY4MDhjNjhjODAzZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzAwMzQzNCwiZXhwIjoxNjU5NTk1NDM0fQ.Ip_BS8JLEFQzNhAECzO5u_P-TRTYvP1jfITfpBA2h7w";

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})