"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import styles from '@/app/dashboard/users/users.module.css';
import EditUser from '@/app/components/edit';
import Link from 'next/link';


let baseURL = 'https://dummyjson.com/users';

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axios.get(baseURL);
                const userData = Object.values(response.data)[0];
                setUsers(userData);
                setIsLoading(false);
            } catch (e) {
                console.log('Something Went wrong', e);
                setIsLoading(false);
            }
        };

        getUsers();
    }, []);


    if (isLoading) {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <p>Loading...</p>
            </div>

        );
    }

    if (users.length < 1) {
        return (
            <div>
                <p>We have not found Data...</p>
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
            cell: (row) => <EditUser id={row.id} userData={row} onEdit={() => handleEdit(row.id)} onDelete={() => handleDelete(row.id)} />,
            sortable: false,
        },
    ];

    // const actionsMemo = useMemo(() => <Export onExport={() => downloadCSV(helps)} />, [helps]);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.top}></div>
                <DataTable
                    title="Users List"
                    columns={columns}
                    data={users}
                    highlightOnHover
                    selectableRows
                    selectableRowsHighlight
                    progressPending={isLoading}
                    progressComponent={<h1>My custom Component</h1>}
                    pagination
                />
            </div>
        </>
    );
}

export default UsersPage;