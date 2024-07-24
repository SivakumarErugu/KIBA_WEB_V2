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
    const cookies = new Cookies();
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        const savedToken = cookies.get('KIBAJWTToken'); // Use universal-cookie to get the cookie

        if (savedToken) {
            navigate('/dashboard');
        }
    }, []);

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
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await axios.post(`${apiUrl}/AdminLogin`, { email, password });

            // Destructure response safely
            const { token } = response.data || {};

            if (token) {
                // Set the JWT token as a cookie (consider security settings)
                // Cookies.set('KIBAJWTToken', token, { expires: 7, secure: true, sameSite: 'Strict' });
                cookies.set('KIBAJWTToken', token, { path: '/', maxAge: 604800 });

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
                                        <CoolInput>
                                            <LabelText htmlFor="email" className="text">Email:</LabelText>
                                            <TextInput type="email" id="email" placeholder="Enter email" name="email" className="input" value={credentials.email} onChange={(e) => onChangeInputs(e.target.value.toLowerCase(), 'email')} />
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
                                    <SlideImage src="https://res.cloudinary.com/dca9sij3n/image/upload/v1721728972/KIBA/icxfcykhrubodyr2pbxi.png" alt="Image 1" />
                                </SliderItem>
                                <SliderItem>
                                    <SlideImage src="https://res.cloudinary.com/dca9sij3n/image/upload/v1721728972/KIBA/osv3t5fj9j7a7pcddaei.png" alt="Image 2" />
                                </SliderItem>
                                <SliderItem>
                                    <SlideImage src="https://res.cloudinary.com/dca9sij3n/image/upload/v1721728971/KIBA/uojy4swdeuvhrkvejyox.jpg" alt="Image 3" />
                                </SliderItem>
                                <SliderItem>
                                    <SlideImage src="https://res.cloudinary.com/dca9sij3n/image/upload/v1721728971/KIBA/aa2zzvwmey27d3plnazk.jpg" alt="Image 4" />
                                </SliderItem>
                                <SliderItem>
                                    <SlideImage src="https://res.cloudinary.com/dca9sij3n/image/upload/v1721728923/KIBA/ojclcd60fdt23k9xnybk.jpg" alt="Image 5" />
                                </SliderItem>
                                <SliderItem>
                                    <SlideImage src="https://res.cloudinary.com/dca9sij3n/image/upload/v1721728923/KIBA/g3cyeegvl6z955a0pfxp.jpg" alt="Image 6" />
                                </SliderItem>
                                <SliderItem>
                                    <SlideImage src="https://res.cloudinary.com/dca9sij3n/image/upload/v1721729389/KIBA/cf9q4me17skw7xgrvmwe.png" alt="Image 7" />
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
