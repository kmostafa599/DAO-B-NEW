import { Field, Form, Formik } from 'formik';
import CustomFormikInput from '../../elements/CustomFormikInput';
import Submit from '../../elements/Submit';
import { passwordValidation } from '../../utils/FormValidations';
import PageTitle from './PageTitle';

export default function NewPasswordForm() {
    const handleSubmit = (values) => {
        // login(loginState.email, loginState.password);
        console.log(values);
    };

    return (
        <Formik
            initialValues={{
                password: "",
                confirmPassword: "",
            }}
            validationSchema={passwordValidation}
            onSubmit={values => {
                handleSubmit(values);
            }}
        >
            {(formik) => (
                <section>
                    <PageTitle>New Password</PageTitle>
                    <Form>
                        <Field as={CustomFormikInput} type="password" name="password" label="Password" icons="fa-solid fa-lock" placeholder="Enter password" />
                        <Field as={CustomFormikInput} type="password" name="confirmPassword" label="Confirm Password" icons="fa-solid fa-lock" placeholder="Confirm password" />
                        <Submit classes="mt-10">Save</Submit>
                    </Form>
                </section>
            )}
        </Formik>
    )
}
