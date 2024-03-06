"use client"
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useState } from 'react';

export default function EditUser({ id }) {
    // const [deleteuser, setDeleteUser] = useState('')
    const [deletealert, setDeletealert] = useState(false)
    const router = useRouter();

    const onEdit = () => {


        console.log("Edit Page Hitted the :", id);
        let path = '/dashboard/users/' + id;
        router.push(path);
    };

    const onDelete = async () => {
        setDeletealert(false);
        try {

            await axios.delete(`https://dummyjson.com/users/${id}`);
            console.log('User data deleted successfully');

        } catch (error) {
            console.error('Error deleting user data', error);
        }
    };
    // const onDelete = async () => {
    //     // Prompt user for confirmation
    //     const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    //     if (!confirmDelete) {
    //         return; // Cancel deletion if user chooses to cancel
    //     }

    //     try {
    //         await axios.delete(`https://dummyjson.com/users/${id}`);
    //         console.log('User data deleted successfully');
    //     } catch (error) {
    //         console.error('Error deleting user data', error);
    //     }
    // };

    return (
        <>
            {/* <div style={{ display: 'flex', gap: '8px' }}>
                <button onClick={onEdit} className="btn btn-info" style={{ padding: '3px 2px', background: '#ff4', cursor: 'pointer' }}>
                    Edit
                </button>
                <button onClick={onDelete} className="btn btn-info" style={{ padding: '3px 2px', background: '#ff4', cursor: 'pointer' }}>
                    Delete
                </button>
            </div> */}



            <div style={{ display: 'flex', gap: '8px' }}>
                <button onClick={onEdit} className="btn btn-info" style={{ padding: '3px 2px', background: '#ff4', cursor: 'pointer' }}>
                    Edit
                </button>
                <button onClick={() => setDeletealert(true)} className="btn btn-info" style={{ padding: '3px 2px', background: '#ff4', cursor: 'pointer' }}>
                    Delete
                </button>
            </div>

            {deletealert && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Confirm Deletion</h2>
                        <p>Are you sure you want to delete this user?</p>
                        <button onClick={onDelete}>Delete</button>
                        <button onClick={() => setDeletealert(false)}>Cancel</button>
                    </div>
                </div>
            )}

            <style jsx>{`
                .modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .modal-content {
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    text-align: center;
                }
            `}</style>
        </>

    );
}