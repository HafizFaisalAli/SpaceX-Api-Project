import React from "react";
import {Loading, BackBtn, Alert} from '../../Components/ComponentsExport'
import { useParams } from "react-router-dom";
import { HookForLaunchesDetails } from "../../Hooks/HookForPage";

const LaunchesDetails = () => {

  const {id} = useParams();
  const {data, error, loading} = HookForLaunchesDetails(id) ;
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
        <div className="row justify-content-center my-4">
          <div className="col-md-7">
           <div className="card d-flex flex-row bg-dark text-light">
            <div>

            </div>
            <div className="card-body ">
              <h4 className="card-title"><span className="text-warning">{data.name}</span></h4>
              <h5 className="card-text"><span className="text-secondary">Date UTC:</span> {data.date_utc}</h5>
              <h5 className="card-text"><span className="text-secondary">Date UNIX: </span>{data.date_unix}</h5>
              <h5 className="card-text"><span className="text-secondary">Date Local: </span>{data.date_local}</h5>
              <h5 className="card-text"><span className="text-secondary">Date Precision: </span>{data.date_precision}</h5>
            
              <h5 className="card-text"><span className="text-secondary">ID:</span> {data.id}</h5>
            </div>
           </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LaunchesDetails 

