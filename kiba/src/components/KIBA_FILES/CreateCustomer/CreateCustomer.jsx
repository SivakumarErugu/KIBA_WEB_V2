import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import SideNav from "../SideNav/SideNav";
import Header from "../Header/Header";

import Swal from "sweetalert2";

import { IoIosArrowBack } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";

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
    });
    const [image, setImage] = useState(null);
    const [localImage, setLocalImage] = useState(null);
    const [trySubmit, setTrySubmit] = useState(false);
    const [isCultivationActive, setCultivationActive] = useState(false);
    const cultivationRef = useRef(null);

    const [isStateActive, setStateActive] = useState(false);
    const StateRef = useRef(null);
    const [uploadImgStatus, setUploadImgStatus] = useState("");
    const apiUrl = import.meta.env.VITE_API_URL;

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
        console.log(value);
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

    const handleUpload = async () => {
        console.log(image);
        try {
            if (!image) {
                console.error("Please select an image.");
                return;
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
            console.log("Image uploaded successfully:", data);
            setUploadImgStatus("Image uploaded successfully!");
            const url = data.url;
            console.log("this is", url);
            onChangeInput("image", url);
            // Handle success or update UI
        } catch (error) {
            console.error("Error uploading image:", error);
            // Handle error or show error message
        }
    };

    const ValidateForm = () => {
        let error = false;
        error = Object.values(customerDetails).every((each) => each !== "");
        console.log(error);
        return error;
    };

    const onSubmitForm = async (e) => {
        e.preventDefault();

        setTrySubmit(true);
        console.log(customerDetails);
        let customer = { ...customerDetails };

        const isValid = ValidateForm();

        if (!isValid) {
            Swal.fire({
                icon: "warning",
                text: "Please fill in all the required fields.",
                confirmButtonText: "OK",
            });
            return;
        }

        const url = `${apiUrl}/new/customer`;

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(customer),
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
            } else {
                console.error("Error adding design:", response.statusText);
            }
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    useEffect(() => {
        if (uploadImgStatus) {
            const timer = setTimeout(() => {
                setUploadImgStatus("");
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [uploadImgStatus]);

    const onBack = () => {
        navigate(-1);
    };

    console.log(customerDetails);

    return (
        <MainContainer>
            <SideNav />

            <InnerContainer>
                <Header />

                <CustomContainer>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "0",
                            marginBottom: "0.5rem",
                            height: "2rem",
                        }}
                    >
                        <BackBtn onClick={onBack}>
                            <IoIosArrowBack size={28} />
                        </BackBtn>
                        <Title>Create Customer</Title>
                    </div>

                    <CreateNew onSubmit={onSubmitForm}>
                        <Row>
                            <InputContainer>
                                <LabelTag>First Name :</LabelTag>
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
                                <LabelTag>Last Name :</LabelTag>
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
                                <LabelTag>Cultivation :</LabelTag>

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

                                        <FaAngleDown
                                            style={{
                                                transform: `rotate(${isCultivationActive ? "180deg" : "0deg"
                                                    })`,
                                            }}
                                        />
                                    </CustomDropDown>

                                    {isCultivationActive && (
                                        <CustomDropDownOptions style={{ width: "67.5%" }}>
                                            <CustomOption
                                                onClick={() => {
                                                    onChangeInput("cultivation", "Shrimps");
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
                                <LabelTag>Mobile Number :</LabelTag>
                                <InputTag
                                    style={{
                                        border:
                                            trySubmit & (customerDetails.mobile_number === "")
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
                                <LabelTag>Place :</LabelTag>
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
                                <LabelTag>Same for WhatsApp :</LabelTag>
                                <RadioCon>
                                    <Custom>
                                        <InputTag
                                            id="Yes"
                                            style={{ height: "70%", width: "90%", margin: "0" }}
                                            name="whatsapp"
                                            type="radio"
                                            checked={
                                                customerDetails.same_for_whatsapp ===
                                                "true"
                                            }
                                            onChange={() =>
                                                onChangeInput("same_for_whatsapp", "true")
                                            }
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
                                            name="whatsapp"
                                            type="radio"
                                            checked={
                                                customerDetails.same_for_whatsapp ===
                                                "false"
                                            }
                                            onChange={() =>
                                                onChangeInput(
                                                    "same_for_whatsapp",
                                                    "false"
                                                )
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
                                <LabelTag>City :</LabelTag>
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

                            {/* {customerDetails.is_this_same_as_whatsapp_number === 'false' && */}
                            <InputContainer>
                                <LabelTag>WhatsApp Number :</LabelTag>
                                <InputTag
                                    style={{
                                        border:
                                            trySubmit & (customerDetails.whatsapp_number === "")
                                                ? "2px solid red"
                                                : "",
                                    }}
                                    type="number"
                                    value={customerDetails.whatsapp_number}
                                    onChange={(e) =>
                                        onChangeInput("whatsapp_number", e.target.value)
                                    }
                                    readOnly = {customerDetails.same_for_whatsapp === 'true' ? true : false}
                                    // placeholder="Enter WhatsApp Number"
                                />
                            </InputContainer>
                            {/* } */}
                        </Row>

                        <Row>
                            <InputContainer>
                                <LabelTag>District :</LabelTag>
                                <InputTag
                                    style={{
                                        border:
                                            trySubmit & (customerDetails.zilla === "")
                                                ? "2px solid red"
                                                : "",
                                    }}
                                    type="text"
                                    value={customerDetails.district}
                                    onChange={(e) => onChangeInput("district", e.target.value)}
                                    // placeholder="Enter District"
                                />
                            </InputContainer>

                            <InputContainer
                                style={{ flexDirection: "row", alignItems: "center" }}
                            >
                                <LabelTag>Own Land :</LabelTag>
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
                                <LabelTag>State :</LabelTag>

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

                                        <FaAngleDown
                                            style={{
                                                transform: `rotate(${isStateActive ? "180deg" : "0deg"
                                                    })`,
                                            }}
                                        />
                                    </CustomDropDown>

                                    {isStateActive && (
                                        <CustomDropDownOptions style={{ width: "67.5%" }}>
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

                            <InputContainer
                                style={{ flexDirection: "row", alignItems: "center" }}
                            >
                                <LabelTag> Existing Customer :</LabelTag>
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
                                <LabelTag>PinCode :</LabelTag>
                                <InputTag
                                    style={{
                                        border:
                                            trySubmit & (customerDetails.pincode === "")
                                                ? "2px solid red"
                                                : "",
                                    }}
                                    type="number"
                                    value={customerDetails.pincode}
                                    onChange={(e) => onChangeInput("pincode", e.target.value)}
                                    // placeholder="Enter Pincode"
                                />
                            </InputContainer>

                            <InputContainer
                                style={{ flexDirection: "row", alignItems: "center" }}
                            >
                                <LabelTag>Trail Pack :</LabelTag>
                                <Switch>
                                    <input
                                        type="checkbox"
                                        checked={customerDetails.trail_pack}
                                        onClick={(e) =>
                                            onChangeInput("trail_pack", e.target.checked)
                                        }
                                    />
                                    <span className="slider"></span>
                                </Switch>
                            </InputContainer>
                        </Row>

                        <Row style={{ flexGrow: "1", margin: "0" }}>
                            <InputContainer style={{ alignItems: "flex-start" }}>
                                <LabelTag>Notes :</LabelTag>
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
                                {localImage ? (
                                    <LabelTag>
                                        <ImgTag src={localImage} />
                                    </LabelTag>
                                ) : (
                                    <LabelTag
                                        style={{ display: "flex", justifyContent: "flex-end"}}
                                    >
                                        <LabelTag
                                            style={{
                                                border: "1px solid #ccc",
                                                borderRadius: "50%",
                                                height: "4rem",
                                                width: "4rem",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                margin: "0",
                                            }}
                                        >
                                            {/* {customerDetails.first_name && customerDetails.last_name
                                                ? (
                                                    customerDetails.first_name[0] +
                                                    customerDetails.last_name[0]
                                                ).toUpperCase()
                                                : ""} */}
                                                <FaUserTie size={35}/>
                                        </LabelTag>
                                        
                                    </LabelTag>
                                )}

                                <div
                                    style={{
                                        width: "68%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        background: "#EEF5FF",
                                        padding: "1rem",
                                        borderRadius: "1rem",
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                                    }}
                                >
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        style={{ color: "#000" }}
                                    />
                                    <UploadBtn type="button" onClick={handleUpload}>
                                        Upload
                                    </UploadBtn>
                                </div>
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
