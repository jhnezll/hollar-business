import Steps from "./Steps";
import React, {useContext, useEffect, useState} from "react";
import {CircularProgress, MuiThemeProvider} from "@material-ui/core";
import Theme from "../../styles/MuiTheme";
import fb from "../../util/firebase-config";
import SessionContext from "../../util/SessionContext";
import {useRouter} from "next/router";

const StepSendToDatabase = ({currentStep, onContinue, onBack, formData, setFormData}) => {
    const router = useRouter()
    const {userProfile} = useContext(SessionContext)

    useEffect(() => {
        if (userProfile.uid) {
            fb.firestore().collection("users-businesses").doc(userProfile.uid).set({
                name: formData.name,
                email: formData.email,
                address: formData.address,
                city: formData.city,
                state: formData.state,
                zip: formData.zip
            })
            console.log(userProfile.uid)
            router.push("/dashboard")
        } else {
            console.log("didnt get it")
        }
    }, [userProfile.uid])


    return(
        <MuiThemeProvider theme={Theme}>
            <div className="flex justify-center items-center -mt-8">
                <div className="text-center space-y-4">
                    <CircularProgress/>
                    <h1><span className="capitalize">Syncing account, {formData.name}</span></h1>
                </div>
            </div>
        </MuiThemeProvider>
    )
}

export default StepSendToDatabase