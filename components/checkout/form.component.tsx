import React, { FC, useState } from "react";
import { Comic as ComicType } from "types/comic.types";
import { checkoutPayment } from "dh-marvel/services/checkout/checkout.service";
import { useRouter } from "next/router";
import { PersonalData } from "./steps/personal-data.component";
import { DeliveryAddress } from "./steps/delivery-address.component";
import { PaymentData } from "./steps/payment-data.component";
import { FormStepper } from "./stepper/stepper.component";
import SnackbarAlert from "../errors/snackbar-alert.components";

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

export const FormManager: FC<Props> = ({comic}: Props) => {
    const router = useRouter();

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

    const [snackbar, setSnackbar] = useState(false);
    const [snackbarError, setSnackbarError] = useState<string | undefined>(undefined);

    const handleCloseSnackbar = () => {
        setSnackbar(false);
    };

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
            if(!response.error){
                router.push('/confirmacion-compra');

                const responseData = {
                    customer: response.data.customer,
                    order: response.data.order
                }
                const jsonData = JSON.stringify(responseData);

                localStorage.setItem("checkoutdata", jsonData);
            } else{
                setSnackbarError(`${response.error}: ${response.message}`);
                setSnackbar(true);
            }
        } catch(error: any){
            setSnackbarError(`${response.error}: ${response.message}`);
            setSnackbar(true);
        }
    }

    return(
        <>
            <SnackbarAlert open={snackbar} onClose={handleCloseSnackbar} severity="error" error={snackbarError}/>
            <FormStepper activeStep={activeStep}></FormStepper>
            {activeStep === 0 && <PersonalData data={data.personalData} updateData={handleData} handleNextStep={() => handleNextStep()} />}
            {activeStep === 1 && <DeliveryAddress data={data.deliveryAddress} updateData={handleData} handleNextStep={() => handleNextStep()} handlePrevStep={() => handlePrevStep()} />}
            {activeStep === 2 && <PaymentData data={data.paymentData} handlePrevStep={() => handlePrevStep()} submitData={(paymentData) => submitData({ paymentData })} />}
        </>
    )
}