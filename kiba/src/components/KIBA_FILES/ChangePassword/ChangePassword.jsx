import { useEffect, useState } from "react";

// ICON IMPORTS
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import axios from 'axios';

import Swal from "sweetalert2";

import {
    Btn,
    CardContainer,
    CustomContainer,
    CustomDiv,
    EyeIconContainer,
    Form,
    Heading,
    ImgTag,
    InnerContainer,
    Line,
    LoginContainer,
    MainContainer,
    StyledSlider,
    SliderItem,
    SlideImage,
    CoolInput,
    LabelText,
    TextInput,
} from "./StyledComponents";

const ChangePassword = () => {
    const [credentials, setCredentials] = useState({
        email: "sivakumar.erugu@nowitservices.com",
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [isGetOtpActive, setGetOtpActive] = useState(true);
    const [isOtpActive, setOtpActive] = useState(false);
    const [isPasswordActive,setpasswordActive] = useState(false)
    const [message, setMessage] = useState('');
    const [otp, setOtp] = useState('')


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

    const onChangeAdminCredentials = async (e) => {
        e.preventDefault();
        const newPassword = credentials.password;

        // Prepare the URL and request options
        const url = `http://13.127.156.81:3000/admin/update`;
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ password: newPassword }), // Send only the new password
        };

        try {
            const response = await fetch(url, options);
            if (response.ok) {
                console.log("Password Updated Successfully!");
                Swal.fire({
                    icon: "success",
                    text: "Password Updated Successfully!",
                    confirmButtonText: "OK",
                });
            } else {
                console.error("Error updating password:", response.statusText);
                Swal.fire({
                    icon: "error",
                    text: "Failed to update Password. Please try again later.",
                    confirmButtonText: "OK",
                });
            }
        } catch (error) {
            console.error("Error:", error.message);
            Swal.fire({
                icon: "error",
                text: "An unexpected error occurred. Please try again later.",
                confirmButtonText: "OK",
            });
        }
    };

    const checkMatch = () => {
        if (credentials.password !== credentials.confirmPassword) {
            Swal.fire({
                icon: "error",
                text: "Passwords do not match. Please try again",
                confirmButtonText: "OK",
            });
            return false;
        }

        return true;
    };

    const onChangeInputs = (value, key) => {
        setCredentials((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const getOtp = async (e) => {
        e.preventDefault()
        const email = credentials.email
        console.log(email)
        try {
            const response = await axios.post('http://13.127.156.81:3000/send-otp', { email });
            console.log(response.data.message)
            setMessage(response.data.message)
            setGetOtpActive(false)
            setOtpActive(true)
        } catch (error) {
            setMessage('Failed to send OTP')
        }
    };



    const handleVerifyOtp = async (e) => {
        e.preventDefault()
        const email = credentials.email
        try {
            const response = await axios.post('http://13.127.156.81:3000/verify-otp', { email, otp });
            setMessage(response.data.message);
            setOtpActive(false)
            setpasswordActive(true)
        } catch (error) {
            setMessage('Invalid OTP');
        }
    };

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage('')
            },3000)

            return () =>clearTimeout(timer)
        }
    },[message])

    return (
        <MainContainer>
            <InnerContainer>
                <ImgTag
                    src="https://res.cloudinary.com/dca9sij3n/image/upload/v1719813835/rcip7lurlae11xlrgnio.png"
                    alt="Image description"
                />
                <LoginContainer>
                    <CustomContainer>
                        <Heading>Change Password</Heading>
                        <Form>
                            <CoolInput style={{ marginBottom: "1rem" }}>
                                <LabelText htmlFor="input">E-mail:</LabelText>
                                <TextInput
                                    type="text"
                                    placeholder="Enter mail"
                                    name="input"
                                    value={credentials.email}
                                    style={{ border: "2px solid #ccc" }}
                                    readOnly
                                    onChange={(e) => onChangeInputs(e.target.value, "email")}
                                />
                            </CoolInput>
                            {isGetOtpActive &&
                                <Btn type="button" onClick={getOtp}>Get OTP</Btn>
                            }

                            {
                                isOtpActive &&
                                <>
                                    <CoolInput>
                                        <LabelText htmlFor="input">OTP:</LabelText>

                                        <TextInput
                                            type="text"
                                            placeholder="Enter OTP"
                                            value={otp}
                                            onChange={(e) =>
                                                setOtp(e.target.value)
                                            }
                                        />
                                    </CoolInput>

                                    <Btn type="button" onClick={handleVerifyOtp}>Verify OTP</Btn>
                                </>
                            }

                            {isPasswordActive && (
                                <>
                                    <CoolInput>
                                        <LabelText htmlFor="input">Password:</LabelText>

                                        <TextInput
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter Password"
                                            name="input"
                                            value={credentials.password && credentials.password}
                                            onChange={(e) =>
                                                onChangeInputs(e.target.value, "password")
                                            }
                                        />
                                        <EyeIconContainer>
                                            {showPassword ? (
                                                <FaRegEye
                                                    style={{ color: "black" }}
                                                    onClick={() => setShowPassword(false)}
                                                />
                                            ) : (
                                                <FaRegEyeSlash
                                                    style={{ color: "black" }}
                                                    onClick={() => setShowPassword(true)}
                                                />
                                            )}
                                        </EyeIconContainer>
                                    </CoolInput>

                                    <CoolInput>
                                        <LabelText htmlFor="input">Confirm Password:</LabelText>

                                        <TextInput
                                            type={showPassword2 ? "text" : "password"}
                                            placeholder="Enter Password"
                                            name="input"
                                            value={
                                                credentials.confirmPassword &&
                                                credentials.confirmPassword
                                            }
                                            onChange={(e) =>
                                                onChangeInputs(e.target.value, "confirmPassword")
                                            }
                                        />
                                        <EyeIconContainer>
                                            {showPassword2 ? (
                                                <FaRegEye
                                                    style={{ color: "black" }}
                                                    onClick={() => setShowPassword2(false)}
                                                />
                                            ) : (
                                                <FaRegEyeSlash
                                                    style={{ color: "black" }}
                                                    onClick={() => setShowPassword2(true)}
                                                />
                                            )}
                                        </EyeIconContainer>
                                    </CoolInput>

                                    <Btn
                                        type="button"
                                        onClick={(e) => {
                                            if (checkMatch()) {
                                                onChangeAdminCredentials(e);
                                            }
                                        }}
                                    >
                                        Change Password
                                    </Btn>
                                </>
                            )}                            
                        </Form>
                        <Line></Line>

                        <span style={{color:'red'}}>{message}</span>
                    </CustomContainer>
                </LoginContainer>

                <StyledSlider {...settings}>
                    <SliderItem>
                        <SlideImage
                            src="https://res.cloudinary.com/dca9sij3n/image/upload/v1719660552/xeqrdakvwyaq6h4hukmy.png"
                            alt="Image 1"
                        />
                    </SliderItem>
                    <SliderItem>
                        <SlideImage
                            src="https://res.cloudinary.com/dca9sij3n/image/upload/v1719982613/iap6sj7rvy1pytccgkwv.jpg"
                            alt="Image 2"
                        />
                    </SliderItem>
                    <SliderItem>
                        <SlideImage src="/path/to/your/image3.jpg" alt="Image 3" />
                    </SliderItem>
                </StyledSlider>
            </InnerContainer>
        </MainContainer>
    );
};

export default ChangePassword;
