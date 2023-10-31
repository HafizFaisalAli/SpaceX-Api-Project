import React from "react";
import {Loading, BackBtn, Alert} from '../../Components/ComponentsExport'
import { useParams } from "react-router-dom";
import { HookForCrewDetails } from "../../Hooks/HookForPage";

const CrewDetails = () => {

  const {id} = useParams();
  const {data, error, loading} = HookForCrewDetails(id) ;
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
           <div className="card d-flex flex-md-row bg-dark text-light">
            <div>

           <img className="card-img-top p-2 d-block w-100" src={data.image} alt="Title"/>
            </div>
            <div className="card-body ">
              <h4 className="card-title"><span className="text-warning">{data.name}</span></h4>
              <h5 className="card-text"><span className="text-secondary">Agency:</span> {data.agency}</h5>
              <h5 className="card-text"><span className="text-secondary">Status: </span>{data.status}</h5>
              <h5 className="card-text"><span className="text-secondary">Launches:</span> {data.launches}</h5>
              <h5 className="card-text"><span className="text-secondary">ID:</span> {data.id}</h5>
            </div>
           </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CrewDetails 

