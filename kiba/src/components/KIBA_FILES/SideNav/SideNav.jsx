import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
    SideNavContainer,
    ImgTag,
    IconContainer,
    NavOption,
    PTag,
    HamburgerDiv,
    HamburgerButton,
    Menu
} from "./StyledComponents";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { MdGroups2 } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

import KibaContext from "../../../context/KibaContext";

const SideNav = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    console.log(isOpen)


    const onImage = () => {
        navigate("/dashboard");
    }

    return (
        <KibaContext.Consumer>
            {(value) => {
                const { activeTab, setActiveTab } = value;

                const onClickTab = (id) => {
                    setActiveTab(id);
                };

                return (
                    <>

                        <SideNavContainer>

                            <>
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
                            </>

                        </SideNavContainer>

                    </>
                );
            }}
        </KibaContext.Consumer>
    );
};

export default SideNav;
