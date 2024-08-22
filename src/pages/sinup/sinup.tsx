import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "../sinup/sinup.css";

const loginAPI = "http://3.38.98.134/auth/login";

const Sinup = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post(loginAPI, {
                userName: userName,
                password: password,
            });
            if (response.data.success) {
                Cookies.set("token", response.data.token, { expires: 7 });
                navigate("/");
            }
            alert(response.data.message);
            navigate("/addVacancy");
        } catch (error) {
            alert("Login bolbodu");
        }
    };

    return (
        <>
            <Header />
            <div className="container">
                <div className="login-content">
                    <div className="login">
                        <h1>Войти</h1>
                        <form onSubmit={handleLogin}>
                            <input
                                type="text"
                                id="username"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                name="username"
                                placeholder="Email пользователя"
                            />
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                name="password"
                                placeholder="Пароль"
                            />
                            <button className="btn-login" type="submit">
                                Войти
                            </button>
                        </form>
                        <div
                            style={{
                                marginTop: "20px",
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <h1 className="title-NotLoggedIn">Не вошел?</h1>
                            <a
                                style={{
                                    fontSize: 16,
                                    paddingTop: 10,
                                }}
                                href="/signup"
                            >
                                Зарегистрироваться
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default Sinup;
