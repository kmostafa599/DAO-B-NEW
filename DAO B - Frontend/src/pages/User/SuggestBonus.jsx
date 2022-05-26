import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BlackBgModal from '../../components/BlackBgModal'
import Button from '../../elements/Button';
import Input from '../../elements/Input';
import { addBonus, setTotalBonus } from '../../store/actions';
import { useFormik } from 'formik'
export default function SuggestBonus() {
    const dispatch = useDispatch()
    const {wallet,wallets} = useSelector(state=>state.auth.user)
    const usedWallet = wallets.filter(w=>w._id=== wallet)[0]
    // const totalBonus = useSelector(state => state.totalBonus)
    console.log(usedWallet)
    const user = useSelector(state=>state.auth.user)
    console.log(user)
    const formik = useFormik({
        initialValues: {
            bonusValue: 0
        },
    

        onSubmit: values => {
            // if (values.bonusValue > totalBonus) {
            //     console.log("limit exceded")
            //     return
            // }
            dispatch(addBonus(user._id, values.bonusValue,usedWallet))
            // dispatch(setTotalBonus(totalBonus - values.bonusValue))

        },
    })
    // const handleSubmit = (bonus) => {
    //     // console.log("something")


    // }

    return (
        <BlackBgModal topTitle="Suggest bonus" cancelPath="/user/dashboard">
            <form className="my-6" onSubmit={formik.handleSubmit}>
                <div className="flex items-center gap-4">
                    <Input id='bonusValue' value={formik.values.bonusValue} onChange={formik.handleChange} type='text' name='bonusValue' label="Suggest Bonus" placeholder='30%' icons="fa fa-solid fa-euro" />
                    <h1 className='text-6xl -mt-4'>£134</h1>
                </div>
                <div className="flex items-center gap-2 mt-6">
                    <Link to="/user/dashboard">
                        <Button>
                            <i className="fa fa-solid fa-xmark" /><span className="sm:block hidden">Cancel</span>
                        </Button>
                    </Link>
                    <Button type='submit'>
                        <i className="fa fa-solid fa-check" /><span className="sm:block hidden">Save</span>
                    </Button>
                </div>
            </form>
        </BlackBgModal>
    )
}
