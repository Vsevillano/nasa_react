import React from "react";
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import { DateCell } from "./DateCell";


test('renders content', () => {
    const dateCell = {
        title: 'titulo test',
        date: '2022-06-13',
        image: 'https://apod.nasa.gov/apod/image/2206/M51_HubbleMiller_1080.jpg'
    }

    const component = render(<DateCell date={dateCell.date} image={dateCell.image} title={dateCell.title}/>)

    console.log(component)
})