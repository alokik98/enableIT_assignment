import { useState, useEffect } from "react";

type Props = {
    pageNumber: number
}

export function useFetchUsers({pageNumber} : Props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      fetch(`https://give-me-users-forever.vercel.app/api/users/${pageNumber}/next`)
        .then((res) => res.json())
        .then((data) => setUsers(data));
    } catch (error) {
      console.log(error);
    }
  });

  return users;
}
