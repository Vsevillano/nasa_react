import React from 'react'
import { DateCell } from '../components/DateCell';

export const DashBoardScreen = () => {

    const result = []

    for (var i = 0; i < 6; i++) {
        var d = new Date();
        d.setDate(d.getDate() - i);
        result.push(d.toISOString().split('T')[0])
    }

    return (
        <>
            <h1>Dashboard</h1>
            <div className="grid-container">
                {result.map((res, i) => (
                    <DateCell key={i} date={res}/>
                ))}
            </div>
        </>
    )
}
