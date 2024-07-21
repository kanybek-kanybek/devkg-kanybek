import { useState } from "react";
import axios from "axios";
import "../sinup/sinup.css";
import Cookies from "js-cookie";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const loginApi = "http://3.38.98.134/auth/login";

function Sinup() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post(loginApi, {
                userName: userName,
                password: password,
            });
            if (response.data.success) {
                Cookies.set("token", response.data.token, { expires: 7 });
                alert(response.data.message);
            } else {
                alert("Login failed: " + response.data.message);
            }
        } catch (error: any) {
            console.error("Error during login:", error);
            if (error.response) {
                console.error("Response data:", error.response.data);
                console.error("Response status:", error.response.status);
                console.error("Response headers:", error.response.headers);
                alert("Server error: " + error.response.data.message);
            } else if (error.request) {
                console.error("Request data:", error.request);
                alert("No response from server. Please try again later.");
            } else {
                console.error("Error message:", error.message);
                alert("Error in setting up the request: " + error.message);
            }
        }
    };

    return (
        <>
            <Header />
            <form onSubmit={handleLogin}>
                <div className="container">
                    <div
                        className="login__content"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100vh",
                            background: "rgb(22, 21, 21)",
                        }}
                    >
                        <div className="login__content__inputs">
                            <div className="login__input__email">
                                <input
                                    type="text"
                                    name="username"
                                    value={userName}
                                    onChange={(e) =>
                                        setUserName(e.target.value)
                                    }
                                    placeholder="Введите email или телефон"
                                />
                            </div>
                            <div className="login__input__password">
                                <div className="group">
                                    <input
                                        name="password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        className="input"
                                        type="password"
                                        placeholder="password"
                                    />
                                    <div />
                                </div>
                            </div>
                            <button className="login__button">Save</button>
                        </div>
                    </div>
                </div>
            </form>
            <Footer />
        </>
    );
}

export default Sinup;
