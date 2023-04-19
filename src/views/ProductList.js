import React from "react";
import { useState, useEffect } from "react";
import deleteSvg from "./../assets/img/delete-themes-svgrepo-com.svg";
import editSvg from "./../assets/img/edit.svg";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// react-bootstrap components
import {
  Button,
  Card,
  Table,
  Container,
  Row,
  Col,
  Form,
} from "react-bootstrap";

function ProductList() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [embed_code, setEmbed_code] = useState("");
  const [tag, setTag] = useState("");
  const [product, setProduct] = useState([]);

  const notify = () => {
    // Calling toast method by passing string
    toast("Hello Geeks");
  };
  const handleSubmit = (event) => {
    let item = { name, title, image, description, embed_code, tag };
    event.preventDefault();
    console.log(item);

    axios
      .post("http://localhost/3d-backend/api/add-product", item)
      .then((res) => setShow(false));
  };

  useEffect(() => {
    axios.get(`http://localhost/3d-backend/api/get-products`).then((res) => {
      console.log(res);
      setProduct(res.data.product);
    });
  });

  var ProductList = "";

  // const Product = ({ products }) => {

  // };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
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
                              multiple
                              value={image}
                              onChange={(e) => setImage(e.target.value)}
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
                      <th className="border-0">Product Img</th>
                      <th className="border-0">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      (ProductList = product.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>
                              <img src={item.image} alt="" />
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
                      }))
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
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Product Name"
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
                  autoFocus
                />
              </Form.Group>

              <Form.Group
                controlId="exampleForm.ControlInput1"
                className="mb-3"
              >
                <Form.Label>Product Image</Form.Label>
                <Form.Control type="file" multiple />
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

export default ProductList;
