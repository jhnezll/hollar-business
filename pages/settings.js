import React, {useContext, useEffect, useState} from "react";
import {Button, MuiThemeProvider, TextField} from "@material-ui/core";
import Theme from "../styles/MuiTheme";
import Steps from "../components/SignUp/Steps";
import {useRouter} from "next/router";
import fb from "../util/firebase-config";
import SessionContext from "../util/SessionContext";

export default function Settings() {
    const {userProfile} = useContext(SessionContext)
    const router = useRouter();

    const [formData, setFormData] = useState({
        businessName: "",
        desc: "",
        address: "",
        city: "",
        email: "",
        state: "",
        zip: ""
    });

    useEffect(() => {
        fb.firestore().collection("users-businesses").doc(userProfile.uid).get()
            .then(function(doc) {
                if(doc.exists) {
                    setFormData({
                        businessName: doc.data().businessName,
                        description: doc.data().description,
                        address: doc.data().address,
                        city: doc.data().city,
                        email: doc.data().email,
                        state: doc.data().state,
                        zip: doc.data().zip
                    })
                } else {
                    console.log("No document!")
                }
            })
    }, [])

    function handleSubmit() {
        event.preventDefault()
        fb.firestore().collection("users-businesses").doc(userProfile.uid).set({
            businessName: formData.businessName,
            description: formData.description,
            address: formData.address,
            city: formData.city,
            email: formData.email,
            state: formData.state,
            zip: formData.zip
        })
    }

    return(
        <MuiThemeProvider theme={Theme}>
            <div className="h-screen flex justify-center items-center md:bg-gray-50">
                <div className="p-8 md:border border-gray-200 rounded-lg md:shadow-lg max-w-xl w-full text-left bg-white space-y-2">
                    <h1 className="text-4xl font-bold text-center text-gray-900">{formData.businessName}</h1>
                    <form className="pt-2" onSubmit={handleSubmit}>
                        <div className="space-y-4" autoComplete="off">

                            {/*Email*/}
                            <TextField className="w-full" label="Business Name" id="business-name" variant="outlined" onChange={event => setFormData({
                                ...formData,
                                businessName: event.target.value
                            })} value={formData.businessName} required type="text"/>
                            <TextField className="w-full" label="Description" id="description" variant="outlined" onChange={event => setFormData({
                                ...formData,
                                description: event.target.value
                            })} value={formData.description} required type="text" multiline rows={4}/>
                        </div>

                        {/*Bottom of Forum*/}
                        <div className="flex justify-end mt-10 space-x-2">
                                <Button onClick={() => router.push('/dashboard')}>Back</Button>
                                <Button type="submit" variant="contained" color="primary" disableElevation>Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        </MuiThemeProvider>
    )
}