"use client"
// import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router'
import styles from './SingleUserPage.module.css';
import Image from 'next/image';
import axios from 'axios';
const SingleUserPage = ({ params }) => {

    // const router = useRouter()

    const [userData, setUserData] = useState([]);
    const [message, setMessage] = useState('')
    const [messageStatus, setMessageStatus] = useState('none')
    const [messageBtnStatus, setMessageBtnStatus] = useState('block')

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        firstName: '',
        phone: '',
        image: ''
    });

    const getDataById = async () => {

        const url = `https://dummyjson.com/users/${params.id}`;
        await axios.get(url).then((res) => {
            setUserData(res.data)
            setFormData({
                image: res.data.image,
                username: res.data.username,
                email: res.data.email,
                firstName: res.data.firstName,
                phone: res.data.phone
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    const updateDataById = async () => {
        setMessageBtnStatus('none');
        setMessageStatus('block');
        const url = `https://dummyjson.com/users/${params.id}`;
        await axios.put(url, JSON.stringify(formData), { 'Content-Type': 'application/json' }).then((res) => {
            setMessageBtnStatus('block');
            setMessageStatus('none');
            setMessage('Data updated succssfully..!')
            console.log(res.data)
        }).catch((err) => {
            setMessageBtnStatus('block');
            setMessageStatus('none');
            setMessage('Data updation failed try again..!')
            console.log(err);
        })
    }
    useEffect(() => {
        getDataById();
    }, []);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            // image: res.data.image
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        console.log(e);
        updateDataById();
    };

    console.log("Form Data--->", formData);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.infoContainer}>
                    <div className={styles.imgContainer}>

                        <Image src={formData.image} alt='User Image' width={100} height={100} />
                        {/* <Image src={image} alt='png' fill /> */}
                    </div>
                    {userData && userData.firstName}
                </div>
                <div className={styles.formContainer}>
                    <form action="" onSubmit={handleUpdate} className={styles.form}>
                        <label>UserName</label>
                        <input type="text" name='username' value={formData.username} onChange={handleInputChange} />
                        <label>Email</label>
                        <input type="email" name='email' value={formData.email} onChange={handleInputChange} />
                        <label>Name</label>
                        <input type="text" name='firstName' value={formData.firstName} onChange={handleInputChange} />
                        <label>phone</label>
                        <input type="text" name='phone' value={formData.phone} onChange={handleInputChange} />
                        {/* <label>Address</label>
                        <input type="text" name='username' placeholder='Sonu Singh' /> */}
                        <label>UserName</label>
                        <input type="text" name='username' value={formData.username} onChange={handleInputChange} />
                        {/* <textarea type="text" name='address' placeholder='India' />
                        <label>Is Admin?</label>
                        <select name='isAdmin' id='isAdmin'>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select> */}
                        <label>Is Active?</label>
                        <select name='isActive' id='isActive'>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                        <div style={{ display: messageStatus }}>Updating...</div>
                        <button style={{ display: messageBtnStatus }} name="submit" type='submit'>Update</button>
                        <div className="message" style={{ color: 'green' }}>{message}</div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SingleUserPage