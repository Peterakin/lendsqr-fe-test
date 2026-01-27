import { Database, File, ListFilter, MoreVertical, Users2 } from "lucide-react";
import "./Users.scss"

const Users = () => {
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
                        <tr>
                        <td>Lendsqr</td>
                        <td>Adedeji</td>
                        <td>adedeji@lendsqr.com</td>
                        <td>08078903721</td>
                        <td>May 15, 2020 10:00 AM</td>
                        <td><span className={`status ${"Active"}`}>Active</span></td>
                        <td className="action">
                            <MoreVertical size={16}/>
                        </td>
                    </tr>
                    </tbody>
                    <tbody>
                        <tr>
                        <td>Lendsqr</td>
                        <td>Adedeji</td>
                        <td>adedeji@lendsqr.com</td>
                        <td>08078903721</td>
                        <td>May 15, 2020 10:00 AM</td>
                        <td><span className={`status ${"Inactive"}`}>Inactive</span></td>
                        <td className="action">
                            <MoreVertical size={16}/>
                        </td>
                    </tr>
                    </tbody>
                    <tbody>
                        <tr>
                        <td>Lendsqr</td>
                        <td>Adedeji</td>
                        <td>adedeji@lendsqr.com</td>
                        <td>08078903721</td>
                        <td>May 15, 2020 10:00 AM</td>
                        <td><span className={`status ${"Pending"}`}>Pending</span></td>
                        <td className="action">
                            <MoreVertical size={16}/>
                        </td>
                    </tr>
                    </tbody>
                    <tbody>
                        <tr>
                        <td>Lendsqr</td>
                        <td>Adedeji</td>
                        <td>adedeji@lendsqr.com</td>
                        <td>08078903721</td>
                        <td>May 15, 2020 10:00 AM</td>
                        <td><span className={`status ${"Blacklisted"}`}>Blacklisted</span></td>
                        <td className="action">
                            <MoreVertical size={16}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users;