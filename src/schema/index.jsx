import * as yup from 'yup';

export const patanyumbFormSchema = yup.object().shape({
    size: yup.string().required("Required"),
    price: yup.number("Must be a number").positive("Invalid").min(15).required("Required"),
    addhouse: yup.boolean().oneOf([true],'Required')
})