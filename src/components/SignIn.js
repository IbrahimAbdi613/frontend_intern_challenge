import React from 'react'
import {GoogleLogin, GoogleLogout} from "../config/Auth";
import {login, logout} from "../actions";
import {useDispatch} from "react-redux";
import {motion} from 'framer-motion'
import "firebase/firestore";
import firebase from "firebase/app";
import '../stylesheets/SignIn.css'

let SignIn = (props) => {
    const dispatch = useDispatch();
    const db = firebase.firestore();
    return (
        <div className="loginContainer">
            {(!props.user || localStorage.user) ? (
                <div>
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