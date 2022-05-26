import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import Button from '../../elements/Button';
import Container from '../../elements/Container';
import CustomFormikInput from '../../elements/CustomFormikInput';
import DropDownSelect from '../../elements/DropDownSelect';
import Submit from '../../elements/Submit';
import TopTitle from '../../elements/TopTitle';
import { settingsFormValidation } from '../../utils/FormValidations';
import DatePickerField from '../../elements/DatePickerField'
import Switch from '../../elements/Switch';
import {useSelector} from 'react-redux'
// const options = [
//     "Development", "Production", "Business", "Salesmen"
// ]

export default function Settings() {
    const teams = useSelector(state=>state.teams)
    // console.log(teams)
    const options = teams.map(t=>t.team)
    // console.log(options)
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [day, setDay] = useState('')
    const [payoutDate, setPayoutDate] = useState(new Date());
    const [newBonusRequest, setNewBonusRequest] = useState(false);
    const [approveNotification, setApproveNotification] = useState(false);
    const [voteNotification, setVoteNotification] = useState(false);

    // Form Submit
    const handleSubmit = (values) => {
        const newObj = { ...values, day: day, payoutDate, newBonusRequest, approveNotification, voteNotification }
        console.log(newObj)
        // login(loginState.email, loginState.password);
    };

    // range datepicker
    const handleDateChange = (date) => {
        const [start, end] = date;
        setStartDate(start);
        setEndDate(end);
    };

    // Dropdown select
    const onSelect = (value) => {
        setDay(value.value);
    }

    return (
        <section className='py-10'>
            <Container>
                <div className='flex items-center justify-between mb-10'>
                    <TopTitle title="Settings" />
                    <div className='flex gap-2'>
                        <Button>
                            <i className="fa fa-solid fa-xmark"></i>
                            <span className="md:inline-block hidden">Cancel</span>
                        </Button>
                        <Button>
                            <i className="fa fa-solid fa-check"></i>
                            <span className="md:inline-block hidden">Save</span>
                        </Button>
                    </div>
                </div>
                <Formik
                    initialValues={{
                        walletHash: "",
                        bonusLimit: "",
                        payoutYesPercentage: 0,
                    }}
                    validationSchema={settingsFormValidation}
                    onSubmit={values => {
                        handleSubmit(values);
                    }}
                >
                    {(formik) => (
                        <section>
                            <Form>
                                <DropDownSelect options={options} onSelect={onSelect} lebel="Specific days" />
                                <h1 className='text-2xl mt-14 mb-4'>Bonus</h1>
                                <div className='mb-4'>
                                    <div className='flex items-center gap-4 md:flex-unwrap flex-wrap'>
                                        <div>
                                            <Field as={CustomFormikInput} type="text" name="walletHash" label="Wallet" icons="fa-solid fa-wallet" placeholder="0x22bD...BA4B" />
                                        </div>
                                        <div>
                                            <Field as={CustomFormikInput} type="text" name="bonusLimit" label="Maximum Bonus Limit" icons="fa-solid fa-percentage" placeholder="Bonus %" />
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4 md:flex-unwrap flex-wrap'>
                                        <div>
                                            <DatePickerField
                                                name="payoutDate"
                                                className="custom_datepick"
                                                label="Payout-date"
                                                placeholderText="Select a date"
                                                selected={payoutDate}
                                                onChange={(date) => setPayoutDate(date)}
                                            />
                                        </div>
                                        <div>
                                            <DatePickerField
                                                name="votingDayPeriod"
                                                className="custom_datepick"
                                                label="Voting-day period"
                                                placeholderText="Select a date"
                                                selected={startDate}
                                                onChange={(date) => handleDateChange(date)}
                                                startDate={startDate}
                                                endDate={endDate}
                                                selectsRange
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4 md:flex-unwrap flex-wrap'>
                                    <Field as={CustomFormikInput} type="number" name="payoutYesPercentage" label="Payout yes %" icons="fa-solid fa-percentage" placeholder="payout yes %" />
                                    <DatePickerField
                                        name="payoutDate"
                                        className="custom_datepick"
                                        label="Remind admin to daposit"
                                        placeholderText="Select a date"
                                        selected={payoutDate}
                                        onChange={(date) => setPayoutDate(date)}
                                    />
                                </div>

                                <h1 className='text-2xl mt-14 mb-4'>Notifications</h1>
                                <Switch text="New bonus request" setChange={setNewBonusRequest} />
                                <Switch text="Notify users when bonus was approved" setChange={setApproveNotification} />
                                <Switch text="Notify users when someone has vote for him" setChange={setVoteNotification} />

                                <Submit classes="mt-10">Save</Submit>
                            </Form>

                        </section>
                    )}
                </Formik>
            </Container>
        </section>
    )
}
