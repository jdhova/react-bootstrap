import React from 'react'
import { Button,Card } from 'react-bootstrap';

import bcake from "../../img/b-cake.jpeg"
import chcake from "../../img/ch-cake.jpeg"
import pie from "../../img/pie.jpeg"
import vcake from "../../img/van-cake.jpeg"
import dnuts from "../../img/d-nuts.jpeg"
import cucake from "../../img/cup-cake.jpeg"

const Confectionary = () => {
  return (
    <div className='cards'>
        <Card className='card1'style={{ width: '26rem', height: '35rem' }}>
        <Card.Img variant="top" src={bcake} />
            <Card.Body>
            <Card.Title>Birthday Cake</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
    </Card>

    <Card className='card1'style={{ width: '26rem', height: '35rem' }}>
    <Card.Img variant="top" src={chcake} />
        <Card.Body>
        <Card.Title>here</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>

<Card className='card1'style={{ width: '26rem', height: '35rem' }}>
    <Card.Img variant="top" src={pie} />
    <Card.Body>
    <Card.Title>Chicken and Meat Pies</Card.Title>
    <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
    </Card.Body>
</Card>

<Card className='card1'style={{ width: '26rem', height: '35rem' }}>
<Card.Img variant="top" src={vcake} />
    <Card.Body>
    <Card.Title>Vanilla Cake</Card.Title>
    <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
    </Card.Body>
</Card>

<Card className='card1'style={{ width: '26rem', height: '35rem' }}>
     <Card.Img variant="top" src={dnuts} />
    <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
    </Card.Body>
</Card>
<Card className='card1'style={{ width: '26rem', height: '35rem' }}>
     <Card.Img variant="top" src={cucake} />
    <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
    </Card.Body>
</Card>
</div>
  )
}

export default Confectionary