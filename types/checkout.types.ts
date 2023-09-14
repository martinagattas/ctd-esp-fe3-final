export type Checkout = {
    customer: IPersonalData,
    card: IPaymentData,
    order: IOrder
}

export interface IPersonalData {
    name: string,
    lastname: string,
    email: string,
    address: IDeliveryAddress
}

export interface IDeliveryAddress {
    address1: string,
    address2: string | null,
    city: string,
    state: string,
    zipCode: string
}

export interface IPaymentData {
    number: string,
    nameOnCard: string,
    expDate: string,
    cvc: string
}

export interface IOrder {
    name: string,
    image: string,
    price: number
}