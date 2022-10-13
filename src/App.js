
import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, OAuthProvider, signInWithPopup, signOut, TwitterAuthProvider } from "firebase/auth";
import app from './firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth(app)

function App() {
  const [user, setUser] = useState({})

  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()
  const twitterProvider = new TwitterAuthProvider()
  const yahooProvider = new OAuthProvider('yahoo.com')

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user);
      })
      .catch((error) => {
        console.error('error:', error);
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => { setUser({}) })
      .catch(() => {
        setUser({})
      })
  }

  const handleGitHubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleTwitterSignIn = () => {
    signInWithPopup(auth, twitterProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleYahooSignIn = () => {
    signInWithPopup(auth, yahooProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      })
  }


  return (
    <div className="App">
      {user.uid ?
        <button onClick={handleSignOut}>Sign Out</button>
        :
        <>
          <button onClick={handleGoogleSignIn}>Google sign in</button>
          <button onClick={handleGitHubSignIn}>Git Hub</button>
          <button onClick={handleTwitterSignIn}>Twitter</button>
          <button onClick={handleYahooSignIn}>Yahoo Sign In</button>
        </>
      }
      {user.uid &&
        <div>
          <h3> User name: {user.displayName}</h3>
          <p>Email Address: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      }
    </div>
  );
}

export default App;
