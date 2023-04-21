import React from "react";
import { useState, useEffect } from "react";
import deleteSvg from "./../assets/img/delete (2).png";
import editSvg from "./../assets/img/pencil.png";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import Form from 'react-bootstrap/Form';
import "react-toastify/dist/ReactToastify.css";
// react-bootstrap components
import {
  Button,
  Card,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function ProductList() {
  const [name, setName] = useState("");
  const [publish, setPublish] = useState(false);
  const [title, setTitle] = useState("");
  const [increament, setIncreament] = useState(0);
  const [image, setImage] = useState(null)
  const [description, setDescription] = useState("");
  const [embed_code, setEmbed_code] = useState("");
  const [tag, setTag] = useState("");
  const [product, setProduct] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
 


  const [show2, setShow2] =  useState({
    show: false, // initial values set to false and null
    id: null,
  });

  const handleClose2 = () => setShow2(false);
  const notify = () => {
    // Calling toast method by passing string
    toast("Hello Geeks");
  };
  const handleSubmit = (event) => {

    let published = publish ? 1 : 0;
    console.log(published);
    let item = { name, title, image, description, embed_code, tag, published};
    const fd = new FormData();
    fd.append('name',name)
    fd.append('title', title)
    fd.append('image',image)
    fd.append('description',description)
    fd.append('embed_code',embed_code)
    fd.append('tag',tag)
    fd.append('published',published)
    event.preventDefault();
    // console.log(item);
    // return false;
    axios
      .post("http://localhost/3d-backend/api/add-product", fd)
      .then((res) => {
        console.log(res)
        get_products();
       setShow(false)
      }
        );
   };

   /** -------------------------------------------Edit Product------------------------------------------ */
   const editInfo = (event) => {
    console.log(publish)
    let published = publish ? 1 : 0;
    const fd = new FormData();
    
    fd.append('name',name)
    fd.append('title', title)
    fd.append('image',image)
    fd.append('description',description)
    fd.append('embed_code',embed_code)
    fd.append('tag',tag)
    fd.append('published',published)
    event.preventDefault();
    // return false;
    axios
      .post("http://localhost/3d-backend/api/edit-products/"+increament,fd)
      .then((res) => {
        console.log(res)
        get_products();
        setShow1(false);
      }
        );
   };
  const handleDeleteTrue=(event) =>{
    console.log(show2.id)
    axios.delete('http://localhost/3d-backend/api/delete-products/' + show2.id).then((response) => {
      // this only runs on success
      console.log("RESPONSE FROM POST", response.data);
        setShow2({
          show: false,
          id:null,
        });
        get_products();
    }, (err) => {
      console.log("Error While Posting Data", err);
    });
  }

    const handleClose11 = (event) => {
      let item = { name, title, image, description, embed_code, tag};
      event.preventDefault();
      console.log(item);
    axios.put('http://localhost/3d-backend/api/edit-products/'+ show2.id)
    .then(res => console.log(response.data));
    }

    /**------------------------------------------------------Get Products----------------------------------------------- */

    const get_products = (event) => {
            fetch('http://localhost/3d-backend/api/get-products')
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              setProduct(data.products);
            })
            .catch((err) => {
              console.log(err.message);
            });
    }
  
  useEffect(() => {
    get_products();
  }, []);

  var ProductList = "";

  // const Product = ({ products }) => {

  // };

  const handleShow1 = data => () => {
    console.log(data.id)
    setName(data.name)
    setDescription(data.description)
    setEmbed_code(data.embed_code)
    setIncreament(data.id)
    setPublish(data.publish)
    setTag(data.tag)
    setTitle(data.title)
    setShow1(true);
  }
 
  const handleShow2 = id => () => {
    setShow2({
        show: true,
        id,
      });
    }
  return (

    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover" >
              <Card.Header >
                <div className="d-flex">
                  <div>
                    <Card.Title as="h4" className="mb-0">
                      Product List Table
                    </Card.Title>
                    <p className="card-category">Product List Table</p>
                  </div>
                  <div className="ml-auto">
                    <Button
                      variant="primary"
                      className="btn-fill mx-auto"
                      onClick={handleShow}
                    >
                      Add Products
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Add Products</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                         <Form onSubmit={handleSubmit}>                     
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control
                              type="name"
                              placeholder="Product Name"
                              autoFocus
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Product Title</Form.Label>
                            <Form.Control
                              type="name"
                              placeholder="Product Title"
                              autoFocus
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Tag</Form.Label>
                            <Form.Control
                              type="name"
                              placeholder="Enter Tag "
                              autoFocus
                              value={tag}
                              onChange={(e) => setTag(e.target.value)}
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Embeded Title</Form.Label>
                            <Form.Control
                              type="name"
                              placeholder="Product Title"
                              autoFocus
                              value={embed_code}
                              onChange={(e) => setEmbed_code(e.target.value)}
                            />
                          </Form.Group>
                          

                          <Form.Group
                            controlId="exampleForm.ControlInput1"
                            className="mb-3"
                          >
                            <Form.Label>Product Image</Form.Label>
                            <Form.Control
                              type="file"
                              value={""}
                              onChange={(e) => setImage(e.target.files[0])}
                            />
                          </Form.Group>

                          <Form.Group
                            className="mb-0"
                            controlId="exampleForm.ControlInput1"
                          >
                          <Form.Label>Publish Product</Form.Label>
                          </Form.Group>
                          <label class="switch">
                            <input type="checkbox" value={publish} onChange={(e)=>setPublish(!publish)}/>
                            <span class="slider round"></span>
                          </label>


                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <Form.Label>Product Description</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={3}
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                            />
                          </Form.Group>
                          <Button
                            variant="primary"
                            className="btn-fill"
                            type="submit"
                          >
                            Save Changes
                          </Button>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          className="btn-fill ml-auto m-2"
                          onClick={handleClose}
                        >
                          Close
                        </Button>
                        
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Product ID</th>
                      <th className="border-0">Product Name</th>
                      <th className="border-0">Product Title</th>
                      <th className="border-0">Product Description</th>
                      <th className="border-0">Product Image</th>
                      <th className="border-0">Publish</th>
                      <th className="border-0">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      product && product.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>dsdfgd</td>
                            <td>
                              {/* <>
                                <Form.Check aria-label="option" className="boxx" />
                              </> */}
                              <label class="switch">
                            <input type="checkbox"  {...(item.publish==1 ? {checked: true} : {}) } onChange={(e)=>setPublish(!publish)}/>
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
                                  onClick={handleShow1(item)}
                                />
                              </a>
                              <img
                                src={deleteSvg}
                                alt=""
                                width="20px"
                                height="20px"
                                value={item.id}
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
            <Modal.Title>Edit Products</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={editInfo}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Product Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Product Title</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Product Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  autoFocus
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Embeded Title</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Product Title"
                  value={embed_code}
                  onChange={(e) => setEmbed_code(e.target.value)}
                  autoFocus
                />
              </Form.Group>
         
              <Form.Group
                className="mb-0"
                controlId="exampleForm.ControlInput1"
                >
                <Form.Label>Publish Product</Form.Label>
                </Form.Group>
                  <label class="switch">
                  <input type="checkbox" value={publish} onChange={(e)=>setPublish(!publish)}/>
                  <span class="slider round"></span>
                  </label>

                          
              <Form.Group
                controlId="exampleForm.ControlInput1"
                className="mb-3"
              >
                <Form.Label>Product Image</Form.Label>
                <Form.Control
                  type="file"
                  value={""}
                  onChange={(e) => setImage(e.target.files[0])}
                 />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Product Description</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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

export default ProductList;
