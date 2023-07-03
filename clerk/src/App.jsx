import React from "react";
import './App.css'
import { ClerkProvider } from "@clerk/clerk-react";

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {

  return (
    <>
      <ClerkProvider publishableKey={clerkPubKey}>
        <h1>Clerk</h1>
        <div><a href='#'>Registro</a></div>
        <br />
        <div><a href='#'>Login</a></div>
      </ClerkProvider>
    </>
  )
}

export default App
