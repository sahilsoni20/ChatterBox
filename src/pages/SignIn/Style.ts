import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  gap: 80px;
  display: flex;
  width: 100%;
  aligin-items: center;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #6d4f7e, #a18cd1);
  height: 100vh;
  img {
    width: 500px;
    height: 500px;
    border-radius: 2rem;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }

  @media screen and (max-width: 1110px) {
    gap: 40px;
  }

  @media screen and (max-width: 1060px) {
    flex-direction: column;
    gap: 10px;
  }

  @media screen and (max-width: 1024px) {
    height: 100vh;
    gap: 30px;
    img {
      width: 400px;
      height: 400px
    }
  }

  @media screen and (max-width: 580px) {
    gap: 50px;
    text-align: center;
    img {
      width: 300px;
      height: 300px;
    }
  }

  @media screeen and (max-width: 400px) {
    gap: 0px;
  }
`;

export const Wrapper = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: column;
`;

export const TextWrapper = styled.div`
  gap: 20px;
  max-width: 500px;
  display: flex;
  flex-direction: column;

  h1 {
    color: white;
    font-size: 3rem;
    font-weight: 500;

    @media screen and (max-width: 580px) {
      font-size: 1.8rem;
    }
  }

  h2 {
    color: #fefcff;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.5;
    
    @media screen and (max-width: 580px) {
      font-size: 1rem;
    }
  }
`;

export const ButtonWrapper = styled.div` 
    gap: 30px;
    display: flex;
    flex-direction: column;
    text-align: center;

    button {
        border: none;
        font-size: 1.1rem;
        color: white;
        letter-spacing: 0.5px;
        font-weight: 500;
        position: relative;
        z-index: 0;
        padding: 10px;
        border-radius: 5px;
        background-image: linear-gradient(to right, #9b6dcb, #fbc4d0);
        cursor: pointer;
        transition: background-color 0.2s ease;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

        &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background-image: linear-gradient(to right, #a18cd1, #fbc2eb);
            border-radius: inherit;
            z-index: -1;
            transition: opacity 0.2s ease;
            opacity: 0;
        }

        &:before {
            opacity: 1;
        }

        @media screen and (max-width: 580px) {
            width: 300px;
            margin: auto;
            font-size: 1rem;
        }
    }

    a {
        color: lavender;
        transition: all 0.2s ease;

        &:hover {
            color: #dfc5fe;
        }
    }
`;
