import { useState } from "react";
import PersonalData from "./steps/personal-data.component";
import DeliveryAddress from "./steps/delivery-address.component";
import PaymentData from "./steps/payment-data.component";
import FormStepper from "./stepper/stepper.component";
import { useForm } from "react-hook-form";

const initialData = {
    personalData: {
        name: "",
        lastName: "",
        email: "",
    },
    deliveryAddress: {
        address: "",
        apartment: "",
        city: "",
        province: "",
        zipCode: "",
    },
    paymentData: {
        cardNumber: "",
        cardName: "",
        expirationDate: "",
        securityCode: "",
    }
};

const FormManager = () => {
    const { handleSubmit } = useForm();

    const [ data, setData ] = useState(initialData);

    const handleData = (newData: any) => {
        setData((prevData) => ({ ...prevData, ...newData }));
    };

    const [ activeStep, setActiveStep ] = useState(1);

    const handleNextStep = () => {
        if(activeStep >= 3){
            return;
        } else{
            setActiveStep(activeStep + 1);
        }
    }

    const handlePrevStep = () => {
        if (activeStep <= 1) {
            return;
        } else {
            setActiveStep(activeStep - 1);
        }
    }

    const submitData = async () => {
        try{
            console.log('FINAL SUBMIT');
        } catch{
            // agregar snackbar
        }
    }

    return(
        <>
            <FormStepper activeStep={activeStep - 1}></FormStepper>
            {activeStep === 1 && <PersonalData data={data.personalData} updateData={handleData} handleNextStep={handleNextStep} activeStep={activeStep} />}
            {activeStep === 2 && <DeliveryAddress data={data.deliveryAddress} updateData={handleData} handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} activeStep={activeStep} />}
            {activeStep === 3 && <PaymentData data={data.paymentData} updateData={handleData} handlePrevStep={handlePrevStep} activeStep={activeStep} />}
        </>
    )
}

export default FormManager;