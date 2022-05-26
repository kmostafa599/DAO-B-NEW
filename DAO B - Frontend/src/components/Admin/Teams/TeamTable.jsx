import React from 'react'

export default function TeamTable({ team }) {
    return (
        <div className="mt-14">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden border-b border-gray-200 sm:rounded-sm">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr className='capitalize text-xs text-gray-400'>
                                    <th
                                        scope="col"
                                        className="px-4 py-3 text-left font-medium tracking-wider"
                                    >
                                        #
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left font-medium tracking-wider"
                                    >
                                        Team
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left font-medium tracking-wider"
                                    >
                                        Active proposals
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left font-medium tracking-wider"
                                    >
                                        Employees
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left font-medium tracking-wider"
                                    >
                                        Total Funds
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left font-medium tracking-wider"
                                    >
                                        Funds Allocation
                                    </th>

                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 text-sm">
                                {team.map((team) => (
                                    <tr key={team._id}>
                                        <td className="px-4 py-6 whitespace-nowrap">
                                            {team._id}
                                        </td>
                                        <td className="px-6 whitespace-nowrap">
                                            <div className=" text-gray-900 capitalize">{team.team}</div>
                                        </td>
                                        <td className="px-6 whitespace-nowrap ">
                                            {team.proposals > 0 ? "Yes" : "No"}
                                        </td>
                                        <td className="px-6 whitespace-nowrap">
                                            <div className="text-gray-500">{team.employees}</div>
                                        </td>
                                        <td className="px-6 whitespace-nowrap text-gray-800">${team.totalFunds}</td>
                                        <td className="px-6 whitespace-nowrap text-gray-800">{team.fundAllocation}</td>
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
