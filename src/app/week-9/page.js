import React from "react";
// Import the useUserAuth hook
import { useUserAuth } from "../contexts/AuthContext";

export default function AuthAssignment() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Sign in to Firebase with GitHub authentication
  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  // Sign out of Firebase
  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }


  // Display some of the user's information
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      {user ? (
        <>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <button onClick={handleSignIn}>Sign In with GitHub</button>
      )}
    </div>
  );
}
