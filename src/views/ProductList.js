import React from "react";
import { useState, useEffect } from "react";
import deleteSvg from "./../assets/img/delete (2).png";
import editSvg from "./../assets/img/pencil.png";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from 'react-bootstrap/Form';
import PValidation from "./validations/product-validation";
// react-bootstrap components
import {
  Button,
  Card,
  Table,
  Container,
  Row,
  Alert,
  Col,
} from "react-bootstrap";

function ProductList() {
  const [name, setName] = useState("");
  const [publish, setPublish] = useState(false);
  const [title, setTitle] = useState("");
  const [increament, setIncreament] = useState(0);
  const [toggle,setSwitch] = useState(0);
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
 // const notify = () => toast("Wow so easy!");

    const fields = { 
        name:'',
        title:'',
        tag:'',
        embed_title:'',
        image:'',
        publish:'',
        description:''
     };
    const [form, setForm] = useState(fields);
    const [errors, setError] = useState({});
  const [show2, setShow2] =  useState({
    show: false, // initial values set to false and null
    id: null,
  });

  const handleClose2 = () => setShow2(false);
  
  const handleSubmit = (event) => {
    let published = publish ? 1 : 0;
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
    setError(PValidation(item));
    // console.log(item);
    // return false;
    axios
      .post("http://localhost/3d-backend/api/add-product", fd)
      .then((res) => {
        console.log(res)
        toast.success('Product Save Successfully!')
        get_products();
       setShow(false)
      }
        );
   };


   const handleSwitch = id => (e) => {
    const fd = new FormData();
    fd.append('published',e.currentTarget.checked==true ? 1 : 0)
    axios
    .post("http://localhost/3d-backend/api/edit-publish/"+id, fd)
    .then((res) => {
      console.log(res)
      get_products();
      // setSwitch(id);
      // setPublish(e.currentTarget.checked)
    }
      );

    }

    

    const onChange = event => {
          const { name, value } = event.target;
          console.log(name)
          console.log(value)
          setForm(prevState => ({
            ...prevState,  // shallow copy all previous state
            [name]: value, // update specific key/value
          }));
    };

    const handleShow1 = data => () => {
      console.log(data)
      setForm({
        name:data.name,
        title:data.title,
        tag:data.tag,
        embed_title:data.embed_code,
        image:data.title,
        publish:data.publish==1?1:0,
        description:data.description
      });
      setIncreament(data.id)
      setShow1(true);
    }
   

   /** -------------------------------------------Edit Product------------------------------------------ */
   const editInfo = (event) => {
      console.log(form.publish)
    console.log(publish)
    let published = publish==true ? 1 : 0;
    const fd = new FormData();
    
    fd.append('name',form.name)
    fd.append('title', form.title)
    fd.append('image',image)
    fd.append('description',form.description)
    fd.append('embed_code',form.embed_title)
    fd.append('tag',form.tag)
    fd.append('published',publish ? publish : form.publish)
    event.preventDefault();
    // return false;
    axios
      .post("http://localhost/3d-backend/api/edit-products/"+increament,fd)
      .then((res) => {
        console.log(res)
        toast.success(res.data.message)
        get_products();
        setShow1(false);
      }
        );
   };
  

  const handleDeleteTrue=(event) =>{
    // console.log(show2.id)
     axios.delete('http://localhost/3d-backend/api/delete-products/' + show2.id).then((response) => {
       // this only runs on success
       console.log("RESPONSE FROM POST", response.data);
       toast.success(response.data.Message)
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
   // notify()
    get_products();
  }, []);

  var ProductList = "";

  // const Product = ({ products }) => {

  // };


 
  const handleShow2 = id => () => {
    setShow2({
        show: true,
        id,
      });
    }
  return (
    <>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
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
                         <Form onSubmit={handleSubmit} PValidation >                     
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
                            {errors.name && <Alert variant="danger" className="mt-3" > {errors.name} </Alert>}
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
                            {errors.title && <Alert variant="danger" className="mt-3" > {errors.title} </Alert>}
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
                            {errors.tag && <Alert variant="danger" className="mt-3" > {errors.tag} </Alert>}
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
                            {errors.embed_code && <Alert variant="danger" className="mt-3" > {errors.embed_code} </Alert>}
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
                          <label className="switch">
                            <input type="checkbox" value={publish} onChange={(e)=>setPublish(e.currentTarget.checked)}/>
                            <span className="slider round"></span>
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
                            <td>
                              {/* <>
                                <Form.Check aria-label="option" className="boxx" />
                              </> */}
                              <label className="switch">
                            <input type="checkbox"  checked={(item.publish==1 ? true : false)} onChange={handleSwitch(item.id)} />
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
                  name="name"
                  placeholder="Product Name"
                  value={form.name}
                  onChange={onChange}
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
                  name="title"
                  placeholder="Product Title"
                  value={form.title}
                  onChange={onChange}
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
                  name="embed_title"
                  placeholder="Product Title"
                  value={form.embed_title}
                  onChange={onChange}
                  autoFocus
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
                  name="image"
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
                  name="description"
                  value={form.description}
                  onChange={onChange}
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
        </Modal><Modal show={show2.show} onHide={handleClose2}>
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
        </Modal><Modal show={show2.show} onHide={handleClose2}>
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
        </Modal><Modal show={show2.show} onHide={handleClose2}>
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
        </Modal><Modal show={show2.show} onHide={handleClose2}>
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
        </Modal><Modal show={show2.show} onHide={handleClose2}>
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
        </Modal><Modal show={show2.show} onHide={handleClose2}>
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
        </Modal><Modal show={show2.show} onHide={handleClose2}>
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
        </Modal><Modal show={show2.show} onHide={handleClose2}>
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
        </Modal><Modal show={show2.show} onHide={handleClose2}>
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
        </Modal><Modal show={show2.show} onHide={handleClose2}>
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
        </Modal><Modal show={show2.show} onHide={handleClose2}>
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
        </Modal><Modal show={show2.show} onHide={handleClose2}>
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
        </Modal><Modal show={show2.show} onHide={handleClose2}>
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
        </Modal><Modal show={show2.show} onHide={handleClose2}>
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
