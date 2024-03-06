
"use client"
import { useEffect, useState } from 'react';
import styles from '../users/users.module.css';

import EditUser from '@/app/components/edit';
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '@/app/ui/dashboard/pagination/Pagination';
import axios from "axios";

let baseURL = 'https://dummyjson.com/users';



const UsersPage = () => {
    const [post, setPost] = useState([]);

    async function getUsers() {
        await axios.get(baseURL).then((response) => {
            const arr = Object.values(response.data);
            let data = arr[0];
            setPost(data);
            console.log(data);
        });
    }



    useEffect(() => {
        getUsers();
    }, []);

    if (post.length < 1) {
        return (
            <>
                <div><p>No data Found..!</p></div>
            </>
        );
    }

    const onEdit = (e) => {
        console.log("Edit Page Hit:", e.target.value);
        let path = '/users/' + e.target.value;
        router.push(path);
    }

    const keyList = [{ id: 'Name' }, { id: 'Email' }, { id: 'Created At' }, { id: 'Phone' }, { id: 'Status' }, { id: 'Action' }];

    return (
        <div className={styles.container}>
            <div className={styles.top}></div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {
                            keyList.map((val, i) => {
                                return (
                                    <td key={i}>{val.id}</td>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {post.map((e) => (

                        <tr key={e.id}>
                            <td><Image
                                src={e.image}
                                alt=""
                                width={40}
                                height={40}
                                className={styles.userImage}
                            /> {e.firstName}</td>
                            <td>{e.email}</td>
                            <td>{e.ip}</td>
                            <td>{e.phone}</td>
                            <td>{e.username}</td>
                            <td>
                                <EditUser id={e.id} />
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
            <Pagination />
        </div>
    );
};

export default UsersPage;
