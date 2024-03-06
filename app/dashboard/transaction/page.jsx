
"use client"
import React, { useEffect, useState } from 'react';
import styles from '../users/users.module.css';
import DataTable from "react-data-table-component";
import axios from "axios";
import EditUser from '@/app/components/edit';
let baseURL = 'https://dummyjson.com/users';

const UsersPage = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axios.get(baseURL);
                const userData = Object.values(response.data)[0];
                setUsers(userData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        getUsers();
    }, []);

    if (users.length < 1) {
        return (
            <div>
                <p>No data Found..!</p>
            </div>
        );
    }

    const columns = [
        {
            name: "Name",
            selector: (row) => (
                <>
                    <img src={row.image} alt="" width={40} height={40} className={styles.userImage} />
                    {row.firstName}
                </>
            ),
            sortable: true,
        },
        {
            name: "Email",
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: "IP",
            selector: (row) => row.ip,
            sortable: true,
        },
        {
            name: "Phone",
            selector: (row) => row.phone,
            sortable: true,
        },
        {
            name: "Username",
            selector: (row) => row.username,
            sortable: true,
        },
        {
            name: "Action",
            cell: (row) => <EditUser id={row.id} />,
            sortable: false,
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.top}></div>
            <DataTable
                title="Users List"
                columns={columns}
                data={users}
                highlightOnHover
                selectableRows
                selectableRowsHighlight
                pagination
            />
        </div>
    );
};

export default UsersPage;
