import React from "react";
import { useFormik } from "formik";
import { patanyumbFormSchema } from "../schema";

const Form = () => {

    const onSubmit = (values, {setSubmitting, resetForm}) =>{
        console.log('submitted')
        setSubmitting(false)
        resetForm()
    }

    const{values, errors, handleChange, handleBlur, handleSubmit, isSubmitting, setSubmitting, touched} = useFormik({
        initialValues:{
            size: '',
            price: '',
            addhouse: false
        },
        validationSchema: patanyumbFormSchema,
        onSubmit
    })

    return(
        <>
            <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Size</label>
                        <input
                         type="text" 
                         className="form-control" 
                         id="exampleInputEmail1" 
                         name="size"
                         aria-describedby="emailHelp"
                         onChange={handleChange}
                         onBlur={handleBlur}
                         value={values.size}
                         style={errors.size && touched.size ? {borderColor: "rgb(245, 98, 98)"}: {}}
                         />
                         {errors.size && touched.size ? <p className="error-message">{errors.size}</p> : ''}
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Price</label>
                        <input 
                        type="number" 
                        className="form-control" 
                        id="exampleInputPassword1"
                        name="price"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.price}
                        style={errors.price && touched.price ? {borderColor: "rgb(245, 98, 98)"}: {}}
                        />
                        {errors.price && touched.price ? <p className="error-message">{errors.price}</p> : ''}
                    </div>
                    <div className="mb-3 form-check">
                        <input 
                        type="checkbox" 
                        className="form-check-input" 
                        id="exampleCheck1"
                        name="addhouse"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.addhouse}
                        style={errors.addhouse && touched.addhouse ? {borderColor: "rgb(245, 98, 98)"}: {}}
                        />
                        {errors.addhouse && touched.addhouse ? <p className="error-message">{errors.addhouse}</p> : ''}
                            <label className="form-check-label" for="exampleCheck1">Add house</label>
                    </div>
                    <button disabled={isSubmitting} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Form