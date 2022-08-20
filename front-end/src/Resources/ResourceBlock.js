import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { listResources, listContacts } from "../utils/api";
import Downloadables from "./Downloadables";
import LocalSupport from "./LocalSupport";
import UrgentSupport from "./UrgentSupport";

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
      <UrgentSupport />
      <Downloadables />
      <LocalSupport />
    </div>
  );
}
