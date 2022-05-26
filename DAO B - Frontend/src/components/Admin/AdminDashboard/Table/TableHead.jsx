import React from 'react'
import { useSelector } from 'react-redux'

export default function TableHead() {
    // const user = useSelector()
    return (
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
                    className="px-6 py-5 text-left text-[13px] font-medium text-gray-400 capitalize tracking-wider"
                >
                    Customer
                </th>
                <th
                    scope="col"
                    className="px-6 py-5 text-left text-[13px] font-medium text-gray-400 capitalize tracking-wider"
                >
                    Team
                </th>
                <th
                    scope="col"
                    className="px-6 py-5 text-left text-[13px] font-medium text-gray-400 capitalize tracking-wider"
                >
                    Votes
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
                <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
    )
}
