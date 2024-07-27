import KibaContext from "../../../context/KibaContext";
import Swal from "sweetalert2";
import Cookies from 'universal-cookie';
import { useState, useEffect, useRef, useContext } from "react";


import {
    CustomProfile,
    HeaderContainer,
    ProfileIcon,
    Span,
    SpanTag,
    PopUp,
    PopUpItem,
    HamburgerDiv,
    HamburgerButton,
    Menu
} from "./StyledComponents";

import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    const { isHeaderPopupOn, setHeaderPopup } = useContext(KibaContext)
    const [popUp, setPopUp] = useState(isHeaderPopupOn)
    const navigate = useNavigate();
    const cookies = new Cookies();
    const popUpRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false);

    // DROPDOWN OUTSIDE CLICK CONTROL
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (popUpRef.current && !popUpRef.current.contains(event.target)) {
                setPopUp(false);
                setHeaderPopup(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        // Clean up event listener
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [setPopUp, setHeaderPopup]);

    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you really want to logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, logout!",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                // Remove the JWT token cookie
                cookies.remove('KIBAJWTToken');


                // Redirect to login page
                navigate("/login");
            }
        });
    };


    const onClickProfile = () => {
        setPopUp(!popUp)
        setHeaderPopup(!popUp);
    };




    return (
        <HeaderContainer>

            <HamburgerDiv>

                <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
                    <GiHamburgerMenu size={30} />
                </HamburgerButton>

                <Menu isOpen={isOpen}>
                    <a href="/dashboard">Dashboard</a>
                    <a href="/customers">Customers</a>
                </Menu>

            </HamburgerDiv>


            <CustomProfile>
                <ProfileIcon ref={popUpRef} onClick={onClickProfile}>
                    <Span >K</Span>
                </ProfileIcon>

                {isHeaderPopupOn && (
                    <PopUp>
                        <div>
                            <Link style={{ color: '#000' }} to='/manage-admin-credentials'><PopUpItem>Manage Admin</PopUpItem></Link>
                            <Link style={{ color: '#000' }} to='/manage-executive-credentials'> <PopUpItem>Manage Executive</PopUpItem> </Link>
                        </div>

                        <PopUpItem onClick={handleLogout} style={{ margin: '0' }}>Log Out</PopUpItem>
                    </PopUp>
                )}
            </CustomProfile>
            
        </HeaderContainer>
    );

};

export default Header;
