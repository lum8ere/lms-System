import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { ListGroup } from "react-bootstrap";
import { Context } from '../index';

const DirectionBar = observer(() => {
    const {object} = useContext(Context);

    return (
        <ListGroup>
            {object.directions.map(direction => 
                <ListGroup.Item 
                    active={direction.id === object.selectedDirections.id}
                    onClick={() => object.setSelectedDirections(direction)}
                    key={direction.id}>
                    {direction.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default DirectionBar; 