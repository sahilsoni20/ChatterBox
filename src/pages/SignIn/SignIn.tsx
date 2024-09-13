import type { AuthProvider } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { firebaseAuth } from "../../firebase/firebaseConfig";
import toast from "react-hot-toast";
import { useUserStore } from "../../hooks/useUserStore";
import { ButtonWrapper, Wrapper, TextWrapper, Container } from "./Style";
import { useState } from "react";

export default function Signin() {
  const { currentUser } = useUserStore();
  const [loading, setLoading] = useState(false);

  const handleSignIn = (provider: AuthProvider) => {
    setLoading(true);
    signInWithPopup(firebaseAuth, provider)
      .then(() => {
        console.log("User signed in successfully!");
      })
      .catch(() => {
        toast.error("Something went wrong!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (currentUser) return <Navigate to="/" />;

  return (
    <Container>
      <img src="/signin.jpeg" alt="Chat pic" />
      <Wrapper>
        <TextWrapper>
          <h1>ChatterBox</h1>
          <h2>
            Experience seamless conversations with our secure, fast, and fun
            messaging platform. Your favorite people are just a tap away.
          </h2>
        </TextWrapper>
        <ButtonWrapper>
          <button
            disabled={loading}
            onClick={() => handleSignIn(new GoogleAuthProvider())}
          >
            Sign In with Google
          </button>
          <a href="https://github.com/sahilsoni20" target="_blank">
            Built and desgin by Sahil Soni
          </a>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
}
