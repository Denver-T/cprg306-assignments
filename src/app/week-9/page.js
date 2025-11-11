'use client';
import Link from 'next/link';
// Import the useUserAuth hook
import { useUserAuth } from '../context/AuthContext';
import Header from '../components/header';

export default function AuthAssignment() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Sign in to Firebase with GitHub authentication
  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  // Sign out of Firebase
  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Display some of the user's information
  return (
    <main className="min-h-screen bg-slate-900">
      <Header />
      {user ? (
        <>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <div className="flex gap-4">
            <button
              onClick={handleSignOut}
              className="rounded border-slate-400 bg-red-600 px-4 py-2 hover:bg-red-500"
            >
              Sign Out
            </button>
            <Link
              href="/week-9/shopping-list"
              className="rounded border-slate-400 bg-green-600 px-4 py-2 hover:bg-green-500"
            >
              Go to Shopping List
            </Link>
          </div>
        </>
      ) : (
        <>
          <p>Please sign in to continue.</p>
          <button
            onClick={handleSignIn}
            className="rounded bg-blue-600 px-4 py-2 hover:bg-blue-500"
          >
            Sign In with GitHub
          </button>
        </>
      )}
    </main>
  );
}
