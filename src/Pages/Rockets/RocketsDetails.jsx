import React from "react";
import {Loading, BackBtn, Alert} from '../../Components/ComponentsExport'
import { useParams } from "react-router-dom";
import { HookForRocketsDetails } from "../../Hooks/HookForPage";

const RocketsDetails = () => {

  const {id} = useParams();
  const {data, error, loading} = HookForRocketsDetails(id) ;
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
              <h5 className="card-text"><span className="text-secondary">Type:</span> {data.type}</h5>
              <h5 className="card-text"><span className="text-secondary">Stages:</span> {data.stages}</h5>
              <h5 className="card-text"><span className="text-secondary">Boosters:</span> {data.boosters}</h5>
              <h5 className="card-text"><span className="text-secondary">Country: </span>{data.country}</h5>
              <h5 className="card-text"><span className="text-secondary">Company: </span>{data.company}</h5>
              <h5 className="card-text text-warning"><span className="text-secondary">Description: </span>{data.description}</h5>
              <h5 className="card-text"><span className="text-secondary">ID:</span> {data.id}</h5>
            </div>
           </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RocketsDetails 

