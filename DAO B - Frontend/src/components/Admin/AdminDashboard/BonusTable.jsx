import TableBody from './Table/TableBody'
import TableHead from './Table/TableHead'
import Button from '../../../elements/Button'

export default function BonusTable({ users, filterNew, voting, finished, declined }) {

    if (filterNew) {
        users = users.filter(person => person?.userBonus?.approved);
    }

    if (voting) {
        users = users.filter(person => person?.votes?.length < users.length && person.userBonus?.approved);
    }

    if (finished) {
        users = users.filter(person => person?.votes?.length === users.length);
    }

    if (declined) {
        users = users.filter(person => person?.userBonus?.declined);
    }

    return (
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden border-b border-gray-200 sm:rounded-sm">

                    {/* Other than mobile view */}
                    <table className="min-w-full divide-y divide-gray-200">
                        <TableHead />
                        <TableBody users={users} filterNew={filterNew} voting={voting} finshed={finished} declined={declined}/>
                    </table>

                    {/* Mobile View
                    <div className='sm:hidden'>
                        {people.length > 0 ? people.map(person => (
                            <div className='flex items-center justify-between my-6'>
                                <div className="px-6 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-14 w-14">
                                            <img className="rounded-full" src={person.image} alt="person" />
                                        </div>
                                        <div className="ml-4 text-gray-900">
                                            <div>{person.name}</div>
                                            <div className='text-sm text-gray-400'>{person.team}</div>
                                        </div>
                                    </div>
                                    <div className='mt-2'>
                                        <i className='fa fa-solid fa-thumbs-up mx-2' /><span className='mr-4'>{person.votes}</span>
                                        <i className='fa fa-solid fa-euro text-sm px-[5px] py-[.8px] mx-2 text-white bg-black rounded-full' /><span className='mr-2'>{person.bonus}</span>
                                        <i className='fa fa-solid fa-trophy mx-2' /><span className='mr-4'>{person.bonus}</span>
                                    </div>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <Button>
                                        <i className="fa-solid fa-xmark"></i>
                                    </Button>
                                    <Button>
                                        <i className="fa-solid fa-check"></i>
                                    </Button>
                                </div>
                            </div>
                        )) : (
                            <div className="px-6 whitespace-nowrap">Table is empty</div>
                        )}
                    </div> */}

                </div>
            </div>
        </div>
    )
}
