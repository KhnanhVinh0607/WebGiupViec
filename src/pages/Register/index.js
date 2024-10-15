import React, { useState } from "react";
import "./index.css";
import { authApi } from "../../api/authApi";
const initFormValue = {
    firstName: "",
    lastName : "",
    email: "",
    address: "",
    phone: "",
    username: "",
    password : "",
    confirmPassword: "",
};

const isEmptyValue = (value) => {
    return !value || value.trim().length < 1;
};

const isEmailValid = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};
function Register() {
    const [formValue, setFormValue] = useState(initFormValue);
    const [formError, setFormError] =useState({});
    const validateForm = () => {
        const error = {};

        if(isEmptyValue(formValue.firstName)){
            error["firstName"] = "First Name is required";
        }
        if(isEmptyValue(formValue.lastName)){
            error["lastName"] = "last Name is required";
        }
        if(isEmptyValue(formValue.email)){
            error["email"] = "email is required";
        }else{
            if(!isEmailValid(formValue.email)){
                error["email"] = "Email is invalid";
            }
        }
        if(isEmptyValue(formValue.address)){
            error["address"] = "address is required";
        }
        if(isEmptyValue(formValue.phone)){
            error["phone"] = "phone is required";
        }
        if(isEmptyValue(formValue.username)){
            error["username"] = "Username is required";
        }
        if(isEmptyValue(formValue.password)){
            error["password"] = "Password is required";
        }
        if(isEmptyValue(formValue.confirmPassword)){
            error["confirmPassword"] = " Confirm Password is required";
        }else if (formValue.confirmPassword !== formValue.password) {
            error["confirmPassword"] = "Confirm Password not match";
        }

        setFormError(error);
        return Object.keys(error).length === 0;
    };

    const handleChange = (event) => {
        const {value, name} = event.target;
        setFormValue({
            ...formValue,
            [name]: value,
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(validateForm()){
            console.log("form value",formValue)
            let newUser = {...formValue}
          newUser.role = "user";
          try {
            const res = await authApi.register(newUser)
            if (!res.data.success) {
            //   toast.error(res.data.message);
              //reset form
              return;
            }
            console.log(res.data)
            alert('dang nhạp thanh cong')
          }
          catch (err) {
            const errorMessage =
            err.response.data?.message ||
            "Có lỗi xảy ra phía máy chủ, vui lòng thử lại!";
            alert(errorMessage)
          }
        }else{
            console.log("form invalid")
        }
    }

    console.log(formError);

    return (
        <div className="register-page"> 
        <div className="register-form-container">
            <h1 className="title"> Register account</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="first-name" className="form-label">
                        First Name
                    </label>
                    <input
                    id="first-name"
                    className="form-control"
                    type="text"
                    name="firstName"
                    value={formValue.firstName}
                    onChange={handleChange}
                    />
                    {formError.firstName && (
                        <div className="error-feedback">{formError.firstName}</div>
                    )}
                </div>
                <div className="mb-2">
                <label htmlFor="last-name" className="form-label">
                        Last Name
                    </label>
                    <input
                    id="last-name"
                    className="form-control"
                    type="text"
                    name="lastName"
                    value={formValue.lastName}
                    onChange={handleChange}
                    />
                    {formError.lastName && (
                        <div className="error-feedback">{formError.lastName}</div>
                    )}
                </div>

                <div className="mb-2">
                <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                    id="email"
                    className="form-control"
                    type="text"
                    name="email"
                    value={formValue.email}
                    onChange={handleChange}
                    />
                    {formError.email && (
                        <div className="error-feedback">{formError.email}</div>
                    )}
                </div>

                <div className="mb-2">
                <label htmlFor="address" className="form-label">
                        Address
                    </label>
                    <input
                    id="address"
                    className="form-control"
                    type="text"
                    name="address"
                    value={formValue.address}
                    onChange={handleChange}
                    />
                    {formError.address && (
                        <div className="error-feedback">{formError.address}</div>
                    )}
                </div>

                <div className="mb-2">
                <label htmlFor="number" className="form-label">
                        So dien thoai
                    </label>
                    <input
                    id="number"
                    className="form-control"
                    type="text"
                    name="phone"
                    value={formValue.phone}
                    onChange={handleChange}
                    />
                    {formError.phone && (
                        <div className="error-feedback">{formError.phone}</div>
                    )}
                </div>

                <div className="mb-2">
                <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input
                    id="username"
                    className="form-control"
                    type="text"
                    name="username"
                    value={formValue.username}
                    onChange={handleChange}
                    />
                    {formError.username && (
                        <div className="error-feedback">{formError.username}</div>
                    )}
                </div>

                <div className="mb-2">
                <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                    id="password"
                    className="form-control"
                    type="password"
                    name="password"
                    value={formValue.password}
                    onChange={handleChange}
                    />
                    {formError.password && (
                        <div className="error-feedback">{formError.password}</div>
                    )}
                </div>

                <div className="mb-2">
                <label htmlFor="confirm-password" className="form-label">
                        Confirm Password
                    </label>
                    <input
                    id="confirm-password"
                    className="form-control"
                    type="password"
                    name="confirmPassword"
                    value={formValue.confirmPassword}
                    onChange={handleChange}
                    />
                    {formError.confirmPassword && (
                        <div className="error-feedback">{formError.confirmPassword}</div>
                    )}
                </div>
                <button type="submit" className="submit-btn">Register</button>
            </form>
        </div>

        </div>
    );
}

export default Register;