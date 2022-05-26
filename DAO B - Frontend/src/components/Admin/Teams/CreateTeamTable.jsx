import Button from "../../../elements/Button";

export default function CreateTeamTable({ team }) {
    return (
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden border-b border-gray-200 sm:rounded-sm">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th
                                    scope="col"
                                    className="px-2 py-5 text-left text-[13px] font-medium text-gray-400 uppercase tracking-wider"
                                >
                                    #
                                </th>
                                <th
                                    scope="col"
                                    className="sm:w-1/2 px-6 py-5 text-left text-[13px] font-medium text-gray-400 capitalize tracking-wider"
                                >
                                    Customer
                                </th>

                                <th
                                    scope="col"
                                    className="px-6 py-5 text-left text-[13px] font-medium text-gray-400 capitalize tracking-wider"
                                >
                                    Bonus Amount
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-5 text-left text-[13px] font-medium text-gray-400 capitalize tracking-wider"
                                >
                                    Current bonus %
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-5 text-left text-[13px] font-medium text-gray-400 capitalize tracking-wider"
                                >

                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 text-xs">
                            {team.length > 0 ? (team.map((person) => (
                                <tr key={person.id} className={`${person.newRequest ? "font-bold" : "font-light"}`}>
                                    <td className="px-2 py-6 whitespace-nowrap">
                                        {person.id}
                                    </td>
                                    <td className="px-6 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-gray-900">{`${person.name } ${person.lastName ?person.lastName:''} ` }</div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="px-6 whitespace-nowrap text-gray-800 font-bold">£{person.amount}</td>
                                    <td className="px-6 whitespace-nowrap text-gray-800 font-medium">{person.bonus}</td>
                                    <td className="py-6 whitespace-nowrap px-6 flex items-center gap-2">
                                        <Button noBorder>
                                            <i className="fa fa-solid fa-pencil-alt "></i>
                                        </Button>
                                        <Button noBorder>
                                            <i className="fa fa-solid fa-trash"></i>
                                        </Button>
                                    </td>
                                </tr>
                            ))) : (
                                <tr>
                                    <td colSpan="6" className="px-6 py-4 text-center">
                                        <div className="text-gray-500">Nothing to show</div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
