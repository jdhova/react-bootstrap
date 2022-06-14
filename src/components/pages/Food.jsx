import React from 'react'
import { Button,Card } from 'react-bootstrap';

import rice from "../../img/rice1.jpeg"
import plantain from "../../img/plantain.jpeg"
import yam from "../../img/yam.jpeg"
import eba from "../../img/eba.jpeg"
import chaat from "../../img/chaat.jpeg"
import barfi from "../../img/barfi.jpeg"

const Food = () => {
  return (
    <div className='cards'>
        <Card className='card1'style={{ width: '26rem', height: '35rem' }}>
        <Card.Img variant="top" src={plantain} />
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
    <Card.Img variant="top" src={rice} />
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
    <Card.Img variant="top" src={yam} />
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
<Card.Img variant="top" src={barfi} />
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
     <Card.Img variant="top" src={eba} />
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
     <Card.Img variant="top" src={chaat} />
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

export default Food