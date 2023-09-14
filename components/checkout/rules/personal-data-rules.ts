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
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Ingresa un email válido")
});