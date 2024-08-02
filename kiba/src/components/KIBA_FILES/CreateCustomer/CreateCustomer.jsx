import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Cookies from "universal-cookie";

import SideNav from "../SideNav/SideNav";
import Header from "../Header/Header";

import Swal from "sweetalert2";

import { IoIosArrowBack } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import { MdFileUpload } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import { IoCloseCircle } from "react-icons/io5";

import {
    AlertText,
    BackBtn,
    CreateNew,
    Custom,
    CustomContainer,
    CustomDropDown,
    CustomDropdownContainer,
    CustomDropDownOptions,
    CustomOption,
    ImgTag,
    InputContainer,
    InputTag,
    InnerContainer,
    LabelTag,
    LabelTwo,
    MainContainer,
    RadioCon,
    Row,
    SaveBtn,
    Span,
    TextArea,
    Title,
    UploadBtn,
    Switch,
    DatePickerWrapper,
    Icon,
    DivX,
    DivSlider,
    UploadDiv,
    ImageUploadTAg,
    ImgLabel,
    ImgLabelTag,
    ImgLabelTag2,
    UploadDiv2,
    ImageUploadTAg2, ImgLabel2,
    ImgTag2,
    ImgDiv,
    Remove
} from "./CreateCustomerStyles";

const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
];

const CreateCustomer = () => {
    const cookies = new Cookies();
    const navigate = useNavigate();

    const [customerDetails, setCustomerDetails] = useState({
        first_name: "",
        last_name: "",
        mobile_number: "",
        same_for_whatsapp: "false",
        whatsapp_number: "",
        own_land: "false",
        cultivation: "",
        state: "",
        district: "",
        city: "",
        pincode: "",
        place: "",
        trail_pack: false,
        notes: "",
        image: "",
        customer: "false",
        created_on: "",
        trail_pack_given_on: "",
        additional_images: []
    });
    const [image, setImage] = useState(null);
    const [additionalImages, setAdditionalImages] = useState([])
    const [additionalObjectImages, setAdditionaObjectlImages] = useState([])
    const [localImage, setLocalImage] = useState(null);
    const [trySubmit, setTrySubmit] = useState(false);
    const [isCultivationActive, setCultivationActive] = useState(false);
    const cultivationRef = useRef(null);

    const [isStateActive, setStateActive] = useState(false);
    const StateRef = useRef(null);
    const [uploadImgStatus, setUploadImgStatus] = useState("");
    const today = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedData = today.toLocaleDateString(undefined, options);
    const apiUrl = import.meta.env.VITE_API_URL;
    const [selectedDate, setSelectedDate] = useState(null);

    // DROPDOWN OUTSIDE CLICK CONTROL
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                cultivationRef.current &&
                !cultivationRef.current.contains(event.target)
            ) {
                setCultivationActive(false);
            }

            if (StateRef.current && !StateRef.current.contains(event.target)) {
                setStateActive(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [setCultivationActive]);

    const onChangeInput = (key, value) => {
        if (key === "same_for_whatsapp" && value === "true") {
            setCustomerDetails((prev) => ({
                ...prev,
                [key]: value,
                whatsapp_number: prev.mobile_number,
            }));
        } else if (key === "same_for_whatsapp" && value === "false") {
            setCustomerDetails((prev) => ({
                ...prev,
                [key]: value,
                whatsapp_number: "",
            }));
        } else {
            setCustomerDetails((prev) => ({
                ...prev,
                [key]: value,
            }));
        }
    };

    const handleFileChange = (event) => {
        const imageFile = event.target.files[0];
        setImage(imageFile);
        setLocalImage(URL.createObjectURL(event.target.files[0]));
    };

    const handleMultipleImgChange = (event) => {
        const imageFile = event.target.files[0];
        setAdditionaObjectlImages(prev => ([...prev, imageFile]));
        const imgUrl = URL.createObjectURL(event.target.files[0])
        setAdditionalImages(prev => ([
            ...prev,
            imgUrl
        ]))
        event.target.value = '';
    }

    const handleUpload = async () => {
        try {
            if (!image) {
                console.error("Please select an image.");
                return null; // Return null if no image is selected
            }

            const formData = new FormData();
            formData.append("file", image);

            const res = await fetch(`${apiUrl}/upload`, {
                method: "POST",
                headers: {
                    // 'Content-Type': 'multipart/form-data'  // Do not set Content-Type header when sending FormData with fetch
                },
                body: formData,
            });

            if (!res.ok) {
                throw new Error("Error uploading image: " + res.statusText);
            }

            const data = await res.json();
            setUploadImgStatus("Image uploaded successfully!");
            return data.url; // Return the URL of the uploaded image
        } catch (error) {
            console.error("Error uploading image:", error);
            // Handle error or show error message
            return null;
        }
    };

    const handleUploadMultipleImages = async () => {
        try {
            if (additionalObjectImages.length === 0) {
                console.error("Please select images to upload.");
                return null;
            }

            const formData = new FormData();
            additionalObjectImages.forEach((file) => {
                formData.append("files", file);
            });

            const res = await fetch(`${apiUrl}/multiple-image-upload`, {
                method: "POST",
                body: formData,
            });

            if (!res.ok) {
                const errorText = await res.text();
                throw new Error("Error uploading images: " + res.statusText + " - " + errorText);
            }

            const data = await res.json();
            setUploadImgStatus("Images uploaded successfully!");
            console.log(data.urls);
            return data.urls;
        } catch (error) {
            console.error("Error uploading images:", error);
            return null;
        }
    };


    const ValidateForm = (customer) => {
        let error = false;

        if (
            customer.first_name === "" ||
            customer.last_name === "" ||
            customer.mobile_number === "" ||
            (!customer.same_for_whatsapp && customer.whatsapp_number === "") ||
            customer.own_land === "" ||
            customer.cultivation === "" ||
            customer.state === "" ||
            customer.district === "" ||
            customer.city === "" ||
            customer.pincode === "" ||
            customer.place === "" ||
            customer.customer === "" ||
            customer.created_on === "" ||
            (customer.trail_pack && customer.trail_pack_given_on === "")
        ) {
            error = true;
        } else if (customer.mobile_number.length !== 10) {
            error = true;
        } else if (
            !customer.same_for_whatsapp &&
            customer.whatsapp_number.length !== 10
        ) {
            error = true;
        } else if (String(customer.pincode).length !== 6) {
            error = true;
        }

        return error;
    };

    const onSubmitForm = async (e) => {
        e.preventDefault();
        const savedToken = cookies.get("KIBAJWTToken"); // Retrieve the saved token from cookies

        let imagesURLS
        let imageUrl
        if (localImage) {
            imageUrl = await handleUpload(); // Wait for the image upload to complete
        }

        if (additionalObjectImages.length !== 0) {
            imagesURLS = await handleUploadMultipleImages(); // Wait for the image upload to
        }


        // Update customerDetails with the uploaded image URL
        const updatedCustomerDetails = {
            ...customerDetails,
            image: imageUrl,
            additional_images: imagesURLS,
            created_on: formattedData,
        };

        setCustomerDetails(updatedCustomerDetails); // Update the state

        setTrySubmit(true); // Set flag indicating form submission attempt

        // Validate form data
        const isValid = !ValidateForm(updatedCustomerDetails);

        if (!isValid) {
            Swal.fire({
                icon: "warning",
                text: "Fill required details correctly!",
                confirmButtonText: "OK",
            });
            return;
        }

        const url = `${apiUrl}/new/customer`;

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${savedToken}`, // Add Bearer token
            },
            body: JSON.stringify(updatedCustomerDetails),
        };

        try {
            const response = await fetch(url, options);

            if (response.ok) {
                console.log("Customer Added Successfully!");
                Swal.fire({
                    icon: "success",
                    text: "Customer Added Successfully!",
                    confirmButtonText: "OK",
                });
                navigate("/customers"); // Redirect upon successful submission
            } else {
                console.error("Error adding customer:", response.statusText);
                Swal.fire({
                    icon: "warning",
                    text: "Error adding customer: " + response.statusText,
                    confirmButtonText: "OK",
                });
            }
        } catch (error) {
            console.error("Error:", error.message);
            Swal.fire({
                icon: "warning",
                text: "Error: " + error.message,
                confirmButtonText: "OK",
            });
        }
    };

    const setTrailData = (date) => {
        if (!date) return "";
        const stringDate = date.toLocaleDateString("en-GB");
        onChangeInput("trail_pack_given_on", stringDate);
    };

    useEffect(() => {
        if (uploadImgStatus) {
            const timer = setTimeout(() => {
                setUploadImgStatus("");
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [uploadImgStatus]);

    const onRemoveMultipleImg = (image) => {
        setAdditionalImages((prev) => prev.filter((img) => img !== image));
    }

    const onBack = () => {
        navigate(-1);
    };

    return (
        <MainContainer>
            <SideNav />

            <InnerContainer>
                <Header />

                <CustomContainer>
                    <DivX>
                        <BackBtn onClick={onBack}>
                            <IoIosArrowBack />
                        </BackBtn>
                        <Title>Create Customer</Title>
                    </DivX>

                    <CreateNew onSubmit={onSubmitForm}>
                        <Row>
                            <InputContainer>
                                <LabelTag>First Name</LabelTag>
                                <InputTag
                                    style={{
                                        border:
                                            trySubmit & (customerDetails.first_name === "")
                                                ? "2px solid red"
                                                : "",
                                    }}
                                    type="text"
                                    value={customerDetails.first_name}
                                    onChange={(e) => onChangeInput("first_name", e.target.value)}
                                // placeholder="Enter First Name"
                                />
                            </InputContainer>

                            <InputContainer>
                                <LabelTag>Last Name</LabelTag>
                                <InputTag
                                    style={{
                                        border:
                                            trySubmit & (customerDetails.last_name === "")
                                                ? "2px solid red"
                                                : "",
                                    }}
                                    type="text"
                                    value={customerDetails.last_name}
                                    onChange={(e) => onChangeInput("last_name", e.target.value)}
                                // placeholder="Enter Last Name"
                                />
                            </InputContainer>
                        </Row>

                        <Row>
                            <InputContainer>
                                <LabelTag>Cultivation</LabelTag>

                                <CustomDropdownContainer ref={cultivationRef}>
                                    <CustomDropDown
                                        style={{
                                            border:
                                                trySubmit & (customerDetails.cultivation === "")
                                                    ? "2px solid red"
                                                    : "",
                                        }}
                                        onClick={() => setCultivationActive(!isCultivationActive)}
                                    >
                                        <Span>
                                            {customerDetails.cultivation
                                                ? customerDetails.cultivation
                                                : "Select  Cultivation"}
                                        </Span>

                                        <Icon>
                                            <FaAngleDown
                                                style={{
                                                    transform: `rotate(${isCultivationActive ? "180deg" : "0deg"
                                                        })`,
                                                    height: "100%",
                                                    width: "100%",
                                                }}
                                            />
                                        </Icon>
                                    </CustomDropDown>

                                    {isCultivationActive && (
                                        <CustomDropDownOptions>
                                            <CustomOption
                                                onClick={() => {
                                                    onChangeInput("cultivation", "Shrimp");
                                                    setCultivationActive(!isCultivationActive);
                                                }}
                                            >
                                                Shrimp
                                            </CustomOption>
                                            <CustomOption
                                                onClick={() => {
                                                    onChangeInput("cultivation", "Fish");
                                                    setCultivationActive(!isCultivationActive);
                                                }}
                                            >
                                                Fish
                                            </CustomOption>
                                            <CustomOption
                                                onClick={() => {
                                                    onChangeInput("cultivation", "Poultry");
                                                    setCultivationActive(!isCultivationActive);
                                                }}
                                            >
                                                Poultry
                                            </CustomOption>
                                            <CustomOption
                                                onClick={() => {
                                                    onChangeInput("cultivation", "Bovine");
                                                    setCultivationActive(!isCultivationActive);
                                                }}
                                            >
                                                Bovine
                                            </CustomOption>
                                        </CustomDropDownOptions>
                                    )}
                                </CustomDropdownContainer>
                            </InputContainer>

                            <InputContainer>
                                <LabelTag>Mobile Number</LabelTag>
                                <InputTag
                                    style={{
                                        border:
                                            trySubmit &
                                                (customerDetails.mobile_number === "" ||
                                                    customerDetails.mobile_number.length !== 10)
                                                ? "2px solid red"
                                                : "",
                                    }}
                                    type="number"
                                    value={customerDetails.mobile_number}
                                    onChange={(e) =>
                                        onChangeInput("mobile_number", e.target.value)
                                    }
                                // placeholder="Enter Mobile Number"
                                />
                            </InputContainer>
                        </Row>

                        <Row>
                            <InputContainer>
                                <LabelTag>Place</LabelTag>
                                <InputTag
                                    style={{
                                        border:
                                            trySubmit & (customerDetails.place === "")
                                                ? "2px solid red"
                                                : "",
                                    }}
                                    type="text"
                                    value={customerDetails.place}
                                    onChange={(e) => onChangeInput("place", e.target.value)}
                                // placeholder="Enter Place"
                                />
                            </InputContainer>

                            <InputContainer>
                                <LabelTag>Same for WhatsApp</LabelTag>
                                <RadioCon>
                                    <Custom>
                                        <InputTag
                                            id="Yes"
                                            style={{ height: "70%", width: "90%", margin: "0" }}
                                            name="whatsapp"
                                            type="radio"
                                            checked={customerDetails.same_for_whatsapp === "true"}
                                            onChange={() =>
                                                onChangeInput("same_for_whatsapp", "true")
                                            }
                                        />
                                        <LabelTwo htmlFor="Yes">Yes</LabelTwo>
                                    </Custom>
                                    <Custom>
                                        <InputTag
                                            id="No"
                                            style={{ height: "70%", width: "90%", margin: "0" }}
                                            name="whatsapp"
                                            type="radio"
                                            checked={customerDetails.same_for_whatsapp === "false"}
                                            onChange={() =>
                                                onChangeInput("same_for_whatsapp", "false")
                                            }
                                        />
                                        <LabelTwo
                                            style={{ fontSize: "1rem", color: "#495057" }}
                                            id="No"
                                        >
                                            No
                                        </LabelTwo>
                                    </Custom>
                                </RadioCon>
                            </InputContainer>
                        </Row>

                        <Row>
                            <InputContainer>
                                <LabelTag>City</LabelTag>
                                <InputTag
                                    style={{
                                        border:
                                            trySubmit & (customerDetails.city === "")
                                                ? "2px solid red"
                                                : "",
                                    }}
                                    type="text"
                                    value={customerDetails.city}
                                    onChange={(e) => onChangeInput("city", e.target.value)}
                                // placeholder="Enter City"
                                />
                            </InputContainer>

                            <InputContainer>
                                <LabelTag>WhatsApp Number</LabelTag>
                                <InputTag
                                    style={{
                                        border:
                                            trySubmit &
                                                (customerDetails.whatsapp_number === "" ||
                                                    customerDetails.whatsapp_number.length !== 10)
                                                ? "2px solid red"
                                                : "",
                                    }}
                                    type="number"
                                    value={customerDetails.whatsapp_number}
                                    onChange={(e) =>
                                        onChangeInput("whatsapp_number", e.target.value)
                                    }
                                    readOnly={
                                        customerDetails.same_for_whatsapp === "true" ? true : false
                                    }
                                // placeholder="Enter WhatsApp Number"
                                />
                            </InputContainer>
                            {/* } */}
                        </Row>

                        <Row>
                            <InputContainer>
                                <LabelTag>District</LabelTag>
                                <InputTag
                                    style={{
                                        border:
                                            trySubmit & (customerDetails.district === "")
                                                ? "2px solid red"
                                                : "",
                                    }}
                                    type="text"
                                    value={customerDetails.district}
                                    onChange={(e) => onChangeInput("district", e.target.value)}
                                // placeholder="Enter District"
                                />
                            </InputContainer>

                            <InputContainer>
                                <LabelTag>Own Land</LabelTag>
                                <RadioCon>
                                    <Custom>
                                        <InputTag
                                            id="Yes"
                                            style={{ height: "70%", width: "90%", margin: "0" }}
                                            name="ownland"
                                            type="radio"
                                            checked={customerDetails.own_land === "true"}
                                            onChange={() => onChangeInput("own_land", "true")}
                                        />
                                        <LabelTwo
                                            style={{ fontSize: "1rem", color: "#495057" }}
                                            htmlFor="Yes"
                                        >
                                            Yes
                                        </LabelTwo>
                                    </Custom>
                                    <Custom>
                                        <InputTag
                                            id="No"
                                            style={{ height: "70%", width: "90%", margin: "0" }}
                                            name="ownland"
                                            type="radio"
                                            checked={customerDetails.own_land === "false"}
                                            onChange={() => onChangeInput("own_land", "false")}
                                        />
                                        <LabelTwo
                                            style={{ fontSize: "1rem", color: "#495057" }}
                                            id="No"
                                        >
                                            No
                                        </LabelTwo>
                                    </Custom>
                                </RadioCon>
                            </InputContainer>
                        </Row>

                        <Row>
                            <InputContainer>
                                <LabelTag>State</LabelTag>

                                <CustomDropdownContainer ref={StateRef}>
                                    <CustomDropDown
                                        style={{
                                            border:
                                                trySubmit & (customerDetails.state === "")
                                                    ? "2px solid red"
                                                    : "",
                                        }}
                                        onClick={() => setStateActive(!isStateActive)}
                                    >
                                        <Span>
                                            {customerDetails.state
                                                ? customerDetails.state
                                                : "Select State"}
                                        </Span>
                                        <Icon>
                                            <FaAngleDown
                                                style={{
                                                    transform: `rotate(${isStateActive ? "180deg" : "0deg"
                                                        })`,
                                                    height: "100%",
                                                    width: "100%",
                                                }}
                                            />
                                        </Icon>
                                    </CustomDropDown>

                                    {isStateActive && (
                                        <CustomDropDownOptions>
                                            {indianStates.map((state) => (
                                                <CustomOption
                                                    key={state}
                                                    onClick={() => {
                                                        onChangeInput("state", state);
                                                        setStateActive(!isStateActive);
                                                    }}
                                                >
                                                    {state}
                                                </CustomOption>
                                            ))}
                                        </CustomDropDownOptions>
                                    )}
                                </CustomDropdownContainer>
                            </InputContainer>

                            <InputContainer>
                                <LabelTag>Existing Customer</LabelTag>
                                <RadioCon>
                                    <Custom>
                                        <InputTag
                                            id="Yes"
                                            style={{ height: "70%", width: "90%", margin: "0" }}
                                            name="Customer"
                                            type="radio"
                                            checked={customerDetails.customer === "true"}
                                            onChange={() => onChangeInput("customer", "true")}
                                        />
                                        <LabelTwo
                                            style={{ fontSize: "1rem", color: "#495057" }}
                                            htmlFor="Yes"
                                        >
                                            Yes
                                        </LabelTwo>
                                    </Custom>
                                    <Custom>
                                        <InputTag
                                            id="No"
                                            style={{ height: "70%", width: "90%", margin: "0" }}
                                            name="Customer"
                                            type="radio"
                                            checked={customerDetails.customer === "false"}
                                            onChange={() => onChangeInput("customer", "false")}
                                        />
                                        <LabelTwo
                                            style={{ fontSize: "1rem", color: "#495057" }}
                                            id="No"
                                        >
                                            No
                                        </LabelTwo>
                                    </Custom>
                                </RadioCon>
                            </InputContainer>
                        </Row>

                        <Row>
                            <InputContainer>
                                <LabelTag>Pin Code</LabelTag>
                                <InputTag
                                    style={{
                                        border:
                                            trySubmit &
                                                (customerDetails.pincode === "" ||
                                                    customerDetails.pincode.length !== 6)
                                                ? "2px solid red"
                                                : "",
                                    }}
                                    type="number"
                                    value={customerDetails.pincode}
                                    onChange={(e) => onChangeInput("pincode", e.target.value)}
                                // placeholder="Enter Pincode"
                                />
                            </InputContainer>

                            <InputContainer>
                                <LabelTag>Trail Pack </LabelTag>

                                <DivSlider>
                                    <Switch>
                                        <input
                                            type="checkbox"
                                            checked={customerDetails.trail_pack}
                                            onChange={(e) => {
                                                onChangeInput("trail_pack", e.target.checked);
                                                if (!e.target.checked) {
                                                    setSelectedDate(false);
                                                }
                                            }}
                                        />
                                        <span className="slider"></span>
                                    </Switch>

                                    {customerDetails.trail_pack && (
                                        <DatePickerWrapper
                                            style={{
                                                color: "#000",
                                                border:
                                                    trySubmit &
                                                        (customerDetails.trail_pack &&
                                                            customerDetails.trail_pack_given_on === "")
                                                        ? "2px solid red"
                                                        : "",
                                            }}
                                        >
                                            <DatePicker
                                                selected={selectedDate}
                                                onChange={(date) => {
                                                    setSelectedDate(date);
                                                    setTrailData(date);
                                                }}
                                                dateFormat="dd/MM/yyyy"
                                                placeholderText="Select a date"
                                                style={{
                                                    color: "#000",
                                                    margin: "0px",
                                                    height: "100%",
                                                }}
                                            />
                                        </DatePickerWrapper>
                                    )}
                                </DivSlider>
                            </InputContainer>
                        </Row>

                        <Row>
                            <InputContainer style={{ alignItems: "flex-start" }}>
                                <LabelTag>Notes</LabelTag>
                                <TextArea
                                    style={{
                                        border:
                                            trySubmit & (customerDetails.notes === "")
                                                ? "2px solid red"
                                                : "",
                                    }}
                                    value={customerDetails.notes}
                                    onChange={(e) => onChangeInput("notes", e.target.value)}
                                // placeholder="Enter Notes"
                                />
                            </InputContainer>

                            <InputContainer
                                style={{
                                    alignItems: "center",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                }}
                            >
                                <LabelTag style={{ width: '30%' }}>profile Image</LabelTag>

                                <UploadDiv
                                    style={{
                                        border:
                                            trySubmit & (customerDetails.image === "")
                                                ? "2px solid red"
                                                : "",
                                    }}
                                >
                                    {localImage ? (
                                        <ImgLabelTag2>
                                            <ImgTag src={localImage} />
                                        </ImgLabelTag2>
                                    ) : (
                                        <ImgLabelTag
                                            style={{
                                                border: "1px solid #ccc",
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                margin: "0",
                                            }}
                                        >
                                            <FaUserTie />
                                        </ImgLabelTag>
                                    )}

                                    <ImageUploadTAg
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        id="uploadImg"
                                        style={{ color: "#000" }}
                                    />
                                    <ImgLabel htmlFor="uploadImg">
                                        {" "}
                                        <MdFileUpload />{" "}
                                    </ImgLabel>
                                    {/* <UploadBtn type="button" onClick={handleUpload}>
                                        Upload
                                    </UploadBtn> */}
                                </UploadDiv>
                            </InputContainer>
                        </Row>

                        <Row style={{ flexGrow: "1", height: "12rem" }}>
                            <InputContainer style={{ height: "100%" }}>
                                <LabelTag>Additional Images</LabelTag>
                                <UploadDiv2>
                                    {additionalImages &&
                                        additionalImages.map((image, index) => (
                                            <ImgDiv key={index}>
                                                <ImgTag2 src={image} />
                                                <Remove type="button" onClick={() => onRemoveMultipleImg(image)}>
                                                    <IoCloseCircle style={{ padding: '0' }} />
                                                </Remove>
                                            </ImgDiv>

                                        ))
                                    }

                                    <ImageUploadTAg2
                                        type="file"
                                        accept="image/*"
                                        onChange={handleMultipleImgChange}
                                        id="multipleuploadImg"
                                        style={{ color: "#000" }}
                                    />
                                    {additionalImages.length < 3 &&
                                        <ImgLabel2 htmlFor="multipleuploadImg">
                                            <CiSquarePlus />
                                        </ImgLabel2>
                                    }


                                </UploadDiv2>
                            </InputContainer>
                        </Row>

                        <SaveBtn style={{ alignSelf: "flex-end" }} type="submit">
                            Submit
                        </SaveBtn>

                        {uploadImgStatus && <AlertText>{uploadImgStatus}</AlertText>}
                    </CreateNew>
                </CustomContainer>
            </InnerContainer>
        </MainContainer>
    );
};

export default CreateCustomer;
