import React from 'react';
import { Form , Button, Col, Row} from 'react-bootstrap';

function MessageForm() {
  function handleSubmit(e){
    e.preventDefault();
    alert("Your message has been submitted");
  }
  return (
    <div>
      <div className="message-output"></div>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={11}>
             <Form.Group>
                <Form.Control type="text" placeholder='Your message'>

                </Form.Control>
             </Form.Group>
           </Col>
            <Col md={1}>
             <Button varient="primary" type="submit" style={{width:'100%' ,backgroundColor:"orange"}}>
               <i className="fas fa-paper-plane"></i>
              </Button>
           </Col>
         </Row>
        </Form>
    </div>
  )
}

export default MessageForm;
