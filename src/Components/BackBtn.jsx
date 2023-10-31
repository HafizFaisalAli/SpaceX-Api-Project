import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const BackBtn = () => {
  const navigate = useNavigate();
  const onBackHundle = () => {
    navigate(-1);
  };

  return (
    <>
      <button className="btn btn-outline-danger mt-2 " onClick={onBackHundle}>
        <IoMdArrowRoundBack /> Go Back
      </button>
    </>
  );
};

export default BackBtn;
