import React from "react";
import { Link } from "react-router-dom";
import { HookForCapsulePage } from "../../Hooks/HookForPage";
import {Loading, BackBtn, Alert} from '../../Components/ComponentsExport'


const CapsulesPage = () => {
   
  const {data, error, loading} = HookForCapsulePage();
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
        <div className="card my-3">
        <div className="card-body">
          <p className="card-text">{value.serial} <Link to={"/capsules/" + value.id}><button className="btn border btn-sm float-end">view</button></Link> </p>
          <p className="card-text">{value.status}</p>
          <p className="card-text bg-danger px-2">{value.type}</p>
          </div>
        </div>
      </div>
       ))}
    </div>
   </div>
   </>
  )
};

export default CapsulesPage;
