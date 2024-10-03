import React, { useState } from 'react';
import './FormValidation.css';

function FormValidation() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});

    // Function to handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Basic validation function
    const validate = () => {
        let formErrors = {};

        if (!formData.email) {
            formErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'Email address is invalid';
        }

        if (!formData.password) {
            formErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            formErrors.password = 'Password must be at least 6 characters';
        }

        if (!formData.confirmPassword) {
            formErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            formErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted successfully:', formData);
        }
    };

    return (
        <div className="form-container">
            <h2>React Form Validation</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'error-input' : ''}
                    />
                    {errors.email && <div className="error-message">{errors.email}</div>}
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={errors.password ? 'error-input' : ''}
                    />
                    {errors.password && <div className="error-message">{errors.password}</div>}
                </div>

                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={errors.confirmPassword ? 'error-input' : ''}
                    />
                    {errors.confirmPassword && (
                        <div className="error-message">{errors.confirmPassword}</div>
                    )}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FormValidation;
