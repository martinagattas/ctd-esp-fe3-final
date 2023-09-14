import { useState } from "react";
import PersonalData from "./steps/personal-data.component";
import DeliveryAddress from "./steps/delivery-address.component";
import PaymentData from "./steps/payment-data.component";
import FormStepper from "./stepper/stepper.component";
import { checkoutPayment } from "dh-marvel/services/checkout/checkout.service";
import { Comic as ComicType } from "dh-marvel/features/comics/comic.types";

interface Props {
    comic: ComicType
}

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
    },
    order: {
        name: "",
        image: "",
        price: ""
    }
}

const initialCheckoutData = {
    customer: {
        name: "",
        lastname: "",
        email: "",
        address: {
            address1: "",
            address2: "",
            city: "",
            state: "",
            zipCode: "",
        },
    },
    card: {
        number: "",
        cvc: "",
        expDate: "",
        nameOnCard: "",
    },
    order: {
        name: "",
        image: "",
        price: 0,
    },
}

const FormManager = ({comic}: Props) => {

    const [data, setData] = useState(initialData);    
    const handleData = (newData: any) => {
        setData((prevData) => ({ ...prevData, ...newData }));
    };

    const [ activeStep, setActiveStep ] = useState(0);

    const handleNextStep = () => {
        if(activeStep >= 2){
            return;
        } else{
            setActiveStep(activeStep + 1);
        }
    }

    const handlePrevStep = () => {
        if (activeStep <= 0) {
            return;
        } else {
            setActiveStep(activeStep - 1);
        }
    }

    const submitData = async ({paymentData}:any) => {
        const checkoutData = {
            customer: {
                name: data.personalData.name,
                lastname: data.personalData.lastName,
                email: data.personalData.email,
                address: {
                    address1: data.deliveryAddress.address,
                    address2: data.deliveryAddress.apartment,
                    city: data.deliveryAddress.city,
                    state: data.deliveryAddress.province,
                    zipCode: data.deliveryAddress.zipCode,
                },
            },
            card: {
                number: paymentData.cardNumber,
                cvc: paymentData.securityCode,
                expDate: paymentData.expirationDate,
                nameOnCard: paymentData.cardName,
            },
            order: {
                name: comic.title,
                image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
                price: comic.price,
            },
        }

        const response = await checkoutPayment(checkoutData);
        try{
            console.log('FINAL SUBMIT', response);
        } catch{
            // agregar snackbar
            console.log('FINAL SUBMIT ERROR', response);
            console.log('ERROR', response.error);
            console.log('MESSAGE', response.message);
        }
    }

    return(
        <>
            <FormStepper activeStep={activeStep}></FormStepper>
            {activeStep === 0 && <PersonalData data={data.personalData} updateData={handleData} handleNextStep={() => handleNextStep()}/>}
            {activeStep === 1 && <DeliveryAddress data={data.deliveryAddress} updateData={handleData} handleNextStep={() => handleNextStep()} handlePrevStep={() => handlePrevStep()}/>}
            {activeStep === 2 && <PaymentData data={data.paymentData} handlePrevStep={() => handlePrevStep()} submitData={(paymentData) => submitData({paymentData})}/>}
        </>
    )
}

export default FormManager;