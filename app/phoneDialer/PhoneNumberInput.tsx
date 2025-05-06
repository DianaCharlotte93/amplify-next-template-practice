
import {
    Control,
    FieldValues,
    Controller,
    FieldErrors,
    UseFormSetValue,
} from 'react-hook-form';
import PhoneInput, { CountryData } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import libphonenumber from 'google-libphonenumber';
import { useState } from 'react';

// Define props for the PhoneInput component
interface PhoneInputProps {
    id: string; // Input identifier for referencing and rendering
    control: Control<FieldValues, any>; // React Hook Form's 'control' prop for form communication
    errors: FieldErrors;  // React Hook Form's 'errors' prop for validation messages
    setValue: UseFormSetValue<FieldValues>;  // React Hook Form's 'setValue' prop for dynamic input value setting
    isSubmitted: boolean; // Flag indicating form submission status
}

const [phoneNumberData, setPhoneNumberData] = useState<CountryData>({
    name: 'Canada',
    dialCode: '+1',
    countryCode: 'ca',
    format: '+. (...)...-....',
});

//validates number based on country info
const validatePhoneNumber = ( value: string, inputInformation: CountryData) => {
    let isValid = true;
    const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();

    //extracts number minus country code
    const phoneNumber = value.substring(inputInformation.dialCode.length);

    //get length of example number based on country code for validation
    const exampleNumberLengthByCountryCode = phoneUtil
        .getExampleNumber(inputInformation.countryCode)
        .getNationalNumber()
        ?.toString().length;

    //check if input length matches example length
    if (phoneNumber.length !== exampleNumberLengthByCountryCode){
        return false;
    }

    return isValid;
}