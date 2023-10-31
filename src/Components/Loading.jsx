import React from "react";
import {Ring,Waveform,Pulsar,Ping,Ripples,ThreeBody,Orbit,ChaoticOrbit,SuperBalls,Wobble,Metronome,DotWave,DotPulse,LeapFrog,NewtonsCradle,Momentum,Jelly,JellyTriangle,DotSpinner,RaceBy,LineWobble,Handsprings,Pinwheel,MrMiyagi} from '../../node_modules/@uiball/loaders/dist/index.d.ts'
const Loading = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
        <div className="d-flex justify-content-center align-items-center  fs-5">
            <RaceBy size={80}lineWeight={5}speed={1.4} color="#FF6700"/>
            {/* <div className="spinner-border text-primary spinner-border-sm" role="status"> 
            <span className="visually-hidden">Loading...</span>
            </div> */}
        </div>
        </div>
      </div>
    </>
  );
};

export default Loading;