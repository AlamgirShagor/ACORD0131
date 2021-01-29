import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const AdditionalExposuresCont = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
            <div className="row">
                    <div className="col-6">
                        <h6>ADDITIONAL EXPOSURES (continued)</h6>
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
                    <div className="col-6">
                        <div className="row">
                            <div className="col-2">
                                <h6 style={{fontSize: "14px"}}>EPA #:</h6>
                            </div>
                            <div className="col-10">
                            <input
                                 type="text"
                                 onChange={handleBlur}
                                 name="EPA"
                                 className="form-control"
                                 />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <h6 style={{fontSize: "14px"}}>POLLUTION LIABILITY</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">20. DO CURRENT OR PAST PRODUCTS, OR THEIR COMPONENTS, CONTAIN HAZARDOUS MATERIALS THAT MAY REQUIRE SPECIAL DISPOSAL METHODS?</label>
                        <textarea name="DO CURRENT" onChange={handleBlur} className="form-control" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="DO CURRENT Y/N" className="form-control" onChange={handleBlur} id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">21. INDICATE THE COVERAGES CARRIED:</label>
                        <div className="row">
                            <div className="col">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="GL"
                                        class="custom-control-input"
                                        id="GL"
                                        value="GL"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="GL">GL WITH STANDARD ISO POLLUTION EXCLUSION</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="GL WITH STANDARD"
                                        class="custom-control-input"
                                        id="GL WITH STANDARD"
                                        value="GL WITH STANDARD"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="GL WITH STANDARD">GL WITH STANDARD SUDDEN & ACCIDENTAL ONLY</label>
                                    </div>
                            </div>
                            <div className="col">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="GL WITH POLLUTION"
                                        class="custom-control-input"
                                        id="GL WITH POLLUTION"
                                        value="GL WITH POLLUTION"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="GL">GL WITH POLLUTION COVERAGE ENDORSEMENT</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="SEPARATE"
                                        class="custom-control-input"
                                        id="SEPARATE"
                                        value="SEPARATE"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="SEPARATE">SEPARATE POLLUTION COVERAGE</label>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <input type="text" name="21. INDICATE THE COVERAGES CARRIED: Y/N" className="form-control" onChange={handleBlur} id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center mt-3">
                        <h6 style={{fontSize: "14px"}}>PRODUCT LIABILITY</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">22. ARE MISSILES, ENGINES, GUIDANCE SYSTEMS, FRAMES OR ANY OTHER PRODUCT USED / INSTALLED IN AIRCRAFT?</label>
                        <textarea name="ARE MISSILES" onChange={handleBlur} className="form-control" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="ARE MISSILES Y/N" className="form-control" onChange={handleBlur} id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">23. ANY FOREIGN OPERATIONS, FOREIGN PRODUCTS DISTRIBUTED IN THE USA OR US PRODUCTS SOLD / DISTRIBUTED IN FOREIGN COUNTRIES? (If "YES", Attach ACORD 815)</label>
                    </div>
                    <div className="col-1">
                        <input type="text" name="ANY FOREIGN OPERATIONS Y/N" className="form-control" onChange={handleBlur} id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="">24. PRODUCT LIABILITY LOSS IN PAST THREE (3) YEARS? (SPECIFY)</label>
                    </div>
                    <div className="col">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                        </div>
                                            <input type="text" onChange={handleBlur} class="form-control" name="PRODUCT" id="CSL EA ACC" />
                                        </div>
                    </div>
                    <div className="col">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                        </div>
                                            <input type="text" onChange={handleBlur} class="form-control" name="PRODUCT" id="CSL EA ACC" />
                                        </div>
                    </div>
                    <div className="col">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                        </div>
                                            <input type="text" onChange={handleBlur} class="form-control" name="PRODUCT" id="CSL EA ACC" />
                                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center ">
                        <h6 style={{fontSize: "14px"}}>PROTECTIVE LIABILITY</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">26. DESCRIBE INDEPENDENT CONTRACTORS (ACORD 101, Additional Remarks Schedule, may be attached if more space is required)</label>
                        <textarea name="DESCRIBE" onChange={handleBlur} className="form-control" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="DESCRIBE Y/N" className="form-control" onChange={handleBlur} id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center ">
                        <h6 style={{fontSize: "14px"}}>WATERCRAFT LIABILITY</h6>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col">
                        <label htmlFor="">27. DOES APPLICANT OWN OR LEASE WATERCRAFT?</label>
                    </div>
                    <div className="row ">
                        <div className="col-6">
                            <div className="row">
                                <div className="col-3 text-center">
                                    <label style={{fontSize: "13px"}} htmlFor="">LOC #</label>
                                </div>
                                <div className="col-3 text-center">
                                    <label style={{fontSize: "13px"}} htmlFor=""># OWNED</label>
                                </div>
                                <div className="col-3 text-center">
                                    <label style={{fontSize: "13px"}} htmlFor="">LENGTH</label>
                                </div>
                                <div className="col-3 text-center">
                                    <label style={{fontSize: "13px"}} htmlFor="">HORSEPOWER</label>
                                </div>
                            </div>
                            <div className="row mx-1">
                                <div className="col-3 text-center">
                                    <input type="text" name="LOC" className="form-control" onChange={handleBlur} id=""/>
                                </div>
                                <div className="col-3 text-center">
                                    <input type="text" name="OWNED" className="form-control" onChange={handleBlur} id=""/>
                                </div>
                                <div className="col-3 text-center">
                                    <input type="text" name="LENGTH" className="form-control" onChange={handleBlur} id=""/>
                                </div>
                                <div className="col-3 text-center">
                                    <input type="text" name="HORSEPOWER" className="form-control" onChange={handleBlur} id=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-3 text-center">
                                    <label style={{fontSize: "13px"}} htmlFor="">LOC #</label>
                                </div>
                                <div className="col-3 text-center">
                                    <label style={{fontSize: "13px"}} htmlFor=""># OWNED</label>
                                </div>
                                <div className="col-3 text-center">
                                    <label style={{fontSize: "13px"}} htmlFor="">LENGTH</label>
                                </div>
                                <div className="col-3 text-center">
                                    <label style={{fontSize: "13px"}} htmlFor="">HORSEPOWER</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 text-center">
                                    <input type="text" name="LOC" className="form-control" onChange={handleBlur} id=""/>
                                </div>
                                <div className="col-3 text-center">
                                    <input type="text" name="OWNED" className="form-control" onChange={handleBlur} id=""/>
                                </div>
                                <div className="col-3 text-center">
                                    <input type="text" name="LENGTH" className="form-control" onChange={handleBlur} id=""/>
                                </div>
                                <div className="col-3 text-center">
                                    <input type="text" name="HORSEPOWER" className="form-control" onChange={handleBlur} id=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center mt-2">
                        <h6 style={{fontSize: "14px"}}>APARTMENTS / CONDOMINIUMS / HOTELS / MOTELS</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="">28.</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                            <div className="row">
                                <div className="col-2  text-center">
                                    <label style={{fontSize: "13px"}} htmlFor="">LOC #</label>
                                </div>
                                <div className="col-2  text-center">
                                    <label style={{fontSize: "13px"}} htmlFor=""># STORIES</label>
                                </div>
                                <div className="col-2 text-center">
                                    <label style={{fontSize: "13px"}} htmlFor=""># UNITS</label>
                                </div>
                                <div className="col-3 text-center">
                                    <label style={{fontSize: "13px"}} htmlFor=""># SWIMMING POOLS</label>
                                </div>
                                <div className="col-3 text-center">
                                    <label style={{fontSize: "13px"}} htmlFor=""># DIVING BOARDS</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2 ">
                                    <input type="text" name="LOC" className="form-control" onChange={handleBlur} id=""/>
                                </div>
                                <div className="col-2">
                                    <input type="text" name="STORIES" className="form-control" onChange={handleBlur} id=""/>
                                </div>
                                <div className="col-2">
                                    <input type="text" name="UNITS" className="form-control" onChange={handleBlur} id=""/>
                                </div>
                                <div className="col-3 text-center">
                                    <input type="text" name="SWIMMING" className="form-control" onChange={handleBlur} id=""/>
                                </div>
                                <div className="col-3 text-center">
                                    <input type="text" name="DIVING" className="form-control" onChange={handleBlur} id=""/>
                                </div>
                            </div>
                    </div>
                    <div className="col-6">
                            <div className="row">
                                <div className="col-2  text-center">
                                    <label style={{fontSize: "13px"}} htmlFor="">LOC #</label>
                                </div>
                                <div className="col-2  text-center">
                                    <label style={{fontSize: "13px"}} htmlFor=""># STORIES</label>
                                </div>
                                <div className="col-2 text-center">
                                    <label style={{fontSize: "13px"}} htmlFor=""># UNITS</label>
                                </div>
                                <div className="col-3 text-center">
                                    <label style={{fontSize: "13px"}} htmlFor=""># SWIMMING POOLS</label>
                                </div>
                                <div className="col-3 text-center">
                                    <label style={{fontSize: "13px"}} htmlFor=""># DIVING BOARDS</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2 ">
                                    <input type="text" name="LOC" className="form-control" onChange={handleBlur} id=""/>
                                </div>
                                <div className="col-2">
                                    <input type="text" name="STORIES" className="form-control" onChange={handleBlur} id=""/>
                                </div>
                                <div className="col-2">
                                    <input type="text" name="UNITS" className="form-control" onChange={handleBlur} id=""/>
                                </div>
                                <div className="col-3 text-center">
                                    <input type="text" name="SWIMMING" className="form-control" onChange={handleBlur} id=""/>
                                </div>
                                <div className="col-3 text-center">
                                    <input type="text" name="DIVING" className="form-control" onChange={handleBlur} id=""/>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(9) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(11) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default AdditionalExposuresCont;