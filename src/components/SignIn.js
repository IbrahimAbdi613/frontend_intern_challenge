import React from 'react'
import {GoogleLogin, GoogleLogout} from "../config/Auth";
import {login, logout} from "../actions";
import {useDispatch, useSelector} from "react-redux";
import {motion} from 'framer-motion'
import "firebase/firestore";
import firebase from "firebase/app";
import '../stylesheets/SignIn.css'

let SignIn = (props) => {
    const dispatch = useDispatch();
    const db = firebase.firestore();

    function SignInWithLocalStorage() {
        console.log(localStorage.user)
        if (!localStorage.user) {
            let user = {
                Trash: [],
                displayName: '',
                Nominations: [],
                photoURL: 'https://lh3.googleusercontent.com/a-/AOh14Gi70COf3iE9r5aQhaiofWcRct0J4N4f8wkOMCOBJg=s96-c'
            }
            localStorage.setItem("user", JSON.stringify(user))
        }
        else {

            dispatch(login(JSON.parse(localStorage.user)));
        }
    }

    return (
        <div className="loginContainer">
            {!props.user ? (
                <div>
                    <label for="fname">First Name</label>
                    <input type="text" name="firstname" className="SigninInput" placeholder="Your name.." />
                    <label for="lname">Last Name</label>
                    <input type="text" name="lastname" className="SigninInput" placeholder="Your last name.." />
                    <input type="submit" value="Submit" className="SigninButton" onClick={SignInWithLocalStorage} />
                    <button
                        onClick={async () => {
                            try {
                                let userState = await GoogleLogin()
                                dispatch(login(userState));
                                let querySnapshot = await db.collection("userNominations").where("userId", "==", userState.userId).onSnapshot((querySnapshot) => {
                                    querySnapshot.docs.map((doc) => dispatch(login(doc.data())))
                                })
                            }
                            catch (error) {
                                console.error(error);
                            }
                        }}
                        className="Login"
                    >
                        Sign in With Google
                </button>
                </div>
            ) : (
                <motion.button
                    onClick={async () => {
                        try {
                            await GoogleLogout();
                            dispatch(logout());
                        } catch (error) {
                            console.error(error);
                        }
                    }}
                    className="Login"
                    whileHover={{scale: 1.1}}
                >

                    Sign out
                </motion.button>
            )}
        </div>

    )
}

export default SignIn