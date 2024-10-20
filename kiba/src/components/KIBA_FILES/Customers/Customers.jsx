import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

// COMPONENT IMPORTS
import SideNav from '../SideNav/SideNav'
import KibaContext from '../../../context/KibaContext';
import Header from '../Header/Header'

// STYLES
import {
    Actions, AlertText, Checkbox, CreateNewBtn, CustomContainer, CustomInput, CustomSpan,
    DeleteBtn, DivX, DivY, DotSpinner, DotSpinnerDot, HighlightText, ImgTag, InnerContainer,
    Label, MainContainer, MulDeleteBtn, PaginationBtn, PaginationContainer, SearchActionsBar,
    SearchBar, Span, SpanTag, TableTag, TdTag, TdTagCheckbox, TdTagDelete, ThTag, TrTag
} from './StyledComponents'

// ICON IMPORTS
import { BsPlusCircleDotted } from "react-icons/bs";
import { RiSearch2Line } from "react-icons/ri";
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
    const navigate = useNavigate()
    const cookies = new Cookies();
    const [customersData, setCustomersData] = useState(Data)
    const [SearchText, setSearchText] = useState('')
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
        const savedToken = cookies.get('KIBAJWTToken');
        setLoader(true);
        try {
            const url = `${apiUrl}/customers`;
            const options = {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${savedToken}`,
                    'Content-Type': 'application/json' // Optional: ensure the content type is set to JSON
                }
            };

            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setCustomersData(data);
        } catch (error) {
            console.log('Error fetching Customers Data:', error.message);
        } finally {
            setLoader(false);
        }
    };

    //FILTERING THE DATA BY CONDITION OR KEYWORD 
    const filteredCustomers = () => {
        // let result = [...customersData];

        const searchText = SearchText.trim().toLowerCase();

        const searchTextsArray = searchText.split(' ')


        const filterTable = (data, searchTextsArray) => {
            return data.filter(item => {
                return searchTextsArray.every((searchText) => {
                    if (searchText === undefined || searchText === null) return true;
                    return Object.values(item).some(value => {
                        return value !== null && value !== undefined && value.toString().toLowerCase().includes(searchText.toString().toLowerCase());
                    });
                });
            });
        };

        const result = filterTable([...customersData], searchTextsArray);


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

    const totalPages = Math.ceil(customersData.length / pageSize);

    //HANDLING PAGE CHANGE 
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const onClickSingleDelete = async (ID) => {
        const savedToken = cookies.get('KIBAJWTToken');
        try {
            const url = `${apiUrl}/Customer/${ID}`;
            const options = {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${savedToken}`,
                    'Content-Type': 'application/json',
                }
            };

            const response = await fetch(url, options);

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Error: ${response.status} - ${errorText}`);
            }

            // Assuming the API returns a status or message in text format
            const result = await response.text();

            // Refresh the data
            await getCustomersData();

            // Notify the user
            setAlertText('Customer Deleted Successfully');
        } catch (error) {
            console.error('Error deleting customer:', error);
            setAlertText('Failed to delete Customer'); // Use setAlertText to show error message
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
        const savedToken = cookies.get('KIBAJWTToken');
        try {
            const idsToDelete = selectedRecords; // Array of customer IDs to delete

            const url = `${apiUrl}/Customers/Delete/Multiple`; // Ensure this endpoint matches your server's route
            const options = {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${savedToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ids: idsToDelete })
            };

            const response = await fetch(url, options);

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Error: ${response.status} - ${errorText}`);
            }

            // If the server returns JSON, parse it. If not, keep text response.
            const result = await response.text();

            // Notify the user
            alert('Customers Deleted Successfully');

            // Refresh the customer data
            await getCustomersData();
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

    const onClickCreateNew = () => {
        navigate('/create-customer')
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
                                <Label>Customers<SpanTag>{customersData.length}</SpanTag></Label>

                                <SearchActionsBar>
                                    <DivX >
                                        <SearchBar>
                                            <RiSearch2Line size={25} style={{ color: '#667085', height: '100%', }} />
                                            <CustomInput type='text'
                                                placeholder='Search'
                                                value={SearchText}
                                                onChange={(e) => setSearchText(e.target.value)}
                                            />
                                        </SearchBar>

                                        <Actions>

                                            {selectedRecords.length >= 2 &&
                                                <MulDeleteBtn
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        onClickMultipleDelete()
                                                    }}
                                                >
                                                    <MdOutlineDeleteSweep size={29} />
                                                </MulDeleteBtn>
                                            }

                                        </Actions>
                                    </DivX>

                                    <CreateNewBtn type='button' onClick={onClickCreateNew}>
                                        <BsPlusCircleDotted size={23} />
                                        <Span>New Customer</Span>
                                    </CreateNewBtn>

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
                                                        <TdTagCheckbox ></TdTagCheckbox>
                                                        <ThTag style={{ paddingLeft: '0.5rem' }}>First Name</ThTag>
                                                        <ThTag>Customer ID</ThTag>
                                                        <ThTag>City</ThTag>
                                                        <ThTag>Cultivation</ThTag>
                                                    </TrTag>
                                                </thead>

                                                <tbody>
                                                    {filteredCustomers().map((each, index) => (
                                                        <TrTag key={index} style={{ position: 'relative' }}>
                                                            <TdTagCheckbox>
                                                                <Checkbox
                                                                    type='checkbox'
                                                                    checked={selectedRecords.includes(each.ID)}
                                                                    style={{ border: '1px solid red' }}
                                                                    onChange={() => onSelectRecord(each.ID)}
                                                                />
                                                            </TdTagCheckbox>

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
                                                            <TdTagDelete >
                                                                <DeleteBtn
                                                                    onClick={(e) => {
                                                                        e.preventDefault();
                                                                        e.stopPropagation();
                                                                        onClickSingleDelete(each.ID);
                                                                    }}
                                                                >
                                                                    <MdDelete />
                                                                </DeleteBtn>
                                                            </TdTagDelete>
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

