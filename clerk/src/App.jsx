import React from "react";
import './App.css'
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

function Welcome() {
  return <div>¡Bienvenid@ a mi app!</div>;
}

function App() {

  return (
    <>
      <ClerkProvider publishableKey={clerkPubKey}>
        <h1>Clerk</h1>
        <div><a href='#'>Registro</a></div>
        <br />
        <div><a href='#'>Login</a></div>
        <SignedIn>
          {/* Esto solo lo ven usuarios logeados */}
          <Welcome />
          <div 
          style={{
            display: "flex", 
            justifyContent: "center",
            margin: "10px auto"
            }}>
          <div style={{ marginRight: "10px"}}>Perfil:</div>
            <UserButton />
          </div>
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </ClerkProvider>
    </>
  )
}

export default App
