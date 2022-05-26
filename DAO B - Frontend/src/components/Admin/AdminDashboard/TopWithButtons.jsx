import Button from '../../../elements/Button'
import TopTitle from '../../../elements/TopTitle'

export default function TopWithButtons({ title }) {
    return (
        <div className='flex items-center justify-between'>
            <TopTitle title={title} />
            <div className="flex items-center gap-4">
                <Button>
                    <i className="fa fa-solid fa-pencil-alt"></i>
                    <span className="md:inline-block hidden">Edit Account</span>
                </Button>
                <Button>
                    <i className="fa fa-solid fa-trash"></i>
                    <span className="md:inline-block hidden">Delete</span>
                </Button>
            </div>
        </div>
    )
}
