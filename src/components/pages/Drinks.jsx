import React from 'react'

import { Button,Card } from 'react-bootstrap';

import apple from "../../img/apple.jpeg"
import banana from "../../img/banana.jpeg"
import mango from "../../img/mango.jpeg"
import wmelon from "../../img/w-melon.jpeg"
import papple from "../../img/p-apple.jpeg"
import carrott from "../../img/carrott.jpeg"

const Drinks = () => {
  return (
    <div className='cards'>
        <Card className='card1'style={{ width: '26rem', height: '35rem' }}>
        <Card.Img variant="top" src={carrott} />
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
    <Card.Img variant="top" src={papple} />
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
    <Card.Img variant="top" src={wmelon} />
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
<Card.Img variant="top" src={mango} />
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
     <Card.Img variant="top" src={banana} />
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
     <Card.Img variant="top" src={apple} />
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

export default Drinks