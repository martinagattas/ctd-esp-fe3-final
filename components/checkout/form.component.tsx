import { useState } from "react";
import { useFormContext } from "react-hook-form";
import PersonalData from "./steps/personal-data.component";
import DeliveryAddress from "./steps/delivery-address.component";
import PaymentData from "./steps/payment-data.component";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormStepper from "./stepper/stepper.component";

const Form = () => {
    const { handleSubmit } = useFormContext();
    const [ activeStep, setActiveStep ] = useState(1);
    const [ data, setData ] = useState();

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

    const onSubmit = (data: any) => {
        console.log(data);
    }

    return(
        <>
            <FormStepper activeStep={activeStep - 1}></FormStepper>
            <form onSubmit={handleSubmit(onSubmit)}>
                {activeStep === 1 && <PersonalData />}
                {activeStep === 2 && <DeliveryAddress />}
                {activeStep === 3 && <PaymentData />}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {activeStep > 1 && <Button variant="outlined" onClick={handlePrevStep}>Anterior</Button>}
                    {activeStep < 3 && <Button variant="outlined" onClick={handleNextStep}>Siguiente</Button>}
                    {activeStep === 3 && <Button variant="contained" type="submit" onClick={handleNextStep}>Enviar</Button>}
                </Box>
            </form>
        </>
    )
}

export default Form;