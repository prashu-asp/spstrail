import React from 'react';
import Card from './Card';




const CardList = ({items}) => {
    const cardComponent = items.map((i) => {
        return <Card key={i.id} id={i.id} name={i.name} email={i.email}/>
    })
    return (
    <div>
        {cardComponent}
    </div>
    );
}

export default CardList;


