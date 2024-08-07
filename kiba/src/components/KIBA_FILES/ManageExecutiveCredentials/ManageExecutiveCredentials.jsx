import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

import {
    ProfileCon, InnerContainer, CustomContainer, CustomProfile, Title, FieldContainer, LabelTag, H1Tag, InputTag, BackBtn, CustomPart, Title2, SaveBtn,
    EyeIconContainer,TitleDiv
} from './StyledComponents'

import { DotSpinner, DotSpinnerDot } from '../Customers/StyledComponents'

import SideNav from '../SideNav/SideNav'
import KibaContext from '../../../context/KibaContext';
import Header from '../Header/Header'

// ICON IMPORTS
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

import Swal from 'sweetalert2';

const ManageExecutiveCredentials = () => {
    const cookies = new Cookies();
    const navigate = useNavigate()
    const [loader, setLoader] = useState(false)
    

    // EXECUTIVE 
    const [executiveCredentials, setExecutiveCredentials] = useState({})
    const [showExecutivePassword, setShowExecutivePassword] = useState(false)
    const [isChangeCredentialsActive, setChangeCredentialsActive] = useState(false)

    const apiUrl = import.meta.env.VITE_API_URL;

    // GETTING THE Executive DATA FROM ADMIN TABLE
    useEffect(() => {
        const savedToken = cookies.get('KIBAJWTToken');
        setLoader(true)
        const getAdminData = async () => {
            try {
                const url = `${apiUrl}/admin`;
                const options = {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${savedToken}`,
                        'Content-Type': 'application/json',
                    },
                }

                const response = await fetch(url, options)
                const data = await response.json()
                const newData = data.filter(each => each.role == 'Executive')
                setExecutiveCredentials(newData[0])
                setLoader(false)
            } catch {
                console.log('Error fetching Admin Data')
            }
        }

        getAdminData()
    }, [])

    // SAVE EXECUTIVE CREDENTIALS API
    const onSaveExecutiveCredentials = async (id, executiveId, newPassword, e) => {
        e.preventDefault();
        const savedToken = cookies.get('KIBAJWTToken');

        // Prepare the URL and request options
        const url = `${apiUrl}/executive/${id}`;
        const options = {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${savedToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ executive_id: executiveId, password: newPassword })  // Send only the new password
        };

        try {
            const response = await fetch(url, options);
            if (response.ok) {
                console.log('Credentials Updated Successfully!');
                Swal.fire({
                    icon: 'success',
                    text: 'Credentials Updated Successfully!',
                    confirmButtonText: 'OK'
                });
            } else {
                console.error('Error updating password:', response.statusText);
                Swal.fire({
                    icon: 'error',
                    text: 'Failed to update Password. Please try again later.',
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
        }

        // Assuming setChangePasswordActive is a function to close the password change form
        setChangeCredentialsActive(false);
    };

    /// EXECUTIVE 
    const onChangeInput = (key, value) => {
        setExecutiveCredentials(prev => ({
            ...prev,
            [key]: value
        }))
    }

    const onBack = () => {
        navigate(-1)
    }

    return (
        <KibaContext.Consumer>
            {value => {
                const { customersTab, setCustomersTab } = value

                return (
                    <ProfileCon>
                        <SideNav />
                        <InnerContainer>
                            <Header />

                            <CustomContainer>
                                <TitleDiv>
                                    <BackBtn onClick={onBack}><IoIosArrowBack /></BackBtn>
                                    <Title>Manage Executive Credentials</Title>
                                </TitleDiv>

                                {loader ?
                                    <CustomProfile style={{alignItems:'center',justifyContent:'center'}}>
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
                                    </CustomProfile>

                                    :

                                    <CustomProfile>

                                        <CustomPart>
                                            {executiveCredentials &&
                                                <>
                                                    <Title2 style={{ color: '#000' }}>Executive</Title2>
                                                    <FieldContainer>
                                                        <LabelTag>Role :</LabelTag>
                                                        <H1Tag>{executiveCredentials.role}</H1Tag>
                                                    </FieldContainer>

                                                    <FieldContainer>
                                                        <LabelTag>Name :</LabelTag>
                                                        <H1Tag>{executiveCredentials.name}</H1Tag>
                                                    </FieldContainer>

                                                    <FieldContainer>
                                                        <LabelTag>Email :</LabelTag>
                                                        <InputTag type='text' placeholder='Enter Email' value={executiveCredentials.email} />
                                                    </FieldContainer>

                                                    <FieldContainer>
                                                        <LabelTag>Executive ID :</LabelTag>
                                                        <InputTag
                                                            type='text'
                                                            placeholder='Enter Executive ID'
                                                            onChange={(e) => onChangeInput('executive_id', e.target.value)}
                                                            value={executiveCredentials.executive_id}
                                                            readOnly={!isChangeCredentialsActive}
                                                        />
                                                    </FieldContainer>

                                                    <FieldContainer>
                                                        <LabelTag>Password :</LabelTag>
                                                        <InputTag
                                                            type={showExecutivePassword ? 'text' : 'password'}
                                                            placeholder='Enter Password'
                                                            value={executiveCredentials.password}
                                                            onChange={(e) => onChangeInput('password', e.target.value)}
                                                            readOnly={!isChangeCredentialsActive}
                                                        />

                                                        <EyeIconContainer>
                                                            {showExecutivePassword ?
                                                                <FaRegEye style={{ color: 'black' }} onClick={() => setShowExecutivePassword(false)} /> :
                                                                <FaRegEyeSlash style={{ color: 'black' }} onClick={() => setShowExecutivePassword(true)} />}
                                                        </EyeIconContainer>
                                                    </FieldContainer>

                                                    {isChangeCredentialsActive ?
                                                        <SaveBtn
                                                            onClick={(e) => onSaveExecutiveCredentials(executiveCredentials.admin_id, executiveCredentials.executive_id, executiveCredentials.password, e)}>
                                                            Save
                                                        </SaveBtn>
                                                        :
                                                        <SaveBtn onClick={(e) => {
                                                            e.preventDefault()
                                                            setChangeCredentialsActive(!isChangeCredentialsActive)
                                                        }}>Change</SaveBtn>
                                                    }

                                                </>
                                            }

                                        </CustomPart>

                                    </CustomProfile>

                                }

                            </CustomContainer>

                        </InnerContainer>

                    </ProfileCon>
                )

            }}
        </KibaContext.Consumer>
    )
}

export default ManageExecutiveCredentials