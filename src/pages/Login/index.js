import React, { useState } from "react";
import "./index.css";
import { authApi } from "../../api/authApi";
const initFormValue = {
    username: "",
    password : "",
};
const isEmptyValue = (value) => {
    return !value || value.trim().length < 1;
};

// const isEmailValid = (email) => {
//     return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
// };

function Login() {
    const [formValue, setFormValue] = useState(initFormValue);
    const [formError, setFormError] =useState({});

    const validateForm = () => {
        const error = {};
        if(isEmptyValue(formValue.username)){
            error["username"] = "username is required";
        }
        if(isEmptyValue(formValue.password)){
            error["password"] = "Password is required";
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
            try {
                const res = await authApi.login(formValue);
                if (!res.data.success) {
                  alert(res.data.message);
                  return;
                }
                
                const { user } = res.data;
                const currentUser = {
                  id: user._id,
                  username: user.username,
                  firstname: user.firstname,
                  lastname: user.lastname,
                  email: user.email,
                  phone: user.phone,
                  address: user.address,
                  role: user.role,
                  createdAt: user.createdAt,
                };
                console.log('currentUser', currentUser)
                alert(res.data.message);
              } catch (error) {
                const errorMessage =
                error.response.data?.message ||
                'Có lỗi xảy ra phía máy chủ, vui lòng thử lại!';
                alert(errorMessage);
              }
        }else{
            console.log("form invalid")
        }
    }

    console.log(formError);

    return (
        <div className="login-page"> 
        <div className="login-form-container">
            <h1 className="title"> Login account</h1>
            <form onSubmit={handleSubmit}>

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
                <div className="help">
                    <a href="#">Forget password?</a>
                </div>
                
                <button type="submit" className="submit-btn">Login</button>
            </form>
        </div>

        </div>
    );
}

export default Login;