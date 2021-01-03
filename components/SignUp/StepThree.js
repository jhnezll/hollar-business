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

    const abrvStates = [
        'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA',
        'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA',
        'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
        'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
        'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'
    ];

    return(
        <MuiThemeProvider theme={Theme}>
            <form onSubmit={onContinue}>
                {/*Form*/}
                <div className="space-y-2">

                    {/*Business Name*/}
                    <div>
                        <TextField className="w-full" variant="outlined" label="Business Name" id="business-name" onChange={event => setFormData({
                            ...formData,
                            name: event.target.value
                        })} value={formData.name} required type="text"/>
                    </div>
                    {/*Address*/}
                    <div>
                        <TextField className="w-full" variant="outlined" label="Address" id="address" onChange={event => setFormData({
                            ...formData,
                            address: event.target.value
                        })} value={formData.address} required type="text"/>
                    </div>

                    <div className="w-full flex space-x-2">
                        {/*City*/}
                        <TextField variant="outlined" label="City" id="city" onChange={event => setFormData({
                            ...formData,
                            city: event.target.value
                        })} value={formData.city} required type="text"/>

                        {/*State*/}
                        <Select variant="outlined" id="state" value={formData.state} onChange={event => setFormData({
                            ...formData,
                            state: event.target.value
                        })} required>
                            {abrvStates.map(state =>
                                <MenuItem value={state}>{state}</MenuItem>
                            )}
                        </Select>

                        {/*Zip Code*/}
                        <TextField variant="outlined" label="Zip Code" id="zip" onChange={event => setFormData({
                            ...formData,
                            zip: event.target.value
                        })} value={formData.zip} required type="text"/>
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