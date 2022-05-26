import Submit from '../../elements/Submit';
import PageTitle from '../../components/Auth/PageTitle';
import { Field, Form, Formik } from 'formik';
import { emailValidation } from '../../utils/FormValidations';
import CustomFormikInput from '../../elements/CustomFormikInput';

export default function RestoreForm() {
    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <Formik
            initialValues={{
                email: ""
            }}
            validationSchema={emailValidation}
            onSubmit={values => {
                handleSubmit(values);
            }}
        >
            {(formik) => (
                <section>
                    <PageTitle>Restore <br /> Password</PageTitle>
                    <Form>
                        <Field as={CustomFormikInput} type="email" name="email" label="Email" icons="fa-solid fa-envelope" placeholder="Enter email" />
                        <Submit classes="mt-10">Restore Password</Submit>
                    </Form>
                </section>
            )}
        </Formik>
    )
}
