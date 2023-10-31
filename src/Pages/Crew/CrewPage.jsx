import React from "react";
import { Link } from "react-router-dom";
import {Loading, BackBtn, Alert} from '../../Components/ComponentsExport'
import { HookForCrewPage } from "../../Hooks/HookForPage";


const CrewPage = () => {
   
  const {data, error, loading} = HookForCrewPage();
  if (loading) return <Loading />
  if (error) return <Alert />

  return (
   <>
   <div className="container">
    <div className="row my-3"  >
      <div className="col float-start">
      <BackBtn />
      </div>
    </div>
    <div className="row">
       {data.map((value) => (
      <div className="col-lg-3 py-3" key={value.id}>
        <div className="card bg-dark text-light my-3 "> 
        <img className="card-img-top p-2" width={260} height={300} src={value.image} alt="Title"/>
        <div className="card-body">
          <p className="card-text">Name: {value.name} <Link to={"/crew/" + value.id}><button className="btn btn-outline-warning btn-sm float-end">view</button></Link> </p>
          <p className="card-text">Agency: {value.agency}</p>
          <p className="card-text">Status: {value.status}</p>
          <p className="card-text bg-danger px-2">ID: {value.id}</p>
          </div>
        </div>
      </div>
       ))}
    </div>
   </div>
   </>
  )
};

export default CrewPage;
 

