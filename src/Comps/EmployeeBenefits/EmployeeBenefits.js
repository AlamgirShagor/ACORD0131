import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const EmployeeBenefits = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                    <div className="row">
                        <div className="col">
                            <h6>EMPLOYEE BENEFITS LIABILITY</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <label htmlFor="">LIMIT OF INSURANCE (Ea Employee)</label>
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text">$</div>
                                    </div>
                                    <input type="text" name="LIMIT OF INSURANCE" onChange={handleBlur} class="form-control"/>
                                </div>
                        </div>
                        <div className="col-3">
                            <label htmlFor="">AGGREGATE LIMIT FOR EBL</label>
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text">$</div>
                                    </div>
                                    <input type="text" name="AGGREGATE LIMIT FOR EBL" onChange={handleBlur} class="form-control"/>
                                </div>
                        </div>
                        <div className="col-3">
                            <label htmlFor="">RETAINED LIMIT FOR EBL</label>
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text">$</div>
                                    </div>
                                    <input type="text" name="RETAINED LIMIT FOR EBL" onChange={handleBlur} class="form-control"/>
                                </div>
                        </div>
                        <div className="col-3">
                            <label htmlFor="">RETROACTIVE DATE FOR EBL</label>
                            <input type="text" name="RETROACTIVE DATE FOR EBL" onChange={handleBlur} class="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">NAME OF BENEFIT PROGRAM</label>
                            <textarea name="NAME OF BENEFIT PROGRAM" className="form-control" onChange={handleBlur} id="" cols="30" rows="3"></textarea>
                        </div>
                    </div>
                <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(2) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(4) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default EmployeeBenefits;