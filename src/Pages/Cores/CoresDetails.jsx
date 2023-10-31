import React from "react";
import {Loading, BackBtn, Alert} from '../../Components/ComponentsExport'
import { useParams } from "react-router-dom";
import { HookForCoresDetails } from "../../Hooks/HookForPage";

const CoresDetails = () => {

  const {id} = useParams();
  const {data, error, loading} = HookForCoresDetails(id) ;
  if (loading) return <Loading />;
  if (error) return <Alert />;

  return (
    <>
      <div className="container">
        <div className="row my-3">
          <div className="col float-start">
            <BackBtn />
          </div>
        </div>
        <div className="row">
          <div className="col">
           <div className="card bg-dark text-secondary">
            
            <div className="card-body">
              <h4 className="card-title"> <span className="text-light">Last Updata:</span> <span className="text-warning">{data.last_update}</span></h4>
              <h5 className="card-text">Reuse Count: {data.reuse_count}</h5>
              <h5 className="card-text">Water Landings: {data.water_landings}</h5>
              <h5 className="card-text">Land Landings: {data.land_landings}</h5>
              <h5 className="card-text">Launches: {data.launches}</h5>
              <h5 className="card-text">Serial: {data.serial}</h5>
              <h5 className="card-text">Status: {data.status}</h5>
              <h5 className="card-text">Type: {data.type}</h5>
              <h5 className="card-text">ID: {data.id}</h5>
            </div>
           </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default  CoresDetails
