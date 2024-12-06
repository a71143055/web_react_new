import React from 'react';
import Card from './Card'
import img1 from '../imgs/img1.png'
import img2 from '../imgs/img_2.png'
import img3 from '../imgs/img_3.png'

const listing = [
    {
        id : 1,
        title : "서울의 유명한 레스토랑",
        price : 100000,
        imageUrl: `${img1}`
    },
    {
        id : 2,
        title : "제주도 바다 뷰 레스토랑",
        price : 150000,
        imageUrl: `${img2}`
    },
    {
        id : 3,
        title : "부산 해운대 근처 호텔 레스토랑",
        price : 200000,
        imageUrl: `${img3}`
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