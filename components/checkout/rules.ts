import * as yup from "yup";

export const schema = yup.object({
    name: yup
        .string()
        .required("Ingresa tu nombre")
        .min(3, "El nombre debe tener al menos 3 caracteres")
        .max(10, "El nombre debe tener máximo 10 caracteres"),
    lastName: yup
        .string()
        .required("Ingresa tu apellido")
        .min(3, "El apellido debe tener al menos 3 caracteres")
        .max(10, "El apellido debe tener máximo 10 caracteres"),
    email: yup
        .string()
        .required("Ingresa tu email")
        .email("Ingresa un email válido")
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Ingresa un email válido"),
    address: yup
        .string()
        .required("Ingresa una dirección")
        .min(5, "La dirección debe tener al menos 5 caracteres")
        .max(20, "La dirección debe tener máximo 20 caracteres"),
    apartment: yup.string().notRequired(),
    city: yup.string().required("Ingresa la ciudad"),
    province: yup.string().required("Ingresa la provincia"),
    zipCode: yup.string().required("Ingresa el código postal"),
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
        .matches(/^[0-9]{3}$/, "El código de seguridad de tu tarjeta debe tener 3 dígitos"),
});