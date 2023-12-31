import * as yup from "yup";

export const schema = yup.object({
    cardNumber: yup
        .string()
        .required("Ingresa el número de tu tarjeta")
        .matches(/^[0-9]{16}$/, "El número de tu tarjeta debe tener 16 dígitos"),
    cardName: yup
        .string()
        .required("Ingresa el nombre que figura en tu tarjeta"),
    expirationDate: yup
        .string()
        .required("Ingresa la fecha de vencimiento de tu tarjeta")
        .matches(/^(0[1-9]|1[0-2])\/[0-9]{2}$/, "La fecha de vencimiento debe tener el siguiente formato: MM/YY"),
    securityCode: yup
        .string()
        .required("Ingresa el código de seguridad de tu tarjeta")
        .matches(/^[0-9]{3}$/, "El código de seguridad de tu tarjeta debe tener 3 dígitos")
});