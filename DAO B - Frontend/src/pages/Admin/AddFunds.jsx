import { Field, Form, Formik } from 'formik';
import Container from '../../elements/Container'
import CustomFormikInput from '../../elements/CustomFormikInput';
import TopTitle from '../../elements/TopTitle';
import Submit from '../../elements/Submit';
import { addFundsValidation } from '../../utils/FormValidations';
import DropDownSelect from '../../elements/DropDownSelect'
import { useState } from 'react';
import Switch from '../../elements/Switch';

const options = [
    "Daily", "Weekly", "Monthly", "Yearly"
]

export default function AddFunds() {
    const [day, setDay] = useState('');
    const [deposits, setDeposits] = useState('');

    const handleSubmit = (values) => {
        const newObj = { ...values, day: day }
        console.log(newObj);
        // login(loginState.email, loginState.password);
    };

    const onSelect = (value) => {
        setDay(value.value);
    }

    const setRecurringDeposits = () => {
        setDeposits(!deposits);
    }

    return (
        <main>
            <Container>
                <div className='py-10'>
                    <TopTitle title="Add Funds" />
                </div>
                <Formik
                    initialValues={{
                        walletHash: "",
                        summ: 0
                    }}
                    validationSchema={addFundsValidation}
                    onSubmit={values => {
                        handleSubmit(values);
                    }}
                >
                    {(formik) => (
                        <section>
                            <Form>
                                <Field as={CustomFormikInput} type="text" name="walletHash" label="Wallet" icons="fa-solid fa-wallet" placeholder="0x22bD...BA4B" />
                                <Field as={CustomFormikInput} type="number" name="summ" label="Summ" icons="fa-solid fa-euro" placeholder="Summ" />
                                <DropDownSelect options={options} onSelect={onSelect} label="Specific days" />
                                {/* <DatePickerField name="date" /> */}
                                <br />
                                <Switch text="Recurring deposits" setChange={setRecurringDeposits} />
                                <Submit classes="mt-10" iconClass="fa fa-solid fa-plus">Add Funds</Submit>
                            </Form>
                        </section>
                    )}
                </Formik>
            </Container>
        </main>
    )
}
