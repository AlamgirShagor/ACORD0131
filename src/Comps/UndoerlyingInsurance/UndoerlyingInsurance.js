import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const UndoerlyingInsurance = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                    <div className="col">
                        <h6>UNDERLYING INSURANCE</h6>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col">
                        <label htmlFor="">LIST ALL LIABILITY / COMPENSATION POLICIES IN FORCE TO APPLY AS UNDERLYING INSURANCE</label>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-7">
                        <div className="row">
                            <div className="col-2 text-center">
                                <h6 style={{fontSize: "12px"}}>TYPE</h6>
                            </div>
                            <div className="col-4 text-center">
                                <h6 style={{fontSize: "12px"}}>CARRIER / POLICY NUMBER</h6>
                            </div>
                            <div className="col-3 text-center">
                                <h6 style={{fontSize: "12px"}}>POLICY EFF DATE</h6>
                            </div>
                            <div className="col-3 text-center">
                                <h6 style={{fontSize: "12px"}}>POLICY EXP DATE</h6>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-2 text-center">
                                <h6 className="my-4" style={{fontSize: "12px"}}>AUTOMOBILE LIABILITY</h6>
                            </div>
                            <div className="col-4 text-center">
                                <textarea name="CARRIER" id="" cols="30" rows="3" onChange={handleBlur} className="form-control" name="AUTOMOBILE"></textarea>
                            </div>
                            <div className="col-3">
                                <input type="date" name="POLICY EFF DATE" className="form-control my-4" onChange={handleBlur} id=""/>
                            </div>
                            <div className="col-3">
                                <input type="date" name="POLICY EXP DATE" className="form-control my-4" onChange={handleBlur} id=""/>
                            </div>
                        </div>
                        <div className="row my-5" >
                            <div className="col-2 my-5 text-center">
                                <h6 className="my-1" style={{fontSize: "12px"}}>GENERAL LIABILITY POLICY TYPE</h6>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="OCCUR"
                                        class="custom-control-input"
                                        id="OCCUR"
                                        value="OCCUR"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" style={{fontSize: "13px"}} for="OCCUR">OCCUR</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="CLAIMS MADE"
                                        class="custom-control-input"
                                        id="CLAIMS MADE"
                                        value="CLAIMS MADE"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" style={{fontSize: "13px"}} for="CLAIMS MADE">CLAIMS MADE</label>
                                    </div>
                            </div>
                            <div className="col-4 my-5 text-center">
                                <textarea name="GENERAL" id="" cols="30" rows="3" onChange={handleBlur} className="form-control" name="GENERAL"></textarea>
                            </div>
                            <div className="col-3 my-5">
                                <input type="date" name="POLICY EFF DATE" className="form-control my-4" onChange={handleBlur} id=""/>
                            </div>
                            <div className="col-3 my-5">
                                <input type="date" name="POLICY EXP DATE" className="form-control my-4" onChange={handleBlur} id=""/>
                            </div>
                        </div>
                        <div className="row py-5 my-5">
                            <div className="col-2 my-5 text-center">
                                <h6 className="my-4" style={{fontSize: "12px"}}>EMPLOYERS LIABILITY</h6>
                            </div>
                            <div className="col-4 my-5 text-center">
                                <textarea name="CARRIER" id="" cols="30" rows="3" onChange={handleBlur} className="form-control" name="EMPLOYERS"></textarea>
                            </div>
                            <div className="col-3 my-5">
                                <input type="date" name="POLICY EFF DATE" className="form-control my-4" onChange={handleBlur} id=""/>
                            </div>
                            <div className="col-3 my-5">
                                <input type="date" name="POLICY EXP DATE" className="form-control my-4" onChange={handleBlur} id=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="row">
                            <div className="col-6 text-center">
                                <h6 style={{fontSize: "12px"}}>LIMITS</h6>
                            </div>
                            <div className="col-4 text-center">
                                <h6 style={{fontSize: "12px"}}>ANNUAL RENEWAL PREMIUM</h6>
                            </div>
                            <div className="col-2 text-center">
                                <h6 style={{fontSize: "12px"}}>+ - RATING MOD</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-4">
                                        <h6 style={{fontSize: "12px"}}>CSL EA ACC</h6>
                                    </div>
                                    <div className="col-8">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                        </div>
                                            <input type="text" onChange={handleBlur} class="form-control" name="CSL EA ACC" id="CSL EA ACC" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <h6 style={{fontSize: "12px"}}>BI EA ACC</h6>
                                    </div>
                                    <div className="col-8">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                        </div>
                                            <input type="text" onChange={handleBlur} class="form-control" name="BI EA ACC" id="CSL EA ACC" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <h6 style={{fontSize: "12px"}}>BI EA PER</h6>
                                    </div>
                                    <div className="col-8">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                        </div>
                                            <input type="text" onChange={handleBlur} class="form-control" name="BI EA PER" id="CSL EA ACC" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <h6 style={{fontSize: "12px"}}>PD EA ACC</h6>
                                    </div>
                                    <div className="col-8">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                        </div>
                                            <input type="text" onChange={handleBlur} class="form-control" name="PD EA ACC" id="CSL EA ACC" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 text-center">
                                        <div class="input-group mb-2 my-3">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                        </div>
                                            <input type="text" onChange={handleBlur} class="form-control" name="ANNUAL RENEWAL PREMIUM" id="CSL EA ACC" />
                                        </div>
                                        <div class="input-group mb-2 my-3">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                        </div>
                                            <input type="text" onChange={handleBlur} class="form-control" name="ANNUAL RENEWAL PREMIUM" id="CSL EA ACC" />
                                        </div>
                                        <div class="input-group mb-2 my-3">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                        </div>
                                            <input type="text" onChange={handleBlur} class="form-control" name="ANNUAL RENEWAL PREMIUM" id="CSL EA ACC" />
                                        </div>
                            </div>
                            <div className="col-2 text-center">
                                <input type="text" name="RATING" onChange={handleBlur} className="form-control my-5"  id=""/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-4">
                                        <h6 style={{fontSize: "12px"}}>EACH OCCURRENCE</h6>
                                    </div>
                                    <div className="col-8">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                        </div>
                                            <input type="text" onChange={handleBlur} class="form-control" name="EACH OCCURRENCE" id="EACH OCCURRENCE" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <h6 style={{fontSize: "12px"}}>GENERAL AGGR</h6>
                                    </div>
                                    <div className="col-8">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                        </div>
                                            <input type="text" onChange={handleBlur} class="form-control" name="GENERAL AGGR" id="GENERAL AGGR" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <h6 style={{fontSize: "12px"}}>PROD & COMP OPS AGGREGATE</h6>
                                    </div>
                                    <div className="col-8">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                        </div>
                                            <input type="text" onChange={handleBlur} class="form-control" name="PROD & COMP OPS AGGREGATE" id="PROD & COMP OPS AGGREGATE" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <h6 style={{fontSize: "12px"}}>PERSONAL & ADV INJURY</h6>
                                    </div>
                                    <div className="col-8">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                        </div>
                                            <input type="text" onChange={handleBlur} class="form-control" name="PERSONAL & ADV INJURY" id="PERSONAL & ADV INJURY" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <h6 style={{fontSize: "12px"}}>DAMAGE TO RENTED PREMISES</h6>
                                    </div>
                                    <div className="col-8">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                        </div>
                                            <input type="text" onChange={handleBlur} class="form-control" name="DAMAGE TO RENTED PREMISES" id="DAMAGE TO RENTED PREMISES" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <h6 style={{fontSize: "12px"}}>MEDICAL EXPENSE</h6>
                                    </div>
                                    <div className="col-8">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                        </div>
                                            <input type="text" onChange={handleBlur} class="form-control" name="MEDICAL EXPENSE" id="MEDICAL EXPENSE" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 text-center">
                                        <label htmlFor="">PREM / OPS</label>
                                        <div class="input-group mb-2 my-3">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                        </div>
                                            <input type="text" onChange={handleBlur} class="form-control" name="PREM / OPS" id="PREM / OPS" />
                                        </div>
                                        <label htmlFor="">PRODUCTS</label>
                                        <div class="input-group mb-2 my-3">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                        </div>
                                            <input type="text" onChange={handleBlur} class="form-control" name="ANNUAL RENEWAL PREMIUM" id="CSL EA ACC" />
                                        </div>
                                        <label htmlFor="">OTHER</label>
                                        <div class="input-group mb-2 my-3">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                        </div>
                                            <input type="text" onChange={handleBlur} class="form-control" name="ANNUAL RENEWAL PREMIUM" id="CSL EA ACC" />
                                        </div>
                            </div>
                            <div className="col-2 text-center my-5">
                                <input type="text" name="RATING" onChange={handleBlur} className="form-control my-5"  id=""/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-4">
                                        <h6 style={{fontSize: "12px"}}>EACH OCCURRENCE</h6>
                                    </div>
                                    <div className="col-8">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                        </div>
                                            <input type="text" onChange={handleBlur} class="form-control" name="EACH OCCURRENCE" id="EACH OCCURRENCE" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <h6 style={{fontSize: "12px"}}>EACH ACCIDENT</h6>
                                    </div>
                                    <div className="col-8">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                        </div>
                                            <input type="text" onChange={handleBlur} class="form-control" name="EACH ACCIDENT" id="EACH ACCIDENT" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <h6 style={{fontSize: "12px"}}>DISEASE EACH EMPLOYEE</h6>
                                    </div>
                                    <div className="col-8">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                        </div>
                                            <input type="text" onChange={handleBlur} class="form-control" name="DISEASE" id="EACH ACCIDENT" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <h6 style={{fontSize: "12px"}}>DISEASE POLICY LIMIT</h6>
                                    </div>
                                    <div className="col-8">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                        </div>
                                            <input type="text" onChange={handleBlur} class="form-control" name="DISEASE" id="EACH ACCIDENT" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 text-center">
                                        <div class="input-group mb-2 my-3">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                        </div>
                                            <input type="text" onChange={handleBlur} class="form-control" name="PREM / OPS" id="PREM / OPS" />
                                        </div>
                            </div>
                            <div className="col-2 pt-5 text-center mt-5">
                                <input type="text" name="RATING" onChange={handleBlur} className="form-control my-5"  id=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(4) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(6) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default UndoerlyingInsurance;