import React from 'react'
import { Link } from 'react-router-dom';

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
                    <div className='grid-cell' key={i}><Link to="/detail">{res}</Link></div>
                ))}
            </div>
        </>
    )
}
