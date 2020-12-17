import React from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper';
import Base from '../core/Base';

const AdminDashboard = () => {

    const { user: { name, email, role } } = isAuthenticated();

    const adminLeftSection = () => {
        return (
            <div className="card">
                <h4 className="card-header bg-dark text-white">
                    Admin Navigation
            </h4>
                <ul className="list-group">
                    <li className="list-group-item">

                        <Link to="/admin/create/categories" className="nav-link text-success">Create Categories</Link>
                        <Link to="/admin/create/products" className="nav-link text-success">Create Products </Link>
                        <Link to="/admin/products" className="nav-link text-success">Manage Products</Link>
                        <Link to="/admin/orders" className="nav-link text-success">Manage Orders</Link>

                    </li>
                </ul>
            </div>
        )
    }

    const adminRightSection = () => {
        return (
            <div>
            <h1>Hi Admin</h1>
            </div>
        )
    }


    return (
        <Base className="container bg-success pd-4 " title="Welcome to Admin Area Page" description="Manage all of Products here">

            <div className="row">
                <div className="col-3">
                    {adminLeftSection()}

                </div>
                <div className="col-9">
                    {adminRightSection()}
                </div>
            </div>



        </Base>
    )

}

export default AdminDashboard;