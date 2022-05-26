export default function BonusHistoryTable({ user, title, withTeam }) {
    return (
        <div className="flex flex-col">
            <h1 className="capitalize text-5xl pb-14">{title}</h1>
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden border-b border-gray-200 sm:rounded-sm">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr className="text-left text-gray-500 capitalize">
                                    <th
                                        scope="col"
                                        className="px-4 py-3 text-xs font-medium tracking-wider"
                                    >
                                        #
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-medium tracking-wider"
                                    >
                                        Date
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-medium tracking-wider"
                                    >
                                        Time
                                    </th>
                                    {withTeam ? (
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium tracking-wider"
                                        >
                                            Team
                                        </th>
                                    ) : (
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium tracking-wider"
                                        >
                                            Wallet
                                        </th>
                                    )
                                    }
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-medium tracking-wider"
                                    >
                                        Summary
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-medium tracking-wider"
                                    >
                                        Bonus%
                                    </th>

                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 text-xs">
                                {user?.userBonuses?.map((person) => (
                                    <tr key={person.id}>
                                        <td className="px-4 py-6 whitespace-nowrap">
                                            {person.id}
                                        </td>
                                        <td className="px-6 whitespace-nowrap">
                                            <div className="font-medium text-gray-900">{person.date}</div>
                                        </td>
                                        <td className="px-6 whitespace-nowrap ">
                                            {person.time}
                                        </td>
                                        {
                                            withTeam ? (
                                                <td className="px-6 whitespace-nowrap">
                                                    <div className="text-gray-500 capitalize">{person.team}</div>
                                                </td>
                                            ) : (
                                                <td className="px-6 whitespace-nowrap">
                                                    <div className="text-gray-500">{person.wallet}</div>
                                                </td>
                                            )}
                                        <td className="px-6 whitespace-nowrap text-gray-800 font-bold">{person.summary}</td>
                                        <td className="px-6 whitespace-nowrap text-gray-800 font-medium">{person.bonus}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}