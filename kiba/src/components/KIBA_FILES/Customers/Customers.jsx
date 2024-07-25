import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// COMPONENT IMPORTS
import SideNav from '../SideNav/SideNav'
import KibaContext from '../../../context/KibaContext';
import Header from '../Header/Header'

import {
    Actions,
    AlertText,
    Checkbox,
    ColumnText,
    Count,
    CreateNewContainer,
    CreateNewBtn,
    CustomContainer,
    CustomInput,
    CustomSpan,
    CancelBtn,
    DeleteBtn,
    DotSpinner,
    DotSpinnerDot,
    FilterBtn,
    FilterDropdown,
    FilterItem,
    HighlightText,
    ImgTag,
    InnerContainer,
    Label,
    MainContainer,
    New,
    PaginationBtn,
    PaginationContainer,
    SearchActionsBar,
    SearchBar,
    SpanTag,
    TableTag,
    Tabs,
    Tab,
    TdTag,
    ThTag,
    TrTag,
    DivX,
    DivY
} from './StyledComponents'


import { BsPlusCircleDotted } from "react-icons/bs";
import { RiSearch2Line } from "react-icons/ri";
import { IoFilter } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlineDeleteSweep } from "react-icons/md";

const Data = [
    {
        "ID": 1,
        "first_name": "John",
        "last_name": "Doe",
        "mobile_number": "1234567890",
        "same_as_whatsapp_number": true,
        "whatsapp_number": "1234567890",
        "cultivation": "Organic Farming",
        "state": "California",
        "zilla": "Los Angeles",
        "city": "Los Angeles",
        "pincode": "90001",
        "place": "Downtown",
        "trail_pack": "yes",
        "notes": "Interested in sustainable practices",
        "image": "https://res.cloudinary.com/dca9sij3n/image/upload/v1719982613/iap6sj7rvy1pytccgkwv.jpg",
        "customer": "yes"
    },
    {
        "ID": 2,
        "first_name": "Jane",
        "last_name": "Smith",
        "mobile_number": "0987654321",
        "same_as_whatsapp_number": false,
        "whatsapp_number": "1122334455",
        "cultivation": "Hydroponics",
        "state": "New York",
        "zilla": "Queens",
        "city": "New York",
        "pincode": "10001",
        "place": "Midtown",
        "trail_pack": "no",
        "notes": "Looking for high yield techniques",
        "image": "https://res.cloudinary.com/dca9sij3n/image/upload/v1719982613/iap6sj7rvy1pytccgkwv.jpg",
        "customer": "no"
    },
    {
        "ID": 3,
        "first_name": "Alice",
        "last_name": "Johnson",
        "mobile_number": "2345678901",
        "same_as_whatsapp_number": true,
        "whatsapp_number": "2345678901",
        "cultivation": "Aquaponics",
        "state": "Florida",
        "zilla": "Miami-Dade",
        "city": "Miami",
        "pincode": "33101",
        "place": "Downtown",
        "trail_pack": "yes",
        "notes": "Interested in fish and plant integration",
        "image": "https://res.cloudinary.com/dca9sij3n/image/upload/v1719982613/iap6sj7rvy1pytccgkwv.jpg",
        "customer": "yes"
    },
    {
        "ID": 4,
        "first_name": "Bob",
        "last_name": "Brown",
        "mobile_number": "3456789012",
        "same_as_whatsapp_number": false,
        "whatsapp_number": "5566778899",
        "cultivation": "Vertical Farming",
        "state": "Texas",
        "zilla": "Harris",
        "city": "Houston",
        "pincode": "77001",
        "place": "Uptown",
        "trail_pack": "no",
        "notes": "Exploring urban farming solutions",
        "image": "https://res.cloudinary.com/dca9sij3n/image/upload/v1719982613/iap6sj7rvy1pytccgkwv.jpg",
        "customer": "no"
    },
    {
        "ID": 5,
        "first_name": "Charlie",
        "last_name": "Davis",
        "mobile_number": "4567890123",
        "same_as_whatsapp_number": true,
        "whatsapp_number": "4567890123",
        "cultivation": "Greenhouse Farming",
        "state": "Illinois",
        "zilla": "Cook",
        "city": "Chicago",
        "pincode": "60007",
        "place": "West Loop",
        "trail_pack": "yes",
        "notes": "Focused on greenhouse productivity",
        "image": "https://res.cloudinary.com/dca9sij3n/image/upload/v1719982613/iap6sj7rvy1pytccgkwv.jpg",
        "customer": "yes"
    },
    {
        "ID": 6,
        "first_name": "Diana",
        "last_name": "Evans",
        "mobile_number": "5678901234",
        "same_as_whatsapp_number": false,
        "whatsapp_number": "6677889900",
        "cultivation": "Conventional Farming",
        "state": "Washington",
        "zilla": "King",
        "city": "Seattle",
        "pincode": "98101",
        "place": "Capitol Hill",
        "trail_pack": "no",
        "notes": "Traditional farming methods",
        "image": "https://res.cloudinary.com/dca9sij3n/image/upload/v1719982613/iap6sj7rvy1pytccgkwv.jpg",
        "customer": "no"
    },
    {
        "ID": 7,
        "first_name": "Edward",
        "last_name": "Franklin",
        "mobile_number": "6789012345",
        "same_as_whatsapp_number": true,
        "whatsapp_number": "6789012345",
        "cultivation": "Permaculture",
        "state": "Oregon",
        "zilla": "Multnomah",
        "city": "Portland",
        "pincode": "97201",
        "place": "Pearl District",
        "trail_pack": "yes",
        "notes": "Sustainable ecosystem design",
        "image": "https://res.cloudinary.com/dca9sij3n/image/upload/v1719982613/iap6sj7rvy1pytccgkwv.jpg",
        "customer": "yes"
    },
    {
        "ID": 8,
        "first_name": "Fiona",
        "last_name": "Garcia",
        "mobile_number": "7890123456",
        "same_as_whatsapp_number": false,
        "whatsapp_number": "7788990011",
        "cultivation": "Urban Farming",
        "state": "Arizona",
        "zilla": "Maricopa",
        "city": "Phoenix",
        "pincode": "85001",
        "place": "Downtown",
        "trail_pack": "no",
        "notes": "Urban agriculture enthusiast",
        "image": "https://res.cloudinary.com/dca9sij3n/image/upload/v1719982613/iap6sj7rvy1pytccgkwv.jpg",
        "customer": "no"
    },
    {
        "ID": 9,
        "first_name": "George",
        "last_name": "Harris",
        "mobile_number": "8901234567",
        "same_as_whatsapp_number": true,
        "whatsapp_number": "8901234567",
        "cultivation": "Biodynamic Farming",
        "state": "Colorado",
        "zilla": "Denver",
        "city": "Denver",
        "pincode": "80201",
        "place": "Cherry Creek",
        "trail_pack": "yes",
        "notes": "Holistic farming practices",
        "image": "https://res.cloudinary.com/dca9sij3n/image/upload/v1719982613/iap6sj7rvy1pytccgkwv.jpg",
        "customer": "yes"
    },
    {
        "ID": 10,
        "first_name": "Hannah",
        "last_name": "Iverson",
        "mobile_number": "9012345678",
        "same_as_whatsapp_number": false,
        "whatsapp_number": "9988776655",
        "cultivation": "Agroforestry",
        "state": "Georgia",
        "zilla": "Fulton",
        "city": "Atlanta",
        "pincode": "30301",
        "place": "Buckhead",
        "trail_pack": "no",
        "notes": "Integrating trees and crops",
        "image": "https://res.cloudinary.com/dca9sij3n/image/upload/v1719982613/iap6sj7rvy1pytccgkwv.jpg",
        "customer": "no"
    },
    {
        "ID": 11,
        "first_name": "Ian",
        "last_name": "Jones",
        "mobile_number": "9123456789",
        "same_as_whatsapp_number": true,
        "whatsapp_number": "9123456789",
        "cultivation": "Regenerative Agriculture",
        "state": "Ohio",
        "zilla": "Franklin",
        "city": "Columbus",
        "pincode": "43201",
        "place": "Short North",
        "trail_pack": "yes",
        "notes": "Restoring soil health",
        "image": "https://res.cloudinary.com/dca9sij3n/image/upload/v1719982613/iap6sj7rvy1pytccgkwv.jpg",
        "customer": "yes"
    },
    {
        "ID": 12,
        "first_name": "Julia",
        "last_name": "King",
        "mobile_number": "2233445566",
        "same_as_whatsapp_number": false,
        "whatsapp_number": "9988665544",
        "cultivation": "Precision Farming",
        "state": "Michigan",
        "zilla": "Franklin",
        "city": "Columbus",
        "pincode": "43201",
        "place": "Short North",
        "trail_pack": "yes",
        "notes": "Restoring soil health",
        "image": "https://res.cloudinary.com/dca9sij3n/image/upload/v1719982613/iap6sj7rvy1pytccgkwv.jpg",
        "customer": "yes"
    }
]

const Customers = () => {
    const FilterDropdownRef = useRef(null)
    const [customersData, setCustomersData] = useState(Data)
    const [SearchText, setSearchText] = useState('')
    const [isFilterActive, setFilterActive] = useState(false)
    const [selectedFilterColumn, setSelectedFilterColumn] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 20; // Number of records per page
    const [selectedRecords, setSelectedRecords] = useState([])
    const [loader, setLoader] = useState(false)
    const [alertText, setAlertText] = useState('')
    const apiUrl = import.meta.env.VITE_API_URL;


    // GETTING THE TOTAL CUSTOMER LIST
    useEffect(() => {
        getCustomersData()
    }, [])

    const getCustomersData = async () => {
        setLoader(true)
        try {
            const url = `${apiUrl}/customers`;
            const options = {
                method: 'GET',
            }

            const response = await fetch(url, options)
            const data = await response.json()
            setCustomersData(data)
            setLoader(false)
        } catch {
            console.log('Error fetching Customers Data')
        }
    }

    // DROPDOWN OUTSIDE CLICK CONTROL
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (FilterDropdownRef.current && !FilterDropdownRef.current.contains(event.target)) {
                setFilterActive(false)
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [setFilterActive]);

    //FILTERING THE DATA BY CONDITION OR KEYWORD 
    const filteredCustomers = () => {
        let result = [...customersData];

        const searchText = SearchText.trim().toLowerCase();
        const snakeCaseColumn = selectedFilterColumn.split(' ')
            .map(word => word.charAt(0).toLowerCase() + word.slice(1).toLowerCase())
            .join('_');

        if (selectedFilterColumn !== '' && searchText !== '') {
            result = result.filter(customer => {
                const cellValue = customer[snakeCaseColumn];
                const stringValue = cellValue !== null && cellValue !== undefined ? cellValue.toString().toLowerCase() : '';
                return stringValue.includes(searchText);
            });
        } else if (searchText !== '') {
            result = result.filter(customer => {
                return Object.values(customer).some(value => {
                    const stringValue = value !== null && value !== undefined ? value.toString().toLowerCase() : '';
                    return stringValue.includes(searchText);
                });
            });
        }

        // Apply pagination
        const startIndex = (currentPage - 1) * pageSize;
        return result.slice(startIndex, startIndex + pageSize);
    };

    //HIGHLIGHTING THE TEXT THAT WE SEARCHED IN THE TABLE
    const highlightText = (text, highlight) => {
        text = String(text);

        if (!highlight || !highlight.trim()) {
            return text;
        }
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return (
            <span>
                {parts.map((part, index) =>
                    part.toLowerCase() === highlight.toLowerCase() ? (
                        <HighlightText key={index} >
                            {part}
                        </HighlightText>
                    ) : (
                        part
                    )
                )}
            </span>
        );
    };

    //CONVERTING THE TEXT TO NORMALCASE FROM SNAKECASE
    const snakeToNormal = (snakeCaseStr) => {
        return snakeCaseStr
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    const totalPages = Math.ceil(customersData.length / pageSize);

    //HANDLING PAGE CHANGE 
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    const onClickSingleDelete = async (ID) => {
        try {
            const url = `${apiUrl}/Customer/${ID}`;
            const options = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            };

            const response = await fetch(url, options);
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Error: ${response.status} - ${errorText}`);
            }

            const result = await response.text();
            getCustomersData()
            setAlertText('Customer Deleted Successfully')
        } catch (error) {
            console.error('Error deleting customer:', error);
            alert('Failed to delete Customer');
        }
    };


    // Use effect to hide the alert after 3 seconds
    useEffect(() => {
        if (alertText) {
            const timer = setTimeout(() => {
                setAlertText('');
            }, 3000); // Display alert for 3 seconds

            // Cleanup the timer if the component unmounts or the alert changes
            return () => clearTimeout(timer);
        }
    }, [alertText]);

    const onClickMultipleDelete = async () => {
        try {
            const idsToDelete = selectedRecords; // Example array of customer IDs to delete

            const url = `${apiUrl}/Delete/Multiple`;
            const options = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ids: idsToDelete })
            };

            const response = await fetch(url, options);
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Error: ${response.status} - ${errorText}`);
            }

            const result = await response.text();
            alert('Customers Deleted Successfully');
            getCustomersData(); // Assuming this function retrieves updated customer data
        } catch (error) {
            console.error('Error deleting customers:', error);
            alert('Failed to delete customers');
        }
    };

    const onSelectRecord = (ID) => {
        let newSelectedRecords
        if (selectedRecords.includes(ID)) {
            newSelectedRecords = selectedRecords.filter(each => each !== ID)
        }
        else {
            newSelectedRecords = [...selectedRecords, ID]
        }
        setSelectedRecords(newSelectedRecords)
    }

    return (
        <KibaContext.Consumer>
            {value => {
                const { customersTab, setCustomersTab } = value

                return (
                    <MainContainer>
                        <SideNav />

                        <InnerContainer style={{ position: 'relative' }}>
                            {alertText &&
                                <AlertText>{alertText}</AlertText>
                            }
                            <Header />

                            <CustomContainer>
                                <CreateNewContainer>
                                    <Count>
                                        <Label>Customers<SpanTag>{customersData.length}</SpanTag></Label>

                                    </Count>


                                </CreateNewContainer>

                                <SearchActionsBar>
                                    <DivX >
                                        <SearchBar>
                                            <RiSearch2Line size={25} style={{ color: '#667085',height:'100%',marginLeft:'0.5rem'}} />
                                            <CustomInput type='text'
                                                placeholder='Search'
                                                value={SearchText}
                                                onChange={(e) => setSearchText(e.target.value)}
                                            />
                                        </SearchBar>

                                        <Actions>

                                            {selectedRecords.length >= 2 &&
                                                <DeleteBtn style={{ marginRight: '1rem', outline: 'none', border: 'none' }}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        onClickMultipleDelete()
                                                    }}
                                                >
                                                    <MdOutlineDeleteSweep size={29} />
                                                </DeleteBtn>
                                            }

                                            {selectedFilterColumn !== '' &&
                                                <ColumnText>
                                                    <CustomSpan>{selectedFilterColumn}</CustomSpan>
                                                    <CancelBtn onClick={() => setSelectedFilterColumn('')}><MdOutlineCancel style={{ color: '#000' }} /></CancelBtn>
                                                </ColumnText>
                                            }

                                            <FilterBtn onClick={() => setFilterActive(!isFilterActive)} ref={FilterDropdownRef}> <IoFilter size={20}/>
                                                {isFilterActive && customersData?.[0] && (
                                                    <FilterDropdown>
                                                        {Object.keys(customersData[0]).map(key => snakeToNormal(key)).map(each => (
                                                            <FilterItem key={each} onClick={() => setSelectedFilterColumn(each)}>{each}</FilterItem>
                                                        ))}
                                                    </FilterDropdown>
                                                )}

                                            </FilterBtn>

                                        </Actions>
                                    </DivX>

                                    <div style={{ padding: '0', height: '3rem', display: 'flex', alignItems: 'center' }}>
                                        <Link to='/create-customer' style={{ margin: '0', padding: '0', display: 'flex', height: '100%', outline: 'none', border: 'none' }}>
                                            <CreateNewBtn>
                                                <BsPlusCircleDotted size={23} />
                                                New Customer
                                            </CreateNewBtn>
                                        </Link>

                                    </div>

                                </SearchActionsBar>

                                {loader ?
                                    <div style={{ height: '30%', flexGrow: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                                    </div>
                                    :

                                    <DivY >
                                        {customersData.length !== 0 ?
                                            <TableTag>
                                                <thead style={{ width: '100%' }}>
                                                    <TrTag style={{ width: '100%', borderBottom: '2px solid #353535' }}>
                                                        <ThTag style={{ width: '2%' }}></ThTag>
                                                        {/* <Checkbox type='checkbox' style={{ border: '1px solid red' }} /> */}
                                                        <ThTag style={{ paddingLeft: '0.5rem' }}>First Name</ThTag>
                                                        <ThTag>Customer ID</ThTag>
                                                        <ThTag>City</ThTag>
                                                        <ThTag>Cultivation</ThTag>
                                                    </TrTag>
                                                </thead>

                                                <tbody>
                                                    {filteredCustomers().map((each, index) => (
                                                        <TrTag key={index} style={{ position: 'relative' }}>
                                                            <TdTag style={{ width: '2%' }}>
                                                                <Checkbox
                                                                    type='checkbox'
                                                                    checked={selectedRecords.includes(each.ID)}
                                                                    style={{ border: '1px solid red' }}
                                                                    onChange={() => onSelectRecord(each.ID)}
                                                                />
                                                            </TdTag>

                                                            <TdTag style={{ display: 'flex', alignItems: 'center' }}>
                                                                <Link style={{ color: '#000', display: 'flex', alignItems: 'center' }} to={`/customer/${each.ID}`}>
                                                                    {each.image ? (
                                                                        <ImgTag src={each.image} alt={each.ID} />
                                                                    ) : (
                                                                        each.first_name && each.last_name ? (
                                                                            <CustomSpan
                                                                                style={{
                                                                                    background: '#fec89a', borderRadius: '50%', height: '2rem', width: '2rem', display: 'flex'
                                                                                    , justifyContent: 'center', alignItems: 'center', color: '#000', margin: '0.4rem 0.4rem 0.4rem 0.4rem'
                                                                                }}>
                                                                                {(each.first_name[0] + each.last_name[0]).toUpperCase()}
                                                                            </CustomSpan>
                                                                        ) : (
                                                                            <CustomSpan></CustomSpan>
                                                                        )
                                                                    )}
                                                                    {highlightText(each.first_name, SearchText)}
                                                                </Link>
                                                            </TdTag>


                                                            <TdTag >
                                                                <Link style={{ color: '#000' }} to={`/customer/${each.ID}`}>
                                                                    {highlightText(each.ID, SearchText)}
                                                                </Link>
                                                            </TdTag>
                                                            <TdTag>
                                                                <Link style={{ color: '#000' }} to={`/customer/${each.ID}`}>
                                                                    {highlightText(each.city, SearchText)}
                                                                </Link>
                                                            </TdTag>
                                                            <TdTag>
                                                                <Link style={{ color: '#000' }} to={`/customer/${each.ID}`}>
                                                                    {highlightText(each.cultivation, SearchText)}
                                                                </Link>
                                                            </TdTag>
                                                            <TdTag style={{ position: 'absolute', right: '0.5%', width: 'fit-content' }}>
                                                                <DeleteBtn
                                                                    onClick={(e) => {
                                                                        e.preventDefault();
                                                                        e.stopPropagation();
                                                                        onClickSingleDelete(each.ID);
                                                                    }}
                                                                >
                                                                    <MdDelete size={20} />
                                                                </DeleteBtn>
                                                            </TdTag>
                                                        </TrTag>

                                                    ))}

                                                </tbody>

                                            </TableTag>
                                            :
                                            <CustomSpan style={{ display: 'flex', alignSelf: 'center' }}>No Records to display</CustomSpan>
                                        }
                                    </DivY>

                                }

                                {customersData.length !== 0 &&
                                    <PaginationContainer>
                                        <PaginationBtn onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}> <MdOutlineArrowBackIosNew size={23} /> </PaginationBtn>
                                        <span style={{ color: '#22223b' }}>{currentPage}/{totalPages}</span>
                                        <PaginationBtn onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}> <MdOutlineArrowForwardIos size={23} /></PaginationBtn>
                                    </PaginationContainer>

                                }

                            </CustomContainer>

                        </InnerContainer>

                    </MainContainer>
                )

            }}
        </KibaContext.Consumer>
    )

}

export default Customers

