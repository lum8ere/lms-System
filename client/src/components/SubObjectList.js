import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Row } from "react-bootstrap";
import { Context } from '../index';
import SubObjectItem from './SubObjectItem';

const SubObjectList = observer(() => {
    const {subobject} = useContext(Context);

    return (
        <Row className="d-flex">
            {subobject.subobjects.map(subobject => 
                <SubObjectItem key={subobject.id} subobject={subobject}/>
            )}
        </Row>
    )
});

export default SubObjectList;