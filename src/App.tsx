import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import "./App.css";

type User = {
  id: number;
  FirstNameLastName: string;
  Email: string;
  JobTitle: string;
  Phone: string;
  Company: string;
};

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const fetchUsers = async (pageNumber: number) => {
    try {
      const response = await fetch(
        `https://give-me-users-forever.vercel.app/api/users/${pageNumber}/next`
      );
      const data = await response.json();
      setUsers(data.users);
      // Assuming each page has 10 users
      // setTotalPages(Math.ceil(data.length / 10));
    } catch (error) {
      console.error(error);
    }
  };
  // console.log(users);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <div>
        <div>
          <h1>
            Pagination
          </h1>
        </div>
        <hr />
        <table className="table_container">
          <thead>
            <tr>
              <th>Name</th>
              <th>JobTitle</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.FirstNameLastName}</td>
                <td>{user.JobTitle}</td>
                <td>{user.Email}</td>
                <td>{user.Phone}</td>
                <td>{user.Company}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-10 ">
          <Pagination
            itemsPerPage={itemsPerPage}
            totalUsers={100}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
}
