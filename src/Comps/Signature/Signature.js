import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const Signature = ({handleBlur,handleSubmit}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                    <div className="col-6">
                        <h6>SIGNATURE</h6>
                    </div>
                    <div className="col-6">
                        <div className="row ">
                            <div className="col-4">
                                <label htmlFor="">AGENCY CUSTOMER ID:</label>
                            </div>
                            <div className="col-8">
                                <input
                                 type="text"
                                 placeholder="AGENCY"
                                 onChange={handleBlur}
                                 name="AGENCY"
                                 className="form-control"
                                 />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="lead">IF THE COMPANY TO WHICH I AM APPLYING OFFERS UNINSURED MOTORISTS (UM), UNDERINSURED MOTORISTS UIM) AND/OR MEDICAL PAYMENTS COVERAGE IN MY STATE:</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                           <div className="col-6">
                                <label htmlFor=""> UNINSURED MOTORISTS (UM) COVERAGE: *</label>
                           </div>
                           <div className="col-6">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                        </div>
                                            <input type="text" onChange={handleBlur} class="form-control" name="UNINSURED" id="CSL EA ACC" />
                                        </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-6">
                                <label htmlFor=""> UNDERINSURED MOTORISTS (UIM) COVERAGE: *</label>
                           </div>
                           <div className="col-6">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                        </div>
                                            <input type="text" onChange={handleBlur} class="form-control" name="UNINSURED" id="CSL EA ACC" />
                                        </div>
                           </div>
                        </div>

                        <div className="row">
                           <div className="col-6">
                                <label htmlFor="">MEDICAL PAYMENTS COVERAGE: *</label>
                           </div>
                           <div className="col-6">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                        </div>
                                            <input type="text" onChange={handleBlur} class="form-control" name="MEDICAL" id="CSL EA ACC" />
                                        </div>
                           </div>
                        </div>
                        
                    </div>
                </div>
                        <div className="row text-center">
                            <div className="col">
                                <h6 style={{fontSize: "12px"}}>* IF APPLICABLE IN YOUR STATE</h6>
                            </div>
                        </div>
                        <div className="row text-center my-3">
                            <div className="col">
                                <h5 style={{textDecoration: "underLine"}}>APPLICABLE ONLY IN LOUISIANA, MONTANA, NEW HAMPSHIRE AND VERMONT</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <h6 style={{textDecoration: "underLine"}}>APPLICABLE ONLY IN LOUISIANA:</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <p className="lead my-2">
                            I ACKNOWLEDGE THAT UM COVERAGE HAS BEEN EXPLAINED TO ME, AND I HAVE BEEN OFFERED THE OPTION OF SELECTING UM LIMITS EQUAL TO MY LIABILITY LIMITS, UM LIMITS LOWER THAN MY LIABILITY LIMITS, OR TO REJECT UM COVERAGE ENTIRELY.
                            </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="">1. I SELECT UM LIMITS INDICATED IN THIS APPLICATION.</label>
                            </div>
                            <div className="col-2">
                                <input type="text" onChange={handleBlur} className="form-control" name="SELECT"/>
                                <strong>(INITIALS)</strong>
                            </div>
                            <div className="col-2">
                                <label htmlFor="">OR</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="">2. I REJECT UM COVERAGE IN ITS ENTIRETY</label>
                            </div>
                            <div className="col-2">
                                <input type="text" onChange={handleBlur} className="form-control" name="REJECT"/>
                                <strong>(INITIALS)</strong>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <h6 style={{textDecoration: "underLine"}}>APPLICABLE ONLY IN MONTANA:</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10">
                                <p className="leade">
                                I ACKNOWLEDGE I HAVE BEEN OFFERED UNINSURED MOTORISTS (UM) COVERAGE AND UNDERINSURED MOTORISTS (UIM) COVERAGE. I HAVE SELECTED THE LIMITS INDICATED IN THIS APPLICATION. IF NO LIMITS ARE SHOWN, I HAVE REJECTED THESE COVERAGES.
                                </p>
                            </div>
                            <div className="col-2">
                            <input type="text" onChange={handleBlur} className="form-control" name="ACKNOWLEDGE"/>
                                <strong>(INITIALS)</strong>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <h6 style={{textDecoration: "underLine"}}>APPLICABLE ONLY IN NEW HAMPSHIRE:</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <p className="lead my-2">
                            I ACKNOWLEDGE THAT UM COVERAGE HAS BEEN EXPLAINED TO ME, AND I HAVE BEEN OFFERED THE OPTION OF SELECTING UM LIMITS EQUAL TO MY LIABILITY LIMITS OR TO REJECT UM COVERAGE ENTIRELY.
                            </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="">1. I SELECT UM LIMITS INDICATED IN THIS APPLICATION.</label>
                            </div>
                            <div className="col-2">
                                <input type="text" onChange={handleBlur} className="form-control" name="SELECT"/>
                                <strong>(INITIALS)</strong>
                            </div>
                            <div className="col-2">
                                <label htmlFor="">OR</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="">2. I REJECT UM COVERAGE IN ITS ENTIRETY.</label>
                            </div>
                            <div className="col-2">
                                <input type="text" onChange={handleBlur} className="form-control" name="REJECT"/>
                                <strong>(INITIALS)</strong>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <h6 style={{textDecoration: "underLine"}}>APPLICABLE ONLY IN VERMONT:</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <p className="lead my-2">
                            I ACKNOWLEDGE THAT I HAVE BEEN OFFERED UM COVERAGE EQUAL TO MY LIABILITY LIMITS. I HAVE SELECTED THE LIMITS INDICATED IN THIS APPLICATION.
                            </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p className="leade">
                                IMPORTANT - THE STATEMENTS (ANSWERS) GIVEN ABOVE ARE TRUE AND ACCURATE. THE APPLICANT HAS NOT WILLFULLY CONCEALED OR MISREPRESENTED ANY MATERIAL FACT OR CIRCUMSTANCE CONCERNING THIS APPLICATION. THIS APPLICATION DOES NOT CONSTITUTE A BINDER.
                                </p>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="">PRODUCER'S SIGNATURE</label>
                                <input type="text" className="form-control" onChange={handleBlur} name="PRODUCER'S SIGNATURE"/>
                            </div>
                            <div className="col-4">
                                <label htmlFor="">PRODUCER'S NAME (Please Print)</label>
                                <input type="text" className="form-control" onChange={handleBlur} name="PPRODUCER'S NAME (Please Print)"/>
                            </div>
                            <div className="col-4">
                                <label htmlFor="">STATE PRODUCER LICENSE NO (Required in Florida)</label>
                                <input type="text" className="form-control" onChange={handleBlur} name="STATE PRODUCER LICENSE NO)"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-5">
                                <label htmlFor="">APPLICANT'S SIGNATURE</label>
                                <input type="text" className="form-control" onChange={handleBlur} name="APPLICANT'S SIGNATURE"/>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">DATE</label>
                                <input type="text" className="form-control" onChange={handleBlur} name="DATE"/>
                            </div>
                            <div className="col-4">
                                <label htmlFor="">NATIONAL PRODUCER NUMBER</label>
                                <input type="text" className="form-control" onChange={handleBlur} name="NATIONAL PRODUCER NUMBER"/>
                            </div>
                        </div>
                <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(12) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Submit" onClick={handleSubmit} className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default Signature;