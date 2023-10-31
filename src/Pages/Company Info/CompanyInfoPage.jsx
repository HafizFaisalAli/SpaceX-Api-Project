import React from "react";
import {Loading, BackBtn, Alert} from '../../Components/ComponentsExport'
import { HookForCompanyPage } from "../../Hooks/HookForPage";



const CompanyInfoPage = () => {
   
  const {data, error, loading} = HookForCompanyPage();
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
          <h5 className="card-text">Founder: <span className="text-light">{data.founder}</span></h5>
          <h5 className="card-text">Founded: <span className="text-light">{data.founded}</span></h5>
          <h5 className="card-text">Employees: <span className="text-light">{data.employees}</span></h5>
          <h5 className="card-text">Vehicles: <span className="text-light">{data.vehicles}</span></h5>
          <h5 className="card-text">Test Sites: <span className="text-light">{data.test_sites}</span></h5>
          <h5 className="card-text">CEO: <span className="text-light">{data.ceo}</span></h5>
          <h5 className="card-text">CTO: <span className="text-light">{data.cto}</span></h5>
          <h5 className="card-text">COO: <span className="text-light">{data.coo}</span></h5>
          <h5 className="card-text">CTO Propulsion: <span className="text-light">{data.cto_propulsion}</span></h5>
          <h5 className="card-text">Valuation: <span className="text-light">{data.valuation}</span></h5>
          <h5 className="card-text">Summary: <span className="text-warning">{data.summary}</span></h5>
          <h5 className="card-text">ID: <span className="text-light">{data.id}</span></h5>
          </div>
        </div>
      </div>
    </div>
   </div>
   </>
  )
};

export default CompanyInfoPage;
