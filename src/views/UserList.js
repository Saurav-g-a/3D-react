import React from "react";
import { Modal } from "react-bootstrap";
import ChartistGraph from "react-chartist";
import deleteSvg from "./../assets/img/delete (2).png";
import editSvg from "./../assets/img/pencil.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";
import axios from "axios";
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
  //const handleShow1 = () => setShow1(true);

  const fields = { 
    name:'',
    description:'',
    id:0
 };
const [form, setForm] = useState(fields);

  const handleShow1 = data => () => {
    console.log(data)
    setForm({
      name:data.name,
      email:data.email,
      id:data.id
    });
    setShow1(true);
  }

  /**--------------------------------------------Edit Users-------------------------------------------------- */

  const editUser = (event) => {
  console.log(form)
  const fd = new FormData();
  fd.append('name',form.name)
  fd.append('email', form.email)  
  event.preventDefault();
  axios
    .post("http://localhost/3d-backend/api/edit-user/"+form.id,fd)
    .then((res) => {
      console.log(res)
      toast.success(res.data.message)
      get_users();
      setShow1(false);
    }
      );
 };

 /**-------------------------------------------------------Edit User--------------------------------------------- */

 const onChange = event => {
  const { name, value } = event.target;
  console.log(name)
  console.log(value)
  setForm(prevState => ({
    ...prevState,  // shallow copy all previous state
    [name]: value, // update specific key/value
  }));
};


  //const [show2, setShow2] = useState(false);

  const [show2, setShow2] =  useState({
    show: false, // initial values set to false and null
    id: null,
  });

const handleSwitch = id => (e) => {
  const fd = new FormData();
  fd.append('grant',e.currentTarget.checked==true ? 1 : 0)
  axios
  .post("http://localhost/3d-backend/api/edit-grant/"+id, fd)
  .then((res) => {
    console.log(res)
    toast.success(res.data.message)
    get_users();
 
  }
    );
  }
  const handleClose2 = () => setShow2(false);
  const handleShow2 = id => () => {
    setShow2({
        show: true,
        id,
      });
    }
    const get_users = (event) => {
          fetch('http://localhost/3d-backend/api/user_info')
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setUsers(data.users);
          })
          .catch((err) => {
            console.log(err.message);
          });
  }

    const handleDeleteTrue=(event) =>{
     // console.log(show2.id)
      axios.delete('http://localhost/3d-backend/api/delete-user/' + show2.id).then((response) => {
        // this only runs on success
        console.log("RESPONSE FROM POST", response.data);
        toast.success(response.data.Message)
          setShow2({
            show: false,
            id:null,
          });
          get_users();
      }, (err) => {
        console.log("Error While Posting Data", err);
      });
    }

    const [users, setUsers] = useState([]);
    useEffect(() => {
      get_users(); 
    },[]);
  return (
    <>
    <ToastContainer />
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
                              <label className="switch">
                              <input type="checkbox" checked={(item.grant==1 ? true : false)} onChange={handleSwitch(item.id)}/>
                              <span className="slider round"></span>
                              </label>
                            </td>
                            <td>
                              <a>
                                <img
                                  src={editSvg}
                                  alt=""
                                  width="20px"
                                  height="20px"
                                  onClick={handleShow1(item)}
                                />
                              </a>
                              <img
                                src={deleteSvg}
                                alt=""
                                width="20px"
                                height="20px"
                                onClick={handleShow2(item.id)}
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
            <Form onSubmit={editUser}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
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
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="User Email"
                  autoFocus
                />
              </Form.Group>

              <Button
              variant="primary"
              type="submit"
              className="btn-fill"
            >
              Save Changes
            </Button>
          
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
          </Modal.Footer>
        </Modal>
        <Modal show={show2.show} onHide={handleClose2}>
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
              onClick={handleDeleteTrue}
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




