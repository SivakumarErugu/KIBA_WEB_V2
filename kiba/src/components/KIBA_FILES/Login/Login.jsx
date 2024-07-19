import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KibaContext from "../../../context/KibaContext";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import axios from 'axios';
import Cookies from "js-cookie";

import {
    Btn,
    CustomContainer,
    EyeIconContainer,
    Form,
    Heading,
    ImgTag,
    InnerContainer,
    LoginContainer,
    MainContainer,
    Ptag,
    RememberContainer,
    SlideImage,
    SliderItem,
    StyledSlider,
    CoolInput,
    LabelText,
    TextInput,
} from './StyledComponents';


const Login = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        // Function to get cookie by name
        function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        }

        const savedToken = getCookie('KIBAJWTToken');

        if (savedToken) {
            navigate('/dashboard');
        }
    }, [navigate]);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

    const onChangeInputs = (value, key) => {
        setCredentials(prev => ({
            ...prev,
            [key]: value
        }));
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

        try {
            // Make API request
            const response = await axios.post('http://localhost:3000/AdminLogin', { email, password });

            // Destructure response safely
            const { token } = response.data || {};

            if (token) {
                // Set the JWT token as a cookie (consider security settings)
                Cookies.set('KIBAJWTToken', token, { expires: 7, secure: true, sameSite: 'Strict' });

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
                    <MainContainer>
                        <InnerContainer>
                            <ImgTag src="https://res.cloudinary.com/dca9sij3n/image/upload/v1719813835/rcip7lurlae11xlrgnio.png" alt="Image" />

                            <LoginContainer>
                                <CustomContainer>
                                    <Heading>Login</Heading>
                                    <Ptag>Login to access your admin account</Ptag>
                                    <Form onSubmit={handleLogin}>
                                        <CoolInput className="coolinput">
                                            <LabelText htmlFor="email" className="text">Email:</LabelText>
                                            <TextInput type="text" id="email" placeholder="Enter email" name="email" className="input" onChange={(e) => onChangeInputs(e.target.value, 'email')} />
                                        </CoolInput>
                                        <CoolInput className="coolinput">
                                            <LabelText htmlFor="password" className="text">Password:</LabelText>
                                            <TextInput type={showPassword ? 'text' : 'password'} id="password" placeholder="Enter Password" name="password" className="input" onChange={(e) => onChangeInputs(e.target.value, 'password')} />
                                            <EyeIconContainer>
                                                {showPassword ?
                                                    <FaRegEye style={{ color: 'black' }} onClick={() => setShowPassword(false)} /> :
                                                    <FaRegEyeSlash style={{ color: 'black' }} onClick={() => setShowPassword(true)} />
                                                }
                                            </EyeIconContainer>
                                        </CoolInput>
                                        <RememberContainer>
                                            <p style={{ fontSize: '0.7rem', color: 'red' }}>
                                                <Link style={{ color: 'red' }} to='/change-password'>Forget Password</Link>
                                            </p>
                                        </RememberContainer>
                                        <Btn type="submit">Login</Btn>
                                    </Form>
                                </CustomContainer>
                            </LoginContainer>


                            <StyledSlider {...settings}>
                                <SliderItem>
                                    <SlideImage src="https://res.cloudinary.com/dca9sij3n/image/upload/v1719660552/xeqrdakvwyaq6h4hukmy.png" alt="Image 1" />
                                </SliderItem>
                                <SliderItem>
                                    <SlideImage src="https://res.cloudinary.com/dca9sij3n/image/upload/v1719982613/iap6sj7rvy1pytccgkwv.jpg" alt="Image 2" />
                                </SliderItem>
                                <SliderItem>
                                    <SlideImage src="/path/to/your/image3.jpg" alt="Image 3" />
                                </SliderItem>
                            </StyledSlider>

                        </InnerContainer>
                    </MainContainer>
                );
            }}
        </KibaContext.Consumer>
    );
}

export default Login
