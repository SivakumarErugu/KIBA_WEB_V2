import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Cookies from 'universal-cookie';

import SideNav from '../SideNav/SideNav'
import Header from '../Header/Header'

import Swal from 'sweetalert2';

import { IoIosArrowBack } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import { MdFileUpload } from "react-icons/md";

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
    IDTag,
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
    CreatedDate,
    Icon,
    DivX,
    DivSlider,
    ImgLabelTag,
    UploadDiv,
    ImageUploadTAg,
    ImgLabel,
    ImgLabelTag2
} from './StyledComponents'


import { DotSpinner, DotSpinnerDot } from '../Customers/StyledComponents'
// import './index.css'

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
    "West Bengal"
];

const CustomerDetailedView = () => {
    const cookies = new Cookies();
    const { id } = useParams();
    const navigate = useNavigate();
    const [customerDetails, setCustomerDetails] = useState({})

    const [image, setImage] = useState(null);
    const [localImage, setLocalImage] = useState(null)
    const [trySubmit, setTrySubmit] = useState(false)
    const [loader, setLoader] = useState(false)
    const [isCultivationActive, setCultivationActive] = useState(false)
    const cultivationRef = useRef(null)

    const [isStateActive, setStateActive] = useState(false)
    const StateRef = useRef(null)
    const [uploadImgStatus, setUploadImgStatus] = useState('')
    const apiUrl = import.meta.env.VITE_API_URL;

    // DROPDOWN OUTSIDE CLICK CONTROL
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (cultivationRef.current && !cultivationRef.current.contains(event.target)) {
                setCultivationActive(false)
            }

            if (StateRef.current && !StateRef.current.contains(event.target)) {
                setStateActive(false)
            }

        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [setCultivationActive]);

    useEffect(() => {
        setLoader(true)
        const savedToken = cookies.get('KIBAJWTToken');

        const getCustomerData = async () => {
            try {
                const url = `${apiUrl}/customer/${id}`;
                const options = {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${savedToken}`, // Include authorization if required
                        'Content-Type': 'application/json'
                    }
                };
                const response = await fetch(url, options);

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Error: ${response.status} - ${errorText}`);
                }

                const data = await response.json();
                setCustomerDetails(data);
                setLocalImage(data.image);
            } catch (error) {
                console.error('Error fetching customer data:', error.message);
                // Optionally set an error state here
            } finally {
                setLoader(false);
            }
        }

        getCustomerData()
    }, [])

    // Convert 'dd/MM/yyyy' string to Date object
    const parseDateString = (dateString) =>
        dateString ? new Date(dateString.split('/').reverse().join('-')) : null;

    // Convert Date object to 'dd/MM/yyyy' string
    const formatDateToString = (date) =>
        date?.toLocaleDateString('en-GB') || '';

    // Initialize state with parsed date
    const [selectedDate, setSelectedDate] = useState(() =>
        parseDateString(customerDetails.trail_pack_given_on)
    );

    // Update selectedDate when customerDetails changes
    useEffect(() => {
        setSelectedDate(parseDateString(customerDetails.trail_pack_given_on));
    }, [customerDetails.trail_pack_given_on]);

    const onChangeInput = (key, value) => {

        if (key === 'same_for_whatsapp' && value === 'true') {
            setCustomerDetails(prev => ({
                ...prev,
                [key]: value,
                whatsapp_number: prev.mobile_number
            }))
        }
        else if (key === 'same_for_whatsapp' && value === 'false') {
            setCustomerDetails(prev => ({
                ...prev,
                [key]: value,
                whatsapp_number: ''
            }))
        } else {
            setCustomerDetails(prev => ({
                ...prev,
                [key]: value
            }))
        }
    }

    const handleFileChange = (event) => {
        const imageFile = event.target.files[0];
        setImage(imageFile);
        setLocalImage(URL.createObjectURL(event.target.files[0]))
    };

    const handleUpload = async () => {
        try {
            if (!image) {
                console.error('Please select an image.');
                return;
            }

            const formData = new FormData();
            formData.append('file', image);

            const res = await fetch(`${apiUrl}/upload`, {
                method: 'POST',
                headers: {
                    // 'Content-Type': 'multipart/form-data'  // Do not set Content-Type header when sending FormData with fetch
                },
                body: formData,
            });

            if (!res.ok) {
                throw new Error('Error uploading image: ' + res.statusText);
            }

            const data = await res.json();
            setUploadImgStatus('Image uploaded successfully!')
            const url = data.url;
            onChangeInput('image', url)
            // Handle success or update UI
        } catch (error) {
            console.error('Error uploading image:', error);
            // Handle error or show error message
        }
    };

    const ValidateForm = () => {
        return Object.values(customerDetails).every(each => each !== '');
    };

    //UPDATE CUSTOMER
    const onSubmitForm = async (e) => {
        e.preventDefault();
        setTrySubmit(true);

        const isValid = ValidateForm(); // Ensure this function returns true if valid

        if (!isValid) {
            Swal.fire({
                icon: 'warning',
                text: 'Please fill in all the required fields.',
                confirmButtonText: 'OK'
            });
            setTrySubmit(false); // Reset submission flag
            return;
        }

        const savedToken = cookies.get('KIBAJWTToken'); // Retrieve token from cookies if required
        const url = `${apiUrl}/customer/${id}`; // Make sure `id` is defined and valid

        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${savedToken}`, // Add Bearer token if needed
            },
            body: JSON.stringify(customerDetails), // Ensure `customerDetails` is correctly defined
        };

        try {
            const response = await fetch(url, options);

            if (response.ok) {
                console.log('Customer Updated Successfully!');
                Swal.fire({
                    icon: 'success',
                    text: 'Customer Updated Successfully!',
                    confirmButtonText: 'OK'
                });
            } else {
                const errorText = await response.text(); // Retrieve detailed error message
                console.error('Error updating customer:', errorText);
                Swal.fire({
                    icon: 'error',
                    text: `Failed to update customer: ${errorText}`,
                    confirmButtonText: 'OK'
                });
            }
        } catch (error) {
            console.error('Error:', error.message);
            Swal.fire({
                icon: 'error',
                text: 'An unexpected error occurred. Please try again later.',
                confirmButtonText: 'OK'
            });
        } finally {
            setTrySubmit(false); // Reset submission flag
        }
    };


    const setTrailData = (date) => {
        setSelectedDate(date);
        onChangeInput('trail_pack_given_on', formatDateToString(date));
    }

    useEffect(() => {
        if (uploadImgStatus) {
            const timer = setTimeout(() => {
                setUploadImgStatus('')
            }, 3000)

            return () => clearTimeout(timer)
        }
    }, [uploadImgStatus])

    const onBack = () => {
        navigate(-1)
    }



    return (
        <MainContainer>
            <SideNav />

            <InnerContainer>
                <Header />

                <CustomContainer>
                    <DivX style={{ display: 'flex', alignItems: 'center', padding: '0', marginBottom: '0.5rem', height: '2rem', }}>
                        <BackBtn onClick={onBack}><IoIosArrowBack /></BackBtn>
                        <Title >Customer Details</Title>
                    </DivX>
                    <IDTag>Customer ID: {customerDetails.ID}</IDTag>
                    <CreatedDate>{customerDetails.created_on}</CreatedDate>
                    {loader ?
                        <CreateNew>
                            <DotSpinner>
                                <DotSpinnerDot />
                                <DotSpinnerDot />
                                <DotSpinnerDot />
                                <DotSpinnerDot />
                                <DotSpinnerDot />
                                <DotSpinnerDot />
                                <DotSpinnerDot />
                                <DotSpinnerDot />
                            </DotSpinner>
                        </CreateNew>
                        :
                        <>
                            {/* <IDTag>Customer ID: {customerDetails.ID}</IDTag> */}
                            {/* <CreatedDate>{customerDetails.created_on}</CreatedDate> */}

                            {customerDetails ?
                                <CreateNew onSubmit={onSubmitForm}>

                                    <Row>

                                        <InputContainer>
                                            <LabelTag>First Name</LabelTag>
                                            <InputTag style={{ border: trySubmit & customerDetails.first_name === '' ? '2px solid red' : '' }}
                                                type='text' value={customerDetails.first_name}
                                                onChange={(e) => onChangeInput('first_name', e.target.value)}
                                                placeholder='Enter First Name'
                                            />
                                        </InputContainer>

                                        <InputContainer>
                                            <LabelTag>Last Name</LabelTag>
                                            <InputTag style={{ border: trySubmit & customerDetails.last_name === '' ? '2px solid red' : '' }}
                                                type='text' value={customerDetails.last_name}
                                                onChange={(e) => onChangeInput('last_name', e.target.value)}
                                                placeholder='Enter Last Name'
                                            />
                                        </InputContainer>

                                    </Row>

                                    <Row>

                                        <InputContainer>
                                            <LabelTag>Cultivation</LabelTag>

                                            <CustomDropdownContainer ref={cultivationRef}>
                                                <CustomDropDown style={{ border: trySubmit & customerDetails.cultivation === '' ? '2px solid red' : '' }}
                                                    onClick={() => setCultivationActive(!isCultivationActive)}>
                                                    <Span>{customerDetails.cultivation ? customerDetails.cultivation : 'Select  Cultivation'}</Span>

                                                    <Icon>
                                                        <FaAngleDown style={{ transform: `rotate(${isCultivationActive ? '180deg' : '0deg'})`, height: '100%', width: '100%' }} />
                                                    </Icon>
                                                </CustomDropDown>

                                                {isCultivationActive && (
                                                    <CustomDropDownOptions >
                                                        <CustomOption onClick={() => {
                                                            onChangeInput('cultivation', 'Shrimps')
                                                            setCultivationActive(!isCultivationActive)
                                                        }}>
                                                            Shrimp
                                                        </CustomOption>
                                                        <CustomOption onClick={() => {
                                                            onChangeInput('cultivation', 'Shrimps')
                                                            setCultivationActive(!isCultivationActive)
                                                        }}>
                                                            Fish
                                                        </CustomOption>
                                                        <CustomOption onClick={() => {
                                                            onChangeInput('cultivation', 'Shrimps')
                                                            setCultivationActive(!isCultivationActive)
                                                        }}>
                                                            Poultry
                                                        </CustomOption>
                                                        <CustomOption onClick={() => {
                                                            onChangeInput('cultivation', 'Shrimps')
                                                            setCultivationActive(!isCultivationActive)
                                                        }}>
                                                            Bovine
                                                        </CustomOption>
                                                    </CustomDropDownOptions>

                                                )}
                                            </CustomDropdownContainer>
                                        </InputContainer>

                                        <InputContainer>
                                            <LabelTag>Mobile Number</LabelTag>
                                            <InputTag style={{ border: trySubmit & customerDetails.mobile_number === '' ? '2px solid red' : '' }}
                                                type='number' value={customerDetails.mobile_number}
                                                onChange={(e) => onChangeInput('mobile_number', e.target.value)}
                                                placeholder='Enter Mobile Number'
                                            />
                                        </InputContainer>

                                    </Row>

                                    <Row>

                                        <InputContainer>
                                            <LabelTag>Place</LabelTag>
                                            <InputTag style={{ border: trySubmit & customerDetails.place === '' ? '2px solid red' : '' }}
                                                type='text' value={customerDetails.place}
                                                onChange={(e) => onChangeInput('place', e.target.value)}
                                                placeholder='Enter Place'
                                            />
                                        </InputContainer>

                                        <InputContainer>
                                            <LabelTag>Same for WhatsApp</LabelTag>
                                            <RadioCon>
                                                <Custom>
                                                    <InputTag id='Yes' name='whatsapp' type='radio'
                                                        style={{ height: "70%", width: "90%", margin: "0" }}
                                                        checked={customerDetails.same_for_whatsapp === 'true'}
                                                        onChange={() => onChangeInput('same_for_whatsapp', 'true')} />
                                                    <LabelTwo style={{ fontSize: '1rem', color: '#495057' }} htmlFor='Yes'>Yes</LabelTwo>
                                                </Custom>
                                                <Custom>
                                                    <InputTag id='No' name='whatsapp' type='radio'
                                                        style={{ height: "70%", width: "90%", margin: "0" }}
                                                        checked={customerDetails.same_for_whatsapp === 'false'}
                                                        onChange={() => onChangeInput('same_for_whatsapp', 'false')} />
                                                    <LabelTwo style={{ fontSize: '1rem', color: '#495057' }} htmlFor='No'>No</LabelTwo>
                                                </Custom>
                                            </RadioCon>
                                        </InputContainer>

                                    </Row>

                                    <Row>

                                        <InputContainer>
                                            <LabelTag>City</LabelTag>
                                            <InputTag style={{ border: trySubmit & customerDetails.city === '' ? '2px solid red' : '' }}
                                                type='text' value={customerDetails.city}
                                                onChange={(e) => onChangeInput('city', e.target.value)}
                                                placeholder='Enter City'
                                            />
                                        </InputContainer>

                                        <InputContainer>
                                            <LabelTag>WhatsApp Number</LabelTag>
                                            <InputTag style={{ border: trySubmit & customerDetails.whatsapp_number === '' ? '2px solid red' : '' }}
                                                type='number' value={customerDetails.whatsapp_number}
                                                onChange={(e) => onChangeInput('whatsapp_number', e.target.value)}
                                                placeholder='Enter WhatsApp Number'
                                                readOnly={customerDetails.same_for_whatsapp === 'true' ? true : false}
                                            />

                                        </InputContainer>
                                        {/* } */}

                                    </Row>

                                    <Row>

                                        <InputContainer>
                                            <LabelTag>District</LabelTag>
                                            <InputTag style={{ border: trySubmit & customerDetails.zilla === '' ? '2px solid red' : '' }}
                                                type='text' value={customerDetails.district}
                                                onChange={(e) => onChangeInput('district', e.target.value)}
                                                placeholder='Enter District'
                                            />
                                        </InputContainer>

                                        <InputContainer >
                                            <LabelTag>Own Land</LabelTag>
                                            <RadioCon>
                                                <Custom>
                                                    <InputTag id='Yes' name='ownland' type='radio'
                                                        style={{ height: "70%", width: "90%", margin: "0" }}
                                                        checked={customerDetails.own_land === 'true'}
                                                        onChange={() => onChangeInput('own_land', 'true')}
                                                    />
                                                    <LabelTwo style={{ fontSize: '1rem', color: '#495057' }} htmlFor='Yes'>Yes</LabelTwo>
                                                </Custom>
                                                <Custom>
                                                    <InputTag id='No' name='ownland' type='radio'
                                                        style={{ height: "70%", width: "90%", margin: "0" }}
                                                        checked={customerDetails.own_land === 'false'}
                                                        onChange={() => onChangeInput('own_land', 'false')} />
                                                    <LabelTwo style={{ fontSize: '1rem', color: '#495057' }} id='No'>No</LabelTwo>
                                                </Custom>
                                            </RadioCon>

                                        </InputContainer>

                                    </Row>

                                    <Row>

                                        <InputContainer>
                                            <LabelTag>State</LabelTag>

                                            <CustomDropdownContainer ref={StateRef}>
                                                <CustomDropDown style={{ border: trySubmit & customerDetails.state === '' ? '2px solid red' : '' }}
                                                    onClick={() => setStateActive(!isStateActive)}>
                                                    <Span>{customerDetails.state ? customerDetails.state : 'Select state'}</Span>

                                                    <Icon>
                                                        <FaAngleDown style={{ transform: `rotate(${isStateActive ? '180deg' : '0deg'})`, height: '100%', width: '100%' }} />
                                                    </Icon>
                                                </CustomDropDown>

                                                {isStateActive && (
                                                    <CustomDropDownOptions >
                                                        {indianStates.map(state => (
                                                            <CustomOption key={state} onClick={() => {
                                                                onChangeInput('state', state)
                                                                setStateActive(!isStateActive)
                                                            }}>
                                                                {state}
                                                            </CustomOption>
                                                        ))}
                                                    </CustomDropDownOptions>

                                                )}
                                            </CustomDropdownContainer>

                                        </InputContainer>

                                        <InputContainer >
                                            <LabelTag> Existing Customer</LabelTag>
                                            <RadioCon>
                                                <Custom>
                                                    <InputTag id='Yes' name='Customer' type='radio'
                                                        style={{ height: "70%", width: "90%", margin: "0" }}
                                                        checked={customerDetails.customer === 'true'}
                                                        onChange={() => onChangeInput('customer', 'true')}
                                                    />
                                                    <LabelTwo style={{ fontSize: '1rem', color: '#495057' }} htmlFor='Yes'>Yes</LabelTwo>
                                                </Custom>
                                                <Custom>
                                                    <InputTag id='No' name='Customer' type='radio'
                                                        style={{ height: "70%", width: "90%", margin: "0" }}
                                                        checked={customerDetails.customer === 'false'}
                                                        onChange={() => onChangeInput('customer', 'false')} />
                                                    <LabelTwo style={{ fontSize: '1rem', color: '#495057' }} id='No'>No</LabelTwo>
                                                </Custom>
                                            </RadioCon>

                                        </InputContainer>

                                    </Row>

                                    <Row>

                                        <InputContainer>
                                            <LabelTag>Pin Code</LabelTag>
                                            <InputTag style={{ border: trySubmit & customerDetails.pincode === '' ? '2px solid red' : '' }}
                                                type='number' value={customerDetails.pincode}
                                                onChange={(e) => onChangeInput('pincode', e.target.value)}
                                                placeholder='Enter Pincode'
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

                                                {
                                                    customerDetails.trail_pack &&
                                                    <DatePickerWrapper
                                                        style={{
                                                            color: '#000',
                                                            border:
                                                                trySubmit & (customerDetails.trail_pack && customerDetails.trail_pack_given_on === "")
                                                                    ? "2px solid red"
                                                                    : ""
                                                        }}
                                                    >
                                                        <DatePicker
                                                            selected={selectedDate}
                                                            onChange={setTrailData}
                                                            dateFormat="dd/MM/yyyy"
                                                            placeholderText="Select a date"
                                                            style={{
                                                                color: '#000',
                                                                margin: '0px',
                                                                height: '100%'
                                                            }}
                                                        />
                                                    </DatePickerWrapper>
                                                }
                                            </DivSlider>



                                        </InputContainer>

                                    </Row>

                                    <Row style={{ flexGrow: '1', margin: '0' }}>

                                        <InputContainer style={{ alignItems: 'flex-start' }}>
                                            <LabelTag>Notes</LabelTag>
                                            <TextArea style={{ border: trySubmit & customerDetails.notes === '' ? '2px solid red' : '' }}
                                                value={customerDetails.notes}
                                                onChange={(e) => onChangeInput('notes', e.target.value)}
                                                placeholder='Enter Notes'
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
                                                <ImgLabelTag2>
                                                    <ImgTag src={localImage} />
                                                </ImgLabelTag2>
                                            ) : (
                                                <ImgLabelTag2
                                                    style={{ display: "flex", justifyContent: "flex-end", marginRight: '0.5rem', width: '30%' }}
                                                >
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

                                                </ImgLabelTag2>
                                            )}

                                            <UploadDiv
                                                style={{
                                                    border:
                                                        trySubmit & (customerDetails.image === "")
                                                            ? "2px solid red"
                                                            : ""
                                                }}
                                            >
                                                <ImageUploadTAg
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleFileChange}
                                                    style={{ color: "#000" }}
                                                />
                                                <ImgLabel htmlFor="uploadImg"> <MdFileUpload /> </ImgLabel>
                                                <UploadBtn type="button" onClick={handleUpload}>
                                                    Upload
                                                </UploadBtn>
                                            </UploadDiv>
                                        </InputContainer>


                                    </Row>

                                    <SaveBtn style={{ alignSelf: 'flex-end' }} type='submit'>Update</SaveBtn>

                                    {
                                        uploadImgStatus && <AlertText>{uploadImgStatus}</AlertText>
                                    }

                                </CreateNew>
                                :
                                null

                            }
                        </>
                    }

                </CustomContainer>

            </InnerContainer>

        </MainContainer>
    )



}

export default CustomerDetailedView

