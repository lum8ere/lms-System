import React from 'react';
import { Col, Card } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { SUBOBJECT_ROUTE } from '../utils/consts';

const SubObjectItem = ({subobject}) => {
    const history = useHistory();
    return (
        <Col md={3} className="mt-3" onClick={() => history.push(SUBOBJECT_ROUTE + '/' + subobject.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <div>
                    <div>
                        {subobject.name}
                    </div>
                </div>
            </Card>
        </Col>
    )
};

export default SubObjectItem; 