import React from 'react'
import { Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Ex06Card = ({item}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.imgSrc} height="350px"/>
            <Card.Body>
                <Card.Title>
                    {item.title} {item.birthYear}년생
                </Card.Title>
                <Card.Text>
                    {item.content}
                </Card.Text>
                <Button variant="primary">
                    <a href={item.SNS}>Instagram</a>
                        </Button>
            </Card.Body>
        </Card>
    )
}



/*
const Ex06Card = ({ newNameArr, newYearArr, newContArr, newImgArr,newSNSArr }) => {


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={newImgArr} height='350px' />
            <Card.Body>
                <Card.Title>
                    {newNameArr} {newYearArr}
                </Card.Title>
                <Card.Text>
                    {newContArr}
                </Card.Text>
                <Button variant="primary">
                    <a href={newSNSArr}>Instagram
                    </a>
                </Button>
            </Card.Body>
        </Card>
    )
}
    */

export default Ex06Card