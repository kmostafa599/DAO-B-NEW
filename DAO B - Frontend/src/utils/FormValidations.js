import * as Yup from 'yup';

const loginValidation = Yup.object({
    email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 charaters')
        .required('Password is required')
});

const passwordValidation = Yup.object({
    password: Yup.string()
        .min(8, 'Password must be at least 8 charaters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password must match')
        .required('Confirm password is required'),
})

const emailValidation = Yup.object({
    email: Yup.string()
    .email('Email is invalid')
    .required('Email is required'),
})

const addFundsValidation = Yup.object({
    walletHash: Yup.string()
        .required('Wallet is required'),
    summ: Yup.number()
        .required('Summ is required'),
    // date: Yup.string()
    //     .required('Date is required'),
})

const settingsFormValidation = Yup.object({
    walletHash: Yup.string()
        .required('Wallet is required'),
    bonusLimit: Yup.string()
        .required('Bonus limit is required'),
    payoutYesPercentage: Yup.number()
        .required('Payout yes percentage is required'),
})

export { loginValidation, passwordValidation, emailValidation, addFundsValidation, settingsFormValidation };