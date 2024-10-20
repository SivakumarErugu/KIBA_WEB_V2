import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KibaContext from "../../../context/KibaContext";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import axios from 'axios';
import Cookies from 'universal-cookie';

import {
    Btn, CustomContainer, EyeIconContainer, Form, Heading, ImgTag, InnerContainer, LoginContainer, MainContainer, Ptag, RememberContainer, CoolInput, LabelText, TextInput,
    ForgotPasswordText
} from './StyledComponents';


const Login = () => {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [CorrectEmail, setCorrectEmail] = useState(false)

    useEffect(() => {
        const savedToken = cookies.get('KIBAJWTToken'); // Use universal-cookie to get the cookie

        if (savedToken) {
            navigate('/dashboard');
        }
    }, []);

    const onChangeInputs = (value, key) => {
        if (key === 'email') {
            if (validateEmail(value)) {
                setCorrectEmail(false)
            } else {
                setCorrectEmail(true)
            }
        }

        setCredentials(prev => ({
            ...prev,
            [key]: value
        }));
    }

    const validateEmail = (email) => {
        // Regular expression for validating an email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        const { email, password } = credentials;

        // Basic validation
        if (!email || !password) {
            Swal.fire({
                icon: 'warning',
                title: 'Missing Credentials',
                text: 'Please fill in all the required fields before proceeding.',
                confirmButtonText: 'OK'
            });
            return;
        }

        if (CorrectEmail) {
            Swal.fire({
                icon: 'warning',
                title: 'Incorrect Mail ID',
                text: 'Please Enter Correct Email',
                confirmButtonText: 'OK'
            });
            return;
        }

        try {
            // Make API request
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await axios.post(`${apiUrl}/AdminLogin`, { email, password });

            // Destructure response safely
            const { token } = response.data || {};

            if (token) {
                // Set the JWT token as a cookie (consider security settings)
                cookies.set('KIBAJWTToken', token, { path: '/', maxAge: 86400 });

                // Navigate to Dashboard
                navigate('/dashboard');
            } else {
                // Handle case where no token is returned
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'Invalid response from server.',
                    confirmButtonText: 'OK'
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: error.response?.data?.message || 'An error occurred. Please try again.',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <KibaContext.Consumer>
            {value => {
                const { admin } = value;

                return (
                    <MainContainer style={{ background: 'url(../../BlueDark2.png) no-repeat center center fixed', backgroundSize: 'cover' }}>
                        <InnerContainer>
                            <ImgTag src="../../kiba-logo-1.png" alt="Image" />

                            <LoginContainer>
                                <CustomContainer>
                                    <Heading>Login</Heading>
                                    <Ptag>Login to access your admin account</Ptag>
                                    <Form onSubmit={handleLogin}>
                                        <CoolInput>
                                            <LabelText htmlFor="email" className="text">Email:</LabelText>
                                            <TextInput type="email"
                                                style={{ border: CorrectEmail ? '2px solid red' : '' }}
                                                required id="email"
                                                placeholder="Enter email" name="email" className="input" value={credentials.email} onChange={(e) => onChangeInputs(e.target.value.toLowerCase(), 'email')} />
                                        </CoolInput>

                                        <CoolInput>
                                            <LabelText htmlFor="password" className="text">Password:</LabelText>
                                            <TextInput type={showPassword ? 'text' : 'password'} id="password" placeholder="Enter Password" name="password" className="input" value={credentials.password} onChange={(e) => onChangeInputs(e.target.value.toLowerCase(), 'password')} />
                                            <EyeIconContainer>
                                                {showPassword ?
                                                    <FaRegEye style={{ color: 'black' }} onClick={() => setShowPassword(false)} /> :
                                                    <FaRegEyeSlash style={{ color: 'black' }} onClick={() => setShowPassword(true)} />
                                                }
                                            </EyeIconContainer>
                                        </CoolInput>

                                        <RememberContainer>
                                            <Link to='/change-password'>
                                                <ForgotPasswordText >
                                                    Forget password
                                                </ForgotPasswordText>
                                            </Link>
                                        </RememberContainer>

                                        <Btn type="submit">Login</Btn>
                                    </Form>
                                </CustomContainer>
                            </LoginContainer>

                        </InnerContainer>
                    </MainContainer>
                );
            }}
        </KibaContext.Consumer>
    );
}

export default Login
