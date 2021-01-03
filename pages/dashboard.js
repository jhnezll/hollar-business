import React, {useContext, useEffect, useState} from "react";
import SessionContext from "../util/SessionContext";
import PageLayout from "../components/PageLayout";
import fb from "../util/firebase-config";
import BusinessCard from "../components/BusinessCard";
import {Typography} from "@material-ui/core";

function useAccounts() {
    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        fb.firestore().collection("users-businesses").onSnapshot((snapshot => {
            const newAccounts = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setAccounts(newAccounts)
        }))
    }, [])

    return accounts
}


export default function Dashboard() {
    const {userProfile} = useContext(SessionContext)
    const accounts = useAccounts()

    return(
        <PageLayout title="Dashboard">
            <div className="h-screen flex justify-center items-center px-12 bg-gray-50">
                <div className="text-center flex space-x-10">

                </div>
            </div>
        </PageLayout>

    )
}