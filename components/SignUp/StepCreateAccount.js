import Steps from "./Steps";
import React, {useContext, useEffect, useState} from "react";
import {CircularProgress, MuiThemeProvider} from "@material-ui/core";
import Theme from "../../styles/MuiTheme";
import fb from "../../util/firebase-config";
import SessionContext from "../../util/SessionContext";
import {useRouter} from "next/router";

const StepCreateAccount = ({currentStep, onContinue, onBack, formData, setFormData}) => {
    const router = useRouter()

    useEffect(() => {
        //Create Account
        fb.auth().createUserWithEmailAndPassword(formData.email, formData.password).then(onContinue(event))
    }, []);

    return(
        <MuiThemeProvider theme={Theme}>
            <div className="flex justify-center items-center -mt-8">
                <div className="text-center space-y-4">
                    <CircularProgress/>
                    <h1><span className="capitalize">{formData.name}</span>, we're creating your account!</h1>
                </div>
            </div>
        </MuiThemeProvider>
    )
}

export default StepCreateAccount