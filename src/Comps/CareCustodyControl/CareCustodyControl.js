import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const CareCustodyControl = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                    <div className="col">
                        <h6>CARE, CUSTODY, CONTROL</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-2 text-center">
                                <h6 style={{fontSize: "14px"}}>LOC</h6>
                            </div>
                            <div className="col-2 text-center">
                                <h6 style={{fontSize: "14px"}}>PROPERTY TYPE</h6>
                            </div>
                            <div className="col-6 text-center">
                                <h6 style={{fontSize: "14px"}}>VALUE</h6>
                            </div>
                            <div className="col-2">

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <input type="text" className="form-control my-2" onChange={handleBlur} name="LOC"/>
                            </div>
                            <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="REAL"
                                        class="custom-control-input"
                                        id="REAL"
                                        value="REAL"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="REAL">REAL</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="PERSONAL"
                                        class="custom-control-input"
                                        id="PERSONAL"
                                        value="PERSONAL"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="PERSONAL">PERSONAL</label>
                                    </div>
                            </div>
                            <div className="col-6">
                                <input type="text" className="form-control my-2" onChange={handleBlur} name="VALUE"/>
                            </div>
                            <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="A*"
                                        class="custom-control-input"
                                        id="A*"
                                        value="A*"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="A*">A*</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="B*"
                                        class="custom-control-input"
                                        id="B*"
                                        value="B*"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="B*">B*</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="C*"
                                        class="custom-control-input"
                                        id="C*"
                                        value="C*"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="C*">C*</label>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <div className="col-6 text-center">
                                <h6 style={{fontSize: "14px"}}>D*</h6>
                            </div>
                            <div className="col-6 text-center">
                                <h6 style={{fontSize: "14px"}}>Q FT OF BLDG OCC</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <input type="text" className="form-control my-2" onChange={handleBlur} name="D*"/>
                            </div>
                            <div className="col-6">
                                <input type="text" className="form-control my-2" onChange={handleBlur} name="Q FT OF BLDG OCC"/>
                            </div>
                        </div>
                    </div>
                        
                </div>
                <div className="row">
                            <div className="col">
                                <label htmlFor="">OCCUPANCY / DESCRIPTION OF PERSONAL PROPERTY</label>
                                <textarea name="OCCUPANCY / DESCRIPTION OF PERSONAL PROPERTY" onChange={handleBlur} className="form-control" id="" cols="30" rows="4"></textarea>
                            </div>
                        </div>
                <div className="row text-center">
                    <div className="col">
                        <label htmlFor="">*APPLICANT: [A] IS HELD HARMLESS IN THE LEASE, [B] HAS A WAIVER OF SUBROGATION, [C] IS A NAMED INSURED IN THE FIRE POLICY, [D] OTHER (specify)</label>
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(6) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(8) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default CareCustodyControl;