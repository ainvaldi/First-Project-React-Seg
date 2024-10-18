import { Formik } from "formik"
import * as Yup from 'yup'

const CreateUser = () => {

    const ValidationSchema = Yup.object().shape({
        username: Yup.string()
            .required('Este campo es requerido')
            .min(5, 'El username debe tener minimo 5 caracteres')
            .max(50, 'El username no debe ser mayor a 50 caracteres'),
        password: Yup.string()
            .required('Este campo es requerido')
            .min(5, 'La contraseña debe tener minimo 5 caracteres')
            .max(50, 'La contraseña no debe ser mayor a 50 caracteres')
    })

    const token = ''

    const RegisterUser = async (values) => {

        const bodyRegisterUser = {
            username: values.username,
            password: values.password
        }

        const response = await fetch('http://127.0.0.1:5000/users', {
            method: 'POST',
            body: JSON.stringify(bodyRegisterUser),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        console.log("response", response)

    }
    // from flask_cors import CORS

    // cors = CORS(app, resources = { r"/*": { "origins": "*" } })


    return (
        <Formik
            initialValues={{ password: '', username: '' }}
            validationSchema={ValidationSchema}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                isSubmitting,
                isValid
                /* and other goodies */
            }) => (
                <form>
                    <input
                        type="text"
                        name="username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                    />
                    {errors.username && touched.username && errors.username}
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                    <button onClick={() => RegisterUser(values)} type="button" disabled={values.password === '' || values.username === '' || !isValid}>
                        Crear usuario
                    </button>
                </form>
            )}
        </Formik>

    )

}

export default CreateUser