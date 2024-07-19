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
    background: #f8f9fa;
    position: relative;
`

export const CustomContainer = styled.div`
    height: 92%;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
`

export const InnerContainer = styled.div`
    width: 83%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #FFF;
    padding: 1rem;
`

export const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    background: #FFF;
`
export const Title = styled.h1`
    font-size: 1.5rem;
    color: #000;
    width: fit-content;
    height: 100%;
    margin: 0px;
    padding: 0px;
    margin: 0rem 0rem 0rem 0rem;
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 48%;
    position: relative;
    /* border: 1px solid red; */
`
export const LabelTag = styled.label`
    /* border: 1px solid red; */
    width: 30%;
    text-align: right;
    margin-right: 1rem;
`
export const InputTag = styled.input`
    width: 68%;
    height: 70%;
    font-size: 1rem;
    border-radius: 0.4rem;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    border: 2px solid #ccc;
    /* border: none; */
    /* border-bottom: 2px solid #ccc; */
`
export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 8%;
    /* border: 1px solid red; */
    margin-bottom: 0.7rem;
`
export const RadioCon = styled.div`
    display: flex;
    align-items: center;
    width: 20%;
    height: 50%;
    /* border: 1px solid #000; */
`
export const Custom = styled.div`
    display: flex;
    align-items: center !important;
    height: 100%;
    width: 100%;
    padding: 0;
    /* border: 1px solid red; */
`
export const LabelTwo = styled.label`
    font-size: 1.2rem;
    height: 100%;
    padding: 0;
`
export const SaveBtn = styled.button`
    width: 20%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4361ee;
    margin: 0;
    margin-top: 1rem;
    color: #FFF;
    /* border: 1px solid #000; */
`
export const TextArea = styled.textarea`
    height: 100%;
    flex-grow: 1;
    border-radius: 0.5rem;
    border: 2px solid #ccc;
    padding: 0.5rem 0.5rem 0rem 0.5rem;
    /* border: 1px solid red; */

    &::-webkit-scrollbar{
        width: 3px;
    }
`
export const BackBtn = styled.button`
    height: 100%;
    color: #000;
    padding: 0;
    width: fit-content;
    border: none; 
    outline: none;

    &:focus {
        outline: none; /* Ensure no outline on focus */
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
`
export const Span = styled.span`
    color: #000;
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
`
export const CustomOption = styled.p`
    color: #000;
    background: #FFF;
    border-radius: 0.3rem;
    padding: 0.1rem 0rem 0.1rem 0.5rem;
    cursor: pointer;
    margin: 0.3rem 0rem 0rem 0rem;
`
export const CustomDropdownContainer = styled.div`
    height: 70%;
    width: 68%;    
`
export const ImgTag = styled.img`
    height: 4rem;
    width: 4rem;
    border: 1px solid #ccc;
    border-radius: 50%;
`
export const UploadBtn = styled.button`
    height: 2rem;
    width: 5rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4895ef;
    color: #fff;
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
`;