import { Database, File, ListFilter, MoreVertical, Users2 } from "lucide-react";
import "./UsersPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import type { User, UserResponse } from "../../types/user";

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get<UserResponse>(
          "https://mocki.io/v1/4f7dfa1c-b8a8-4501-ac33-87523f68808e"
        );

        setUsers(res.data.users);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

    if (loading) return <p>Loading...</p>;
    
    return (
        <div className="users__page">
            <h2>Users</h2>

            <div className="cards">
                <div className="card">
                    <div className="card__icon"><Users2 size={16}/></div>
                    <p className="card__title">USERS</p>
                    <p className="card__value">2,453</p>
                </div>
                <div className="card">
                    <div className="card__icon1"><Users2 size={16}/></div>
                    <p className="card__title">ACTIVE USERS</p>
                    <p className="card__value">2,453</p>
                </div>
                <div className="card">
                    <div className="card__icon2"><File size={16}/></div>
                    <p className="card__title">USERS WITH LOANS</p>
                    <p className="card__value">12,453</p>
                </div>
                <div className="card">
                    <div className="card__icon3"><Database size={16}/></div>
                    <p className="card__title">USERS WITH SAVINGS</p>
                    <p className="card__value">102,453</p>
                </div>
            </div>

            <div className="users__table__wrapper">
                <table className="users__table">
                    <thead>
                        <tr>
                        <th>
                            <div className="user__table__header">
                                <span>Oraganization</span>
                                <ListFilter size={14}/>
                            </div>
                        </th>
                         <th>
                            <div className="user__table__header">
                                <span>Username</span>
                                <ListFilter size={14}/>
                            </div>
                        </th>
                        <th>
                           <div className="user__table__header">
                                <span>Email</span>
                                <ListFilter size={14}/>
                            </div> 
                        </th>
                        <th>
                            <div className="user__table__header">
                                <span>Phone</span>
                                <ListFilter size={14}/>
                            </div>
                        </th>
                        <th>
                            <div className="user__table__header">
                                <span>Date Joined</span>
                                <ListFilter size={14}/>
                            </div>
                        </th>
                        <th>
                            <div className="user__table__header">
                                <span>Status</span>
                                <ListFilter size={14}/>
                            </div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.organization}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{new Date(user.dateJoined).toLocaleString()}</td>
                                <td>
                                    <span className={`status ${user.status}`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="action">
                                    <MoreVertical size={16} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UsersPage;