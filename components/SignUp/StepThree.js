import TextInput from "../forms/TextInput";
import SelectInput from "../forms/SelectInput";
import Steps from "./Steps";
import React, {useState} from "react";
import {Button, MenuItem, MuiThemeProvider, Select, TextField} from "@material-ui/core";
import Theme from "../../styles/MuiTheme";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers"
import { format } from 'date-fns';
import DateFnsUtils from "@date-io/date-fns";

const StepThree = ({currentStep, onContinue, onBack, formData, setFormData}) => {

    const handleDateChange = (date) => {
        setFormData({
            ...formData,
            dateOfBirth: date,
        })
    };

    return(
        <MuiThemeProvider theme={Theme}>
            <form onSubmit={onContinue}>
                <div className="">

                    <div className="flex justify-between space-x-2">
                        {/*Business Name*/}
                        <TextField className="w-full" variant="outlined" label="Business Name" id="business-name" onChange={event => setFormData({
                            ...formData,
                            businessName: event.target.value
                        })} value={formData.businessName} required type="text"/>
                    </div>
                </div>

                {/*Bottom of Forum*/}
                <div className="flex justify-between items-center mt-10">
                    <Steps step={currentStep + 1} totalSteps={3}/>
                    <div className="flex justify-between space-x-2">
                        {/*<button type="button" onClick={onBack}*/}
                        {/*        className="inline-flex items-center text-gray-700 px-4 py-2 border border-transparent text-base font-medium rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">*/}
                        {/*    Back*/}
                        {/*</button>*/}
                        {/*<button type="submit"*/}
                        {/*        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium*/}
                        {/*rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none*/}
                        {/*focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">*/}
                        {/*    Continue*/}
                        {/*</button>*/}
                        <Button onClick={onBack}>Back</Button>
                        <Button type="submit" variant="contained" color="primary" disableElevation>Create Account</Button>
                    </div>
                </div>
            </form>
        </MuiThemeProvider>
    )
}

export default StepThree