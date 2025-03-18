import React,{useState,useEffect} from 'react';
import {Modal,Button, ModalTitle, ModalBody} from 'react-bootstrap';
import { Modalpop } from "./components/Modalpop";

function App(){
  return (
    <>
    <div className="App"> 
    <h1> Image Search</h1>

    <form >
    <input type="text" name="search" placeholder="Search here..." />
    <Button type="submit" className="btn btn-success" data-toggle="modal" name="submit" defaultValue="Search" >search</Button>
    </form>
    </div>

    <div className="Modal">
      <Modalpop />
    </div>
    </>
  );
}
export default App;