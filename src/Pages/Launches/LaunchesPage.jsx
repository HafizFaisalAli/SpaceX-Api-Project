import React from "react";
import { Link } from "react-router-dom";
import {Loading, BackBtn, Alert} from '../../Components/ComponentsExport'
import { HookForLaunchesPage } from "../../Hooks/HookForPage";


const LaunchesPage = () => {
   
  const {data, error, loading} = HookForLaunchesPage();
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
      <div className="col-lg-3" key={value.id}>
        <div className="card bg-dark text-light my-3">

        <div className="card-body">
          <p className="card-text">Name: {value.name} <Link to={"/launches/" + value.id}><button className="btn btn-outline-warning btn-sm float-end">view</button></Link> </p>
          <p className="card-text">Date UTC: {value.date_utc}</p>
          <p className="card-text">Date Precision: {value.date_precision}</p>
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

export default LaunchesPage;

