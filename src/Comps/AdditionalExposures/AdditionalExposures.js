import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'


const AdditionalExposures = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                    <div className="col-6">
                        <h6>ADDITIONAL EXPOSURES</h6>
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
                <div className="row my-2">
                    <div className="col-11">
                        <h6>EXPLAIN ALL "YES" RESPONSES, PROVIDE OTHER INFORMATION REQUIRED</h6>
                    </div>
                    <div className="col-1 text-center">
                        <h6>Y/N</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center ">
                        <h6 style={{fontSize: "14px"}}>ADVERTISERS LIABILITY</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <div className="row my-1">
                            <div className="col-4">
                                <label htmlFor="">1. MEDIA USED:</label>
                            </div>
                            <div className="col-8">
                                <input type="text" name="MEDIA USED" className="form-control" onChange={handleBlur} id=""/>
                            </div>
                        </div>
                        <div className="row my-1">
                            <div className="col-4">
                                <label htmlFor="">ANNUAL COST:</label>
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
                    </div>
                    <div className="col-1">
                        <input type="text" name="MEDIA USED Y/N" className="form-control" onChange={handleBlur} id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">2. ARE SERVICES OF AN ADVERTISING AGENCY USED?</label>
                        <textarea name="2. ARE SERVICES OF AN ADVERTISING AGENCY USED?" onChange={handleBlur} className="form-control" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="MEDIA USED Y/N" className="form-control" onChange={handleBlur} id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">3. ANY COVERAGE PROVIDED UNDER AGENCY'S POLICY?</label>
                        <textarea name="ANY COVERAGE" onChange={handleBlur} className="form-control" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="ANY COVERAGE Y/N" className="form-control" onChange={handleBlur} id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center  mt-2">
                        <h6 style={{fontSize: "14px"}}>AIRCRAFT LIABILITY</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">4. DOES APPLICANT OWN / LEASE / OPERATE AIRCRAFT?</label>
                        <textarea name="DOES APPLICANT OWN" onChange={handleBlur} className="form-control" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="DOES APPLICANT OWN Y/N" className="form-control" onChange={handleBlur} id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center mt-2">
                        <h6 style={{fontSize: "14px"}}>AUTO LIABILITY</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">5. ARE EXPLOSIVES, CAUSTICS, FLAMMABLES OR OTHER DANGEROUS CARGO HAULED?</label>
                        <textarea name="ARE EXPLOSIVES" onChange={handleBlur} className="form-control" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="ARE EXPLOSIVES Y/N" className="form-control" onChange={handleBlur} id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">6. ARE PASSENGERS CARRIED FOR A FEE?</label>
                        <textarea name="ARE PASSENGERS" onChange={handleBlur} className="form-control" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="ARE PASSENGERS Y/N" className="form-control" onChange={handleBlur} id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">6. ARE PASSENGERS CARRIED FOR A FEE?</label>
                        <textarea name="ARE PASSENGERS" onChange={handleBlur} className="form-control" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="ARE PASSENGERS Y/N" className="form-control" onChange={handleBlur} id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">7. ANY UNITS NOT INSURED BY UNDERLYING POLICIES?</label>
                        <textarea name="ANY UNITS NOT" onChange={handleBlur} className="form-control" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="ANY UNITS NOT Y/N" className="form-control" onChange={handleBlur} id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">8. ARE ANY VEHICLES LEASED OR RENTED TO OTHERS?</label>
                        <textarea name="ARE ANY VEHICLES" onChange={handleBlur} className="form-control" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="ARE ANY VEHICLES Y/N" className="form-control" onChange={handleBlur} id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">9. ARE HIRED AND NON-OWNED COVERAGES PROVIDED?</label>
                        <textarea name="ARE HIRED AND NON-OWNED" onChange={handleBlur} className="form-control" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="ARE HIRED AND NON-OWNED Y/N" className="form-control" onChange={handleBlur} id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center mt-2">
                        <h6 style={{fontSize: "14px"}}>CONTRACTORS LIABILITY</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">10. IS BRIDGE, DAM, OR MARINE WORK PERFORMED?</label>
                        <textarea name="IS BRIDGE" onChange={handleBlur} className="form-control" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="IS BRIDGE Y/N" className="form-control" onChange={handleBlur} id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">11. DESCRIBE TYPICAL JOBS PERFORMED (ACORD 101, Additional Remarks Schedule, may be attached if more space is required)</label>
                        <textarea name="DESCRIBE TYPICAL" onChange={handleBlur} className="form-control" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="DESCRIBE TYPICAL Y/N" className="form-control" onChange={handleBlur} id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">12. DESCRIBE AGREEMENT (ACORD 101, Additional Remarks Schedule, may be attached if more space is required)</label>
                        <textarea name="DESCRIBE AGREEMENT" onChange={handleBlur} className="form-control" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="DESCRIBE AGREEMENT Y/N" className="form-control" onChange={handleBlur} id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">13. DOES APPLICANT OWN, RENT, OR OTHERWISE USE CRANES?</label>
                        <textarea name="DOES APPLICANT OWN" onChange={handleBlur} className="form-control" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="DOES APPLICANT OWN Y/N" className="form-control" onChange={handleBlur} id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">14. DO SUBCONTRACTORS CARRY COVERAGES OR LIMITS LESS THAN APPLICANT?</label>
                        <textarea name="DO SUBCONTRACTORS  OWN" onChange={handleBlur} className="form-control" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="DO SUBCONTRACTORS  Y/N" className="form-control" onChange={handleBlur} id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center mt-2">
                        <h6 style={{fontSize: "14px"}}>EMPLOYERS LIABILITY</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">15. IS APPLICANT SELF-INSURED IN ANY STATE?</label>
                        <textarea name="IS APPLICANT" onChange={handleBlur} className="form-control" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="IS APPLICANT Y/N" className="form-control" onChange={handleBlur} id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="">16. SUBJECT TO:</label>
                    </div>
                    <div className="col">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="JONES ACT"
                                        class="custom-control-input"
                                        id="JONES ACT"
                                        value="JONES ACT"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="JONES ACT">JONES ACT</label>
                                    </div>
                    </div>
                    <div className="col">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="FELA"
                                        class="custom-control-input"
                                        id="FELA"
                                        value="FELA"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="FELA">FELA</label>
                                    </div>
                    </div>
                    <div className="col">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name=" STOP GAP"
                                        class="custom-control-input"
                                        id=" STOP GAP"
                                        value=" STOP GAP"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for=" STOP GAP"> STOP GAP</label>
                                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center ">
                        <h6 style={{fontSize: "14px"}}>INCIDENTAL MALPRACTICE LIABILITY</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">17. IS A HOSPITAL OR FIRST AID FACILITY MAINTAINED?</label>
                        <textarea name="IS A HOSPITAL" onChange={handleBlur} className="form-control" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="IS A HOSPITAL Y/N" className="form-control" onChange={handleBlur} id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">18. ARE COVERAGES PROVIDED FOR DOCTORS / NURSES?</label>
                        <textarea name="ARE COVERAGES" onChange={handleBlur} className="form-control" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="ARE COVERAGES Y/N" className="form-control" onChange={handleBlur} id=""/>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="">19. INDICATE # OF DOCTORS:</label>
                            </div>
                            <div className="col">
                                <input type="text" name="INDICATE" className="form-control" onChange={handleBlur} id=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="">NURSES:</label>
                            </div>
                            <div className="col">
                                <input type="text" name="NURSES" className="form-control" onChange={handleBlur} id=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="">BEDS:</label>
                            </div>
                            <div className="col">
                                <input type="text" name="BEDS:" className="form-control" onChange={handleBlur} id=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(8) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(10) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default AdditionalExposures;