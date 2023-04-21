import React from "react";
import { Modal } from "react-bootstrap";
import ChartistGraph from "react-chartist";
import deleteSvg from "./../assets/img/delete (2).png";
import editSvg from "./../assets/img/pencil.png";
import { useState, useEffect } from "react";
// import Modal from 'react-bootstrap/Modal';

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
  Header,
} from "react-bootstrap";

function  UserList() {
  
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);


    const [users, setUsers] = useState([]);
    useEffect(() => {
      fetch('http://localhost/3d-backend/api/user_info')
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
         setUsers(data.users);
      })
      .catch((err) => {
         console.log(err.message);
      });
    },[]);
  return (
    <>
      <Container fluid>
       <Row>
       <Col md="12">
            <Card className="strpied-tabled-with-hover">
                    <Card.Header>
                        <div className="d-flex">
                        <div>
                        <Card.Title as="h4" className="mb-0">Users List Table</Card.Title>
                            <p className="card-category">
                           Users List Table
                            </p>
                        </div>
                        <div className="ml-auto">
                        {/* <Button variant="primary" className="btn-fill ms-auto" onClick={handleShow}>
                                Add Products
                            </Button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>Add Products</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control
                                        type="name"
                                        placeholder="Product Name"
                                        autoFocus
                                    />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Product Title</Form.Label>
                                    <Form.Control
                                        type="name"
                                        placeholder="Product Title"
                                        autoFocus
                                    />
                                    </Form.Group>
                                     
                                    <Form.Group controlId="exampleForm.ControlInput1" className="mb-3">
                                        <Form.Label>Product Image</Form.Label>
                                        <Form.Control type="file" multiple
                                        />
                                    </Form.Group>
                                    <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                    >
                                    <Form.Label>Product Description</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                    </Form.Group>                   
                                </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" className="btn-fill ml-auto m-2" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" className="btn-fill" onClick={handleClose}>
                                    Save Changes
                                </Button>
                                </Modal.Footer>
                            </Modal> */}
                        </div>
                        </div>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">User Name</th>
                      <th className="border-0">User Email</th>                    
                      <th className="border-0">Grant Access</th>
                      <th className="border-0">Action</th>
                    </tr>
                  </thead>
                  <tbody>                
                  {
                      users && users.map((item,index) =>{
                        return (
                          <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>
                              <label class="switch">
                              <input type="checkbox"/>
                              <span class="slider round"></span>
                              </label>
                            </td>
                            <td>
                              <a>
                                <img
                                  src={editSvg}
                                  alt=""
                                  width="20px"
                                  height="20px"
                                  onClick={handleShow1}
                                />
                              </a>
                              <img
                                src={deleteSvg}
                                alt=""
                                width="20px"
                                height="20px"
                                onClick={handleShow2}
                              />
                            </td>
                          </tr>
                         );
                          })
                          }
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
       </Row> 
       <Modal show={show1} onHide={handleClose1}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Users</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="User Name"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>User Email</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="User Email"
                  autoFocus
                />
              </Form.Group>
          
              <Form.Group
                  className="mb-0"
                  controlId="exampleForm.ControlInput1"
                  >
                  <Form.Label>Grant Access</Form.Label>
                  </Form.Group>
                  <label class="switch">
                  <input type="checkbox"/>
                  <span class="slider round"></span>
                  </label>
             
              {/* <Form.Group
                controlId="exampleForm.ControlInput1"
                className="mb-3"
              >
                <Form.Label>Product Image</Form.Label>
                <Form.Control type="file" multiple />
              </Form.Group> */}


              {/* <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Product Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group> */}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              className="btn-fill ml-auto m-2"
              onClick={handleClose1}
            >
              Close
            </Button>
            <Button
              variant="primary"
              className="btn-fill"
              onClick={handleClose1}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete the this?</Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              className="btn-fill ml-auto m-2"
              onClick={handleClose2}
            >
              Cancel
            </Button>
            <Button
              variant="danger"
              className="btn-fill"
              onClick={handleClose2}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}

export default UserList;




