import React from 'react';
import Card from './Card'
import img from '../imgs/img.png'
import img1 from '../imgs/img_1.png'
import img2 from '../imgs/img_2.png'

const listing = [
    {
        id : 1,
        title : "서울의 아늑한 아파트",
        price : 100000,
        imageUrl: `${img}`
    },
    {
        id : 2,
        title : "제주도 바다 뷰 펜션",
        price : 150000,
        imageUrl: `${img1}`
    },
    {
        id : 3,
        title : "부산 해운대 근처 호텔",
        price : 200000,
        imageUrl: `${img2}`
    },
];

function CardContainer() {
    return (
        <div>
            {listing.map(listing => (
                <Card key={listing.id} {...listing} />
            ))}
        </div>
    )
}

export default  CardContainer;