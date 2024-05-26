import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notifyError = (message: string) => {
    toast.error(message, {
        position: 'top-right',
        autoClose: 5000,
    });
};

const Notification: React.FC = () => {
    return <ToastContainer />;
};

export default Notification;
