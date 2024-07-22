import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
    SideNavContainer,
    ImgTag,
    IconContainer,
    NavOption,
    PTag,
    SettingsCon,
    LogOutBtn,
} from "./StyledComponents";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { MdGroups2 } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import KibaContext from "../../../context/KibaContext";
// import Cookies from "js-cookie";
import Cookies from 'universal-cookie';

const SideNav = () => {
    const navigate = useNavigate();
    const cookies = new Cookies();
    // Function to remove a cookie

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
                // Cookies.remove("KIBAJWTToken");
                cookies.remove('KIBAJWTToken');

                // Optionally clear any other user-related state or context here

                // Redirect to login page
                navigate("/login");
            }
        });
    };

    const onImage = () => {
        navigate("/dashboard");
    } 

    return (
        <KibaContext.Consumer>
            {(value) => {
                const { activeTab, settingsActive, setActiveTab, setSettingsActive } =
                    value;

                const onClickTab = (id) => {
                    setActiveTab(id);
                };

                return (
                    <SideNavContainer>
                            <ImgTag
                                src="https://res.cloudinary.com/dca9sij3n/image/upload/v1719813835/rcip7lurlae11xlrgnio.png"
                                alt="KIBA LOGO"
                                onClick={onImage}
                            />

                        <IconContainer>
                            <Link to="/dashboard" style={{ width: "90%" }}>
                                <NavOption
                                    id="dashboard"
                                    active={activeTab === "Dashboard"}
                                    onClick={() => onClickTab("Dashboard")}
                                >
                                    <TbLayoutDashboardFilled
                                        size={25}
                                        style={{ marginRight: "1rem" }}
                                    />
                                    <PTag active={activeTab === "Dashboard"}>Dashboard</PTag>
                                </NavOption>
                            </Link>
                            <Link to="/customers" style={{ width: "90%" }}>
                                <NavOption
                                    id="Customers"
                                    active={activeTab === "Customers"}
                                    onClick={() => onClickTab("Customers")}
                                >
                                    <MdGroups2 size={25} style={{ marginRight: "0.8rem" }} />
                                    <PTag active={activeTab === "Customers"}>Customers</PTag>
                                </NavOption>
                            </Link>
                        </IconContainer>

                        <SettingsCon>

                            {/* <Link to="/manage-credentials" style={{ width: "90%" }}>
                                <NavOption
                                    id="Settings"
                                    onClick={() => onClickTab("Settings")}
                                    style={{
                                        background: activeTab === "Settings" ? "#212529" : "",
                                        color: activeTab === "Settings" ? "#FFF" : "",
                                    }}
                                >
                                    <IoIosSettings size={35} style={{ marginRight: "0.8rem" }} />
                                    <PTag
                                        style={{ color: activeTab === "Settings" ? "#FFF" : "" }}
                                    >
                                        Manage Credentials
                                    </PTag>
                                </NavOption>
                            </Link> */}

                            {/* <Link style={{ width: "90%" }}>
                                <NavOption
                                    id="Logout"
                                    style={{ background: "#463f3a", margin: "0", padding: "0" }}
                                >
                                    <LogOutBtn type="button" onClick={handleLogout}>
                                        Log Out
                                    </LogOutBtn>
                                </NavOption>
                            </Link> */}

                        </SettingsCon>
                        
                    </SideNavContainer>
                );
            }}
        </KibaContext.Consumer>
    );
};

export default SideNav;
