import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmU2Y2ZmZTE1NjRmODRmZWNkYmM4YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjY1Mzk3MCwiZXhwIjoxNjU2OTEzMTcwfQ.pPdtm1oJklpACWrCSGOUyrvfvbBqIWVLIYkUQYdg6i4';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
