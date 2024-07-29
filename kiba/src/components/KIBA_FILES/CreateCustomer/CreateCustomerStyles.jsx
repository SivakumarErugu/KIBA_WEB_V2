import styled from "styled-components";

export const AlertText = styled.span`
    color: #70e000;
    font-size: 1.2rem;
    position: absolute;
    bottom: 0.5rem;
`

export const CreateNew = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    height: 93%;
    flex-grow: 1;
    padding: 1rem;
    border-radius: 1rem;
    background: #EEF5FF;
    position: relative;
    margin-top: 0.3rem;
`

export const CustomContainer = styled.div`
    height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    padding: 0.3rem;
`

export const InnerContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #B4D4FF;

    @media screen and (max-width: 320px){
        width: 100%;
        padding: 0.2rem;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        width: 100%;
        padding: 0.2rem;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        width: 100%;
        padding: 0.3rem;
    }

    @media screen and (min-width: 769px) {
        width: 83%;
        padding: 1rem;
    }
`

export const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    background: #B4D4FF;
`
export const Title = styled.h1`
    color: #000;
    width: fit-content;
    height: 100%;
    margin: 0px;
    padding: 0px;
    margin: 0rem 0rem 0rem 0rem;
    display: flex;
    align-items: center;

    @media screen and (max-width: 320px){
        font-size: 0.9rem;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        font-size: 0.9rem;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        font-size: 0.9rem;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        font-size: 1.2rem;
    }

    @media screen and (min-width: 1025px) {
        font-size: 1.3rem;
    }
`
export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    width: 48%;
    position: relative;

    @media screen and (max-width: 320px){
        flex-direction: column;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        flex-direction: column;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        flex-direction: column;
    }

    @media screen and (min-width: 769px){
        flex-direction: row;
    }
`

export const LabelTag = styled.label`
    width: 30%;
    text-align: right;
    margin-right: 1rem;

    @media screen and (max-width: 320px){
        font-size: 0.8rem;
        margin-right: 0rem;
        width: 100%;
        text-align: left;
        padding: 0;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        font-size: 0.8rem;
        margin-right: 0rem;
        width: 100%;
        text-align: left;
        padding: 0;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        font-size: 0.8rem;
        margin-right: 0rem;
        width: 100%;
        text-align: left;
        padding: 0;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        font-size: 0.8rem;
    }

    @media screen and (min-width: 1025px) {
        font-size: 1rem;
    }
`

export const InputTag = styled.input`
    width: 68%;
    height: 70%;
    border-radius: 0.4rem;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    border: 2px solid #ccc;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    

    @media screen and (max-width: 320px){
        height: 1.2rem;
        flex-grow: 1;
        width: 100%;
        font-size: 0.6rem;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        height: 1.2rem;
        flex-grow: 1;
        width: 100%;
        font-size: 0.7rem;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        height: 1.2rem;
        flex-grow: 1;
        width: 100%;
        font-size: 0.8rem;
    }

    @media screen and (min-width: 769px){
        width: 68%;
        height: 70%;
        font-size: 1rem;
    }

`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 8%;
    margin-bottom: 0.7rem;
`
export const RadioCon = styled.div`
    display: flex;
    align-items: center;
    height: 50%;

    @media screen and (max-width: 320px){
        width: 100%;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        width: 100%;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        width: 70%;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        width: 30%;
    }

    @media screen and (min-width: 1025px) {
        width: 20%;
    }
`
export const Custom = styled.div`
    display: flex;
    align-items: center !important;
    height: 100%;
    width: 100%;
    padding: 0;
`
export const LabelTwo = styled.label`
    font-size: 1rem;
    height: 100%;
    padding: 0;
    display: flex;
    align-items: center;
`
export const SaveBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4361ee;
    margin: 0;
    margin-top: 1rem;
    color: #FFF;

    @media screen and (max-width: 320px){
        width: 5rem;
        height: 1.6rem;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        width: 5rem;
        height: 1.6rem;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        width: 5rem;
        height: 1.6rem;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        width: 8rem;
        height: 2rem;
    }

    @media screen and (min-width: 1025px) {
        width: 20%;
        height: fit-content;
    }
`
export const TextArea = styled.textarea`
    height: 100%;
    border-radius: 0.5rem;
    border: 2px solid #ccc;
    padding: 0.5rem 0.5rem 0rem 0.5rem;

    &::-webkit-scrollbar{
        width: 3px;
    }

    @media screen and (max-width: 320px){
        width: 100%;
        height: 5rem;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        width: 100%;
        height: 5rem;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        width: 100%;
        height: 5rem;
    }

    @media screen and (min-width: 769px) {
        height: 100%;
        flex-grow: 1;
    }

`
export const BackBtn = styled.button`
    color: #000;
    border: none; 
    outline: none;
    background: transparent;
    display: flex;
    align-items: center;
    margin-right: 1rem;

    &:focus {
        outline: none; /* Ensure no outline on focus */
    }

    @media screen and (max-width: 320px){
        font-size: 0.6rem;
        margin-right: 0.3rem;
        padding: 0;
        
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        font-size: 0.6rem;
        margin-right: 0.3rem;
        padding: 0;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        font-size: 0.9rem;
        margin-right: 0.3rem;
        padding: 0;
        font-size: 1rem;
    }

    @media screen and (min-width: 769px) {
        height: 100% !important;
        width: fit-content;
        font-size: 1.5rem;
        padding: 0;
    }
`;

export const CustomDropDown = styled.div`
    width: 100%;
    height: 100%;
    border: 2px solid #ccc;
    border-radius: 0.5rem;
    color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 0.5rem 0rem 0.5rem;
    position: relative;
    z-index: 10;
    background: #fff;
    cursor: pointer;
`
export const Span = styled.span`
    color: #000;

    @media screen and (max-width: 320px){
        font-size: 0.6rem;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        font-size: 0.7rem;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        font-size: 0.8rem;
    }

    @media screen and (min-width: 769px) {
        font-size: 1rem;
    }

`

export const CustomDropDownOptions = styled.div`
    width: 100%;
    height: 9rem;
    background: #dee2e6;
    z-index: 10;
    padding: 5px;
    position: absolute;
    margin-top: 0.1rem;
    border-radius: 0.5rem;
    overflow-y: auto;

    @media screen and (max-width: 320px){
        height: 6rem;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        height: 6rem;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        height: 6rem;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        width: 66.5% !important;
    }

    @media screen and (min-width: 1025px) {
        width: 67.5% !important;
    }
`

export const CustomOption = styled.p`
    color: #000;
    background: #FFF;
    border-radius: 0.3rem;
    padding: 0.1rem 0rem 0.1rem 0.5rem;
    cursor: pointer;
    margin: 0.3rem 0rem 0rem 0rem;

    &:hover{
        background: #EEF5FF;
    }

    @media screen and (max-width: 320px){
        padding: 0.2rem;
        font-size: 0.7rem;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        padding: 0.2rem;
        font-size: 0.7rem;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        padding: 0.2rem;
        font-size: 0.7rem;
    }

    @media screen and (min-width: 769px) {
        padding: 0.1rem 0rem 0.1rem 0.5rem;
        font-size: 1rem;
    }
`

export const CustomDropdownContainer = styled.div`
    height: 70%;
    width: 68%;
    
    @media screen and (max-width: 320px){
        width: 100%;
        height: 1.2rem;
        flex-grow: 1;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        width: 100%;
        height: 1.2rem;
        flex-grow: 1;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        width: 100%;
        height: 1.2rem;
        flex-grow: 1;
    }

    @media screen and (min-width: 769px){
        width: 68%;
    }
`

export const ImgTag = styled.img`
    height: 4rem;
    width: 4rem;
    border: 1px solid #ccc;
    border-radius: 50%;

    @media screen and (max-width: 320px){
        height: 2rem;
        width: 2rem;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        height: 2rem;
        width: 2rem;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        height: 2rem;
        width: 2rem;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        height: 3rem;
        width: 3rem;
    }

    @media screen and (min-width: 1025px) {
        height: 4rem;
        width: 4rem;
    }
`
export const UploadBtn = styled.button`
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4895ef;
    color: #fff;

    @media screen and (max-width: 320px){
        width: 2rem;
        height: 1rem;
        font-size: 0.5rem;
        border-radius: 0.3rem;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        width: 2rem;
        height: 1rem;
        font-size: 0.5rem;
        border-radius: 0.3rem;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        width: 2rem;
        height: 1rem;
        font-size: 0.5rem;
        border-radius: 0.3rem;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        width: 3rem;
        height: 1.3rem;
        font-size: 0.5rem;
        border-radius: 0.3rem;
    }

    @media screen and (min-width: 1025px) {
        height: 2rem;
        width: 5rem;
    }
`

export const Switch = styled.label`
    font-size: 17px;
    position: relative;
    display: inline-block;
    align-items: center;
    width: 3em;
    height: 1.5em;

    input {
    opacity: 0;
    width: 0;
    height: 0;
    }

    .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    border: 1px solid #adb5bd;
    transition: .4s;
    border-radius: 30px;

    &:before {
        position: absolute;
        content: "";
        height: 1em;
        width: 1em;
        border-radius: 20px;
        left: 0.27em;
        bottom: 0.25em;
        background-color: #adb5bd;
        transition: .4s;
    }
    }

    input:checked + .slider {
        background-color: #007bff;
        border: 1px solid #007bff;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #007bff;
    }

    input:checked + .slider:before {
        transform: translateX(1.4em);
        background-color: #fff;
    }

    @media screen and (max-width: 320px){
        font-size: 11px;
        input {
        opacity: 0;
        width: 0;
        height: 0;
        }

        .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        border: 1px solid #adb5bd;
        transition: .4s;
        border-radius: 30px;

        &:before {
            position: absolute;
            content: "";
            height: 1em;
            width: 1em;
            border-radius: 50%;
            left: 0.1em;
            bottom: 0.1em;
            background-color: #adb5bd;
            transition: .4s;
        }
        }

        input:checked + .slider {
            background-color: #007bff;
            border: 1px solid #007bff;
        }

        input:focus + .slider {
            box-shadow: 0 0 1px #007bff;
        }

        input:checked + .slider:before {
            transform: translateX(1.4em);
            background-color: #fff;
        }
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        font-size: 11px;
        input {
        opacity: 0;
        width: 0;
        height: 0;
        }

        .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        border: 1px solid #adb5bd;
        transition: .4s;
        border-radius: 30px;

        &:before {
            position: absolute;
            content: "";
            height: 1em;
            width: 1em;
            border-radius: 50%;
            left: 0.1em;
            bottom: 0.1em;
            background-color: #adb5bd;
            transition: .4s;
        }
        }

        input:checked + .slider {
            background-color: #007bff;
            border: 1px solid #007bff;
        }

        input:focus + .slider {
            box-shadow: 0 0 1px #007bff;
        }

        input:checked + .slider:before {
            transform: translateX(1.4em);
            background-color: #fff;
        }
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        font-size: 12px;
        input {
        opacity: 0;
        width: 0;
        height: 0;
        }

        .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        border: 1px solid #adb5bd;
        transition: .4s;
        border-radius: 30px;

        &:before {
            position: absolute;
            content: "";
            height: 1em;
            width: 1em;
            border-radius: 50%;
            left: 0.1em;
            bottom: 0.2em;
            background-color: #adb5bd;
            transition: .4s;
        }
        }

        input:checked + .slider {
            background-color: #007bff;
            border: 1px solid #007bff;
        }

        input:focus + .slider {
            box-shadow: 0 0 1px #007bff;
        }

        input:checked + .slider:before {
            transform: translateX(1.4em);
            background-color: #fff;
        }
    }

    @media screen and (min-width: 769px) {
        input {
    opacity: 0;
    width: 0;
    height: 0;
    }

    .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    border: 1px solid #adb5bd;
    transition: .4s;
    border-radius: 30px;

    &:before {
        position: absolute;
        content: "";
        height: 1em;
        width: 1em;
        border-radius: 20px;
        left: 0.27em;
        bottom: 0.25em;
        background-color: #adb5bd;
        transition: .4s;
    }
    }

    input:checked + .slider {
        background-color: #007bff;
        border: 1px solid #007bff;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #007bff;
    }

    input:checked + .slider:before {
        transform: translateX(1.4em);
        background-color: #fff;
    }
    }

`;

export const DatePickerWrapper  = styled.div`
    border-radius: 1rem;
    z-index: 3;
    padding: 0 !important;
    display: flex;
    align-items: center;

    .react-datepicker-wrapper {
    width: fit-content;
    }

    .react-datepicker__input-container input {
    width: 100%;
    font-size: 16px;
    padding: 0.3rem;
    margin: 0;
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    cursor: pointer;
    }

    @media screen and (max-width: 320px){
        width: 4rem;
        height: 2rem;
        font-size: 1rem;
        margin: 0 !important;
        padding: 0 !important;
        .react-datepicker-wrapper {
        /* width: 70%; */
        width: fit-content;
        }

        .react-datepicker__input-container input {
        width: 100%;
        font-size: 10px;
        padding: 0.3rem;
        margin: 0;
        background: #fff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        text-align: center;
        cursor: pointer;
        }
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        width: 4rem;
        height: 1rem;
        margin: 0 !important;
        padding: 0 !important;

        .react-datepicker-wrapper {
            width: fit-content;
        }

        .react-datepicker__input-container input {
        width: 100%;
        font-size: 8px;
        padding: 0.3rem;
        margin: 0 !important;
        background: #fff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        text-align: center;
        cursor: pointer;
        }
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        width: 4rem;
        /* height: 1rem; */
        height: 100%;

        margin: 0 !important;
        padding: 0 !important;

        .react-datepicker-wrapper {
            width: fit-content;
            padding: 0 !important;
            margin: 0 !important;
        }

        .react-datepicker__input-container input {
        width: 100%;
        font-size: 8px;
        padding: 0.3rem;
        margin: 0 !important;
        background: #fff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        text-align: center;
        cursor: pointer;
        }
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        width: 50%;
    }

`

export const Icon = styled.div`
    width: 1.3rem;
    height: 1.3rem;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #495057;

    @media screen and (max-width: 320px){
        height: 0.7rem;
        width: 0.7rem;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        height: 0.7rem;
        width: 0.7rem;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        height: 0.7rem;
        width: 0.7rem;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        
    }

    @media screen and (min-width: 1025px) {
        
    }

`;

export const DivX = styled.div`
    display: flex;
    align-items: center;
    padding: 0;
    width: fit-content;
    height: 1rem;

    @media screen and (max-width: 320px){
        height: 1.5rem;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        height: 1.5rem;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        height: 1.5rem;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        height: 2rem;
    }

    @media screen and (min-width: 1025px) {
        height: 2rem;
    }
`

export const DivSlider = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 320px){
        width: 100%;
        justify-content: space-between;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        width: 100%;
        justify-content: space-between;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        width: 100%;
        height: 1.2rem;
        flex-grow: 1;
        justify-content: space-between;
    }

    @media screen and (min-width: 769px){
        width: 68%;
        justify-content: space-between;
    }

`

export const UploadDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #EEF5FF;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 68%;


    @media screen and (max-width: 320px){
        padding: 0.1rem;
        border-radius: 0.5rem;
        justify-content: space-between;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        padding: 0.2rem;
        border-radius: 0.5rem;
        justify-content: space-between;
        
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        padding: 0.2rem;
        border-radius: 0.5rem;
        justify-content: space-between;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        padding: 0.2rem;
        border-radius: 0.5rem;
        justify-content: space-between;
    }

    @media screen and (min-width: 1025px) {
        padding: 1rem;
        border-radius: 1rem;
    }
`
export const ImageUploadTAg = styled.input`
    @media screen and (max-width: 320px){
        display: none;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        display: none;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        display: none;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        font-size: 0.5rem;
        max-width: 7rem;
    }

    @media screen and (min-width: 1025px) {
        font-size: 1rem;
        max-width: 10rem;
    }
`

export const ImgLabel = styled.label`
    display: flex;
    align-items: center;

    @media screen and (min-width: 769px) and (max-width:1024px) {
        display: none;
    }

    @media screen and (min-width: 1025px) {
        display: none;
    }
`
export const ImgLabelTag = styled.label`
    width: 30%;
    text-align: right;
    margin-right: 1rem;

    @media screen and (max-width: 320px){
        width: 2rem;
        height: 2rem;

    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        width: 2rem;
        height: 2rem;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        width: 2rem;
        height: 2rem;
    }
    

    @media screen and (min-width: 769px) and (max-width:1024px) {
        width: 3rem;
        height: 3rem;
    }

    @media screen and (min-width: 1025px) {
        width: 4rem;
        height: 4rem;
        font-size: 2rem;
    }
`

export const ImgLabelTag2 = styled.label`
    width: 30%;
    text-align: right;
    margin-right: 1rem;

    @media screen and (max-width: 320px){
        font-size: 0.8rem;
        margin-right: 0.5rem;
        text-align: left;
        padding: 0;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        font-size: 0.8rem;
        margin-right: 0.5rem;
        text-align: left;
        padding: 0;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        font-size: 0.8rem;
        margin-right: 0.7rem;
        text-align: left;
        padding: 0;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        font-size: 0.8rem;
    }

    @media screen and (min-width: 1025px) {
        font-size: 1rem;
    }
`