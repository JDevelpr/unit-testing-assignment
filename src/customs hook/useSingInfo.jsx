import { useState } from 'react';

const useSignInfo = () => {
    const [values, setValues] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.username && values.password) {
            console.log('Valid credentials');
        } else {
            console.log('Invalid credentials');
        }
    };

    return {
        values,
        handleChange,
        handleSubmit,
    };
};

export default useSignInfo;
