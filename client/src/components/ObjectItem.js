import React from 'react';
import { Col, Card, Image } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { OBJECT_ROUTE } from '../utils/consts';

const ObjectItem = ({object}) => {
    const history = useHistory();
    return (
        <Col md={3} className="mt-3" onClick={() => history.push(OBJECT_ROUTE + '/' + object.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={object.img}/>
                <div>
                    <div>
                        {object.name}
                    </div>
                </div>
            </Card>
        </Col>
    )
};

export default ObjectItem; 