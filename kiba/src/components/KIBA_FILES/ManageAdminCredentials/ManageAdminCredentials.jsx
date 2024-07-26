import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

import {
    ProfileCon, InnerContainer, CustomContainer, CustomProfile, Title, FieldContainer, LabelTag, H1Tag, InputTag, Btn, BackBtn, CustomPart, Title2, SaveBtn,
    EyeIconContainer
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

const ManageAdminCredentials = () => {
    const cookies = new Cookies();
    const navigate = useNavigate()
    const [loader, setLoader] = useState(false)
    const [Profile, setProfile] = useState({})
    const [showAdminPassword, setShowAdminPassword] = useState(false)
    const [ChangePasswordActive, setChangePasswordActive] = useState(false)

    const apiUrl = import.meta.env.VITE_API_URL;

    // GETTING THE ADMIN DATA
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
                const newData = data.filter(each => each.role == 'Admin')
                setProfile(newData[0])
                setLoader(false)
            } catch {
                console.log('Error fetching Admin Data')
            }
        }

        getAdminData()
    }, [])

    const onChangeAdminCredentials = async (id, newPassword, e) => {
        e.preventDefault();

        const savedToken = cookies.get('KIBAJWTToken');
        // Prepare the URL and request options
        const url = `${apiUrl}/admin/update`;
        const options = {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${savedToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password: newPassword })  // Send only the new password
        };

        try {
            const response = await fetch(url, options);
            if (response.ok) {
                console.log('Password Updated Successfully!');
                Swal.fire({
                    icon: 'success',
                    text: 'Password Updated Successfully!',
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
        setChangePasswordActive(false);
    };

    const handlePasswordChange = (e) => {
        setProfile({ ...Profile, password: e.target.value });
    };

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
                                <div style={{ display: 'flex', alignItems: 'center', padding: '0', marginBottom: '0.5rem', height: '2rem', }}>
                                    <BackBtn onClick={onBack}><IoIosArrowBack size={28} /></BackBtn>
                                    <Title>Manage Admin Credentials</Title>
                                </div>

                                {loader ?
                                    <CustomProfile style={{ alignItems: 'center', justifyContent: 'center' }}>
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
                                            {Profile &&
                                                <>
                                                    <Title2 style={{ color: '#000' }}>Admin</Title2>
                                                    <FieldContainer>
                                                        <LabelTag>Role :</LabelTag>
                                                        <H1Tag>{Profile.role}</H1Tag>
                                                    </FieldContainer>

                                                    <FieldContainer>
                                                        <LabelTag>Name :</LabelTag>
                                                        <H1Tag>{Profile.name}</H1Tag>
                                                    </FieldContainer>

                                                    <FieldContainer>
                                                        <LabelTag>Email :</LabelTag>
                                                        <InputTag type='text' placeholder='Enter Email' value={Profile.email} readOnly />
                                                    </FieldContainer>

                                                    <FieldContainer >
                                                        <LabelTag>Password :</LabelTag>
                                                        <InputTag
                                                            type={showAdminPassword ? 'text' : 'password'}
                                                            placeholder='Enter Password'
                                                            value={Profile.password}
                                                            onChange={ChangePasswordActive ? handlePasswordChange : null}
                                                            readOnly={!ChangePasswordActive}
                                                        />

                                                        <EyeIconContainer>
                                                            {showAdminPassword ?
                                                                <FaRegEye style={{ color: 'black' }} onClick={() => setShowAdminPassword(false)} /> :
                                                                <FaRegEyeSlash style={{ color: 'black' }} onClick={() => setShowAdminPassword(true)} />}
                                                        </EyeIconContainer>
                                                    </FieldContainer>

                                                    {ChangePasswordActive ? (
                                                        <Btn onClick={(e) => onChangeAdminCredentials(Profile.admin_id, Profile.password, e)}>Save</Btn>
                                                    ) : (
                                                        <Btn
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                setChangePasswordActive(true);
                                                            }}
                                                        >
                                                            Edit
                                                        </Btn>
                                                    )}

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

export default ManageAdminCredentials