import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Row } from "react-bootstrap";
import { Context } from '../index';
import ObjectItem from './ObjectItem';

const ObjectList = observer(() => {
    const {object} = useContext(Context);

    return (
        <Row className="d-flex">
            {object.objects.map(object => 
                <ObjectItem key={object.id} object={object}/>
            )}
        </Row>
    )
});

export default ObjectList;