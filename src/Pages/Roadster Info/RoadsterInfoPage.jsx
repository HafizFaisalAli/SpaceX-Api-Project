import React from "react";
import {Loading, BackBtn, Alert} from '../../Components/ComponentsExport'
import { HookForRoadsterPage } from "../../Hooks/HookForPage";


const RoadsterInfoPage = () => {
   
  const {data, error, loading} = HookForRoadsterPage();
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
      <div className="col" >
        <div className="card bg-dark text-secondary my-3">
        <div className="card-body">
          <h2 className="card-text text-light border-bottom pb-2"> Name: {data.name} </h2>
          <h5 className="card-text">Launch Date UTC: <span className="text-light">{data.launch_date_utc}</span></h5>
          <h5 className="card-text">Launch Date UNIX: <span className="text-light">{data.launch_date_unix}</span></h5>
          <h5 className="card-text">Launch Mass kg <span className="text-light">{data.launch_mass_kg}</span></h5>
          <h5 className="card-text">Launch Mass lbs: <span className="text-light">{data.launch_mass_lbs}</span></h5>
          <h5 className="card-text">Norad ID: <span className="text-light">{data.norad_id}</span></h5>
          <h5 className="card-text">Epoch JD: <span className="text-light">{data.epoch_jd}</span></h5>
          <h5 className="card-text">Orbit Type: <span className="text-light">{data.orbit_type}</span></h5>
          <h5 className="card-text">Apoapsis AU: <span className="text-light">{data.apoapsis_au}</span></h5>
          </div>
        </div>
      </div>
    </div>
   </div>
   </>
  )
};

export default RoadsterInfoPage;
