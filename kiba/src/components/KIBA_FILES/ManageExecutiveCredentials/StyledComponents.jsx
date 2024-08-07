import styled from "styled-components";

export const ProfileCon = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background: #b4d4ff;
`;
export const InnerContainer = styled.div`
    width: 83%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #B4D4FF;
    padding: 1rem;

    @media screen and (max-width: 320px){
        width: 100%;
    }
    @media screen and (min-width: 321px) and (max-width:480px) {
        width: 100%;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        width: 100%;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        
    }

    @media screen and (min-width: 1025px) {
        right: 0.3%;
    }
`;
export const CustomContainer = styled.div`
  height: 92%;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
`;
export const CustomProfile = styled.form`
  display: flex;
  justify-content: center;
  border: 2px solid #ccc;
  height: 93%;
  flex-grow: 1;
  padding: 1rem;
  border-radius: 1rem;
  background: #eef5ff;

    @media screen and (max-width: 320px){
        padding: 0.5rem;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        padding: 0.5rem;
    }
    

    @media screen and (min-width: 481px) and (max-width:768px) {
        padding: 0.5rem;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        
    }

    @media screen and (min-width: 1025px) {
        right: 0.3%;
    }
`;
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
export const FieldContainer = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  margin: 0.5rem;
  height: 2.5rem;
  background: transparent;
  border-radius: 0.5rem;
  padding: 0.3rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

    @media screen and (max-width: 320px){
        padding: 0.1rem;
        
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        padding: 0.1rem;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        padding: 0.1rem;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        
    }

    @media screen and (min-width: 1025px) {
        right: 0.3%;
    }
`;
export const LabelTag = styled.label`
    width: 18%;
    color: #000;
    text-align: right;
    margin-right: 1rem;

    @media screen and (max-width: 320px){
        font-size: 0.8rem;
        width: 29%;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        font-size: 0.8rem;
        width: 29%;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        font-size: 0.8rem;
        width: 29%;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        
    }

    @media screen and (min-width: 1025px) {
        right: 0.3%;
    }
`;
export const H1Tag = styled.h1`
  padding: 0;
  margin: 0;
  width: 78%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 0.3rem;
  font-size: 1rem;
  color: #000;
  background: #fff;
  border-radius: 0.5rem;
  border: 1px solid #ccc;

    @media screen and (max-width: 320px){
        width: 65%;
        height: 90%;
        font-size: 0.8rem;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        width: 65%;
        height: 90%;
        font-size: 0.8rem;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        width: 65%;
        height: 90%;
        font-size: 0.8rem;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        
    }

    @media screen and (min-width: 1025px) {
        right: 0.3%;
    }
`;
export const InputTag = styled.input`
  width: 78%;
  height: 100%;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  color: #000;
  font-size: 1rem;
  font-weight: 700;
  padding-left: 0.3rem;
  background: #fff;

    @media screen and (max-width: 320px){
        width: 65%;
        height: 90%;
        font-size: 0.8rem;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        width: 65%;
        height: 90%;
        font-size: 0.8rem;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        width: 65%;
        height: 90%;
        font-size: 0.8rem;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        
    }

    @media screen and (min-width: 1025px) {
        right: 0.3%;
    }
`;

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

export const CustomPart = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 0.9rem;
  background: transparent;

    @media screen and (max-width: 320px){
        width: 100%;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        width: 100%;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        width: 100%;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        width: 100%;
    }

    @media screen and (min-width: 1025px) {
        right: 0.3%;
    }
`;

export const Title2 = styled.h1`
  color: #000;
  font-size: 1.5rem;
  text-align: center;
  border-bottom: 2px solid #660708;

    @media screen and (max-width: 320px){
        font-size: 1rem;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        font-size: 1rem;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        font-size: 1.2rem;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        font-size: 1.3rem;
    }

    @media screen and (min-width: 1025px) {
        
    }
`;
export const SaveBtn = styled.button`
  min-width: 8rem;
  width: fit-content;
  font-size: 1.1rem;
  background: blue;
  color: #fff;
  position: absolute;
  padding: 0.5rem;
  bottom: 2rem;
`;
export const EyeIconContainer = styled.div`
  position: absolute;
  bottom: 40%;
  right: 1.3rem;
  top: 0.6rem;

  @media screen and (max-width: 320px){
    right: 0.5rem;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    right: 0.5rem;
  }

  @media screen and (min-width: 481px) and (max-width:768px) {
    right: 0.5rem;
  }

  @media screen and (min-width: 769px) and (max-width:1024px) {
    right: 0.5rem;
  }

  @media screen and (min-width: 1025px) {
    right: 0.7rem;
  }
`;

export const TitleDiv = styled.div`
    display: flex;
    align-items: center !important;
    padding: 0;
    margin-bottom: 0.5rem;
    height: 2rem;

`