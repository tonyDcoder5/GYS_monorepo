import React, {useState, useEffect} from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { listResources, listContacts } from "../utils/api";

export default function ResourceBlock() {
  const [resources,setResources] = useState(null);
  const [resourcesError,setResourcesError] = useState(null)
  const [contacts,setContacts] = useState(null);
  const [contactsError,setContactsError] = useState(null)
  
  useEffect( ()=>{
    const fetchResources = async ()=>{
      try{
        const abortController = new AbortController();
        const response = await listResources(abortController.signal);
        setResources(response)
        
      } catch (error){
        setResourcesError(error)
      }
    }
    const fetchContacts = async ()=>{
      try{
        const abortController = new AbortController();
        const response = await listContacts(abortController.signal);
        setContacts(response)
        
      } catch (error){
        setContactsError(error)
      }
    }
    fetchResources()
    fetchContacts()
  },[])
  return (
    <div className="ResourceBlock">
      <h4>ResourceBlock Section</h4>
      <div className="resource-block">
        <h6>Block 1- Contact Section</h6>
        <div className="row mb-5">
          <div className="col">
            <h3>Block 1</h3>
            <p>Block 1 subtitle</p>
            <button>Link to resource/reference</button>
          </div>
          <div className="col">
            <h3>Block 2</h3>
            <p>Block 2 subtitle</p>
            <button>Link to resource/reference</button>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <h3>Block 3</h3>
            <p>Block 3 subtitle</p>
            <button>Link to resource/reference</button>
          </div>
          <div className="col">
            <h3>Block 4</h3>
            <p>Block 4 subtitle</p>
            <button>Link to resource/reference</button>
          </div>
        </div>
      </div>
      <div className="resource-block">
        <h6>Block 2- Contact Section</h6>
        <div className="row">
          <div className="col">
            <div className="row">
              <p>Section Title</p>
            </div>
            <div className="container row resource-btn-group">
              <div className="col">
                <button>Test 1</button>
                <button>Test 2</button>
                <button>Test 3</button>
              </div>
              <div className="col">
                <button>Test 1</button>
                <button>Test 2</button>
                <button>Test 3</button>
              </div>
            </div>
          </div>
          <div className="col">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
