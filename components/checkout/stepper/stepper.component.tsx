import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

export const FormStepper = ({ activeStep }: { activeStep: number }) => {
    const steps = [
        'Datos personales',
        'Datos de entrega',
        'Datos de pago',
    ];

    return (
        <Stepper activeStep={activeStep} alternativeLabel sx={{marginBottom: '16px'}}>
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    );
}