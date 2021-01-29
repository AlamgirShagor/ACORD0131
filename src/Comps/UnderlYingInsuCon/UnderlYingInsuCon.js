import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const UnderlYingInsuCon = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                    <div className="col-6">
                        <h6>UNDERLYING INSURANCE (continued)</h6>
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
                        <h6>UNDERLYING GENERAL LIABILITY INFORMATION (Explain all "YES" responses)</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <label htmlFor="">1. ARE DEFENSE COSTS:</label>
                    </div>
                    <div className="col-3">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="WITHIN AGGREGATE LIMITS?"
                                        class="custom-control-input"
                                        id="WITHIN AGGREGATE LIMITS?"
                                        value="WITHIN AGGREGATE LIMITS?"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" style={{fontSize: "13px"}} for="WITHIN AGGREGATE LIMITS?">WITHIN AGGREGATE LIMITS?</label>
                                    </div>
                    </div>
                    <div className="col-3">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="A SEPARATE LIMIT?"
                                        class="custom-control-input"
                                        id="A SEPARATE LIMIT?"
                                        value="A SEPARATE LIMIT?"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" style={{fontSize: "13px"}} for="A SEPARATE LIMIT?">A SEPARATE LIMIT?</label>
                                    </div>
                    </div>
                    <div className="col-3">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="UNLIMITED"
                                        class="custom-control-input"
                                        id="UNLIMITED"
                                        value="UNLIMITED"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" style={{fontSize: "13px"}} for="UNLIMITED">UNLIMITED?</label>
                                    </div>
                    </div>
                    <div className="row ml-3">
                        <div className="col">
                        <label htmlFor="">(In Arkansas, the underlying General Liability coverage cannot contain defense costs within aggregate limits, but must have a separate, equal limit or must be unlimited.) (In Oklahoma, the underlying General Liability coverage cannot contain defense costs wthin the limits; subject to Commissioner's Orders.)</label>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-10">
                        <label htmlFor="">2. INDICATE THE EDITION DATE OF THE ISO FORM OR SIMILAR FILING FOR THE UNDERLYING COVERAGE:</label>
                    </div>
                    <div className="col-2">
                        <input type="text" className="form-control" onChange={handleBlur} name="2. INDICATE" id=""/>
                    </div>
                </div>
                <div className="row my-1">
                    <div className="col-10">
                        <label htmlFor="">3. HAS ANY PRODUCT, WORK, ACCIDENT OR LOCATION BEEN EXCLUDED, UNINSURED OR SELF-INSURED FROM ANY PREVIOUS COVERAGE? (Y / N)</label>
                    </div>
                    <div className="col-2">
                        <input type="text" className="form-control" onChange={handleBlur} name="HAS ANY PRODUCT" id=""/>
                    </div>
                </div>
                <div className="row">
                        <div className="col-12">
                            <textarea name="info" className="form-control" onChange={handleBlur} id="" cols="30" rows="4"></textarea>
                        </div>
                </div>
                <div className="row">
                    <div className="col-10">
                        <label htmlFor="">4. FOR CLAIMS MADE, INDICATE RETROACTIVE DATE OF CURRENT UNDERLYING POLICY</label>
                    </div>
                    <div className="col-2">
                        <input type="text" className="form-control" onChange={handleBlur} name="FOR CLAIMS MADE" id=""/>
                    </div>
                </div>
                <div className="row my-1">
                    <div className="col-10">
                        <label htmlFor="">5. FOR CLAIMS MADE, INDICATE ENTRY DATE INTO UNINTERRUPTED CLAIMS MADE COVERAGE:</label>
                    </div>
                    <div className="col-2">
                        <input type="text" className="form-control" onChange={handleBlur} name="FOR CLAIMS MADE" id=""/>
                    </div>
                </div>
                <div className="row my-1">
                    <div className="col-7">
                        <label htmlFor="">5. FOR CLAIMS MADE, INDICATE ENTRY DATE INTO UNINTERRUPTED CLAIMS MADE COVERAGE:</label>
                    </div>
                    <div className="col-1">
                        <input type="text" className="form-control" onChange={handleBlur} name="FOR CLAIMS MADE" id=""/>
                    </div>
                    <div className="col-3">
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="">EFF. DATE:</label>
                            </div>
                            <div className="col-6">
                                <input type="date" className="form-control" onChange={handleBlur} name="FOR CLAIMS MADE" id=""/>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col">
                        <textarea name="FOR CLAIMS MADE" className="form-control my-1" onChange={handleBlur} id="" cols="30" rows="2"></textarea>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col">
                        <label htmlFor="">CHECK ALL COVERAGES IN UNDERLYING POLICIES. ALSO CHECK IF ANY EXPOSURES ARE PRESENT FOR EACH COVERAGE. PROVIDE AN EXPLANATION. EXPLAIN IF DIFFERENT LIMITS, EXTENSIONS, OR EXCLUSIONS. EXPLAIN ANY SPECIAL COVERAGES BEYOND STANDARD FORMS. <strong>EXPLAIN ALL EXPOSURES.</strong></label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="row text-center">
                            <div className="col">
                                <h6>CHECK IF APPROPRIATE</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="ANY AUTO (SYMBOL 1)"
                                        class="custom-control-input"
                                        id="ANY AUTO (SYMBOL 1)"
                                        value="ANY AUTO (SYMBOL 1)"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="ANY AUTO (SYMBOL 1)">ANY AUTO (SYMBOL 1)</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="CGL - CLAIMS MADE"
                                        class="custom-control-input"
                                        id="CGL - CLAIMS MADE"
                                        value="CGL - CLAIMS MADE"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="CGL - CLAIMS MADE">CGL - CLAIMS MADE</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="CGL - OCCURRENCE"
                                        class="custom-control-input"
                                        id="CGL - OCCURRENCE"
                                        value="CGL - OCCURRENCE"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="CGL - OCCURRENCE">CGL - OCCURRENCE</label>
                                    </div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col d-flex justify-content-between">
                                <h6>COVERAGE</h6>
                                <h6>EXPOSURE</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-between">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="AIRCRAFT LIABILITY"
                                        class="custom-control-input"
                                        id="AIRCRAFT LIABILITY"
                                        value="AIRCRAFT LIABILITY"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="AIRCRAFT LIABILITY">AIRCRAFT LIABILITY</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="EXPOSURE"
                                        class="custom-control-input"
                                        id="EXPOSURE"
                                        value="EXPOSURE"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="EXPOSURE"></label>
                                    </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-between">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="AIRCRAFT LIABILITY"
                                        class="custom-control-input"
                                        id="AIRCRAFT LIABILITY"
                                        value="AIRCRAFT LIABILITY"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="AIRCRAFT LIABILITY">AIRCRAFT LIABILITY</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="EXPOSURE"
                                        class="custom-control-input"
                                        id="EXPOSURE"
                                        value="EXPOSURE"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="EXPOSURE"></label>
                                    </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-between">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="AIRCRAFT LIABILITY"
                                        class="custom-control-input"
                                        id="AIRCRAFT LIABILITY"
                                        value="AIRCRAFT LIABILITY"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="AIRCRAFT LIABILITY">AIRCRAFT LIABILITY</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="EXPOSURE"
                                        class="custom-control-input"
                                        id="EXPOSURE"
                                        value="EXPOSURE"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="EXPOSURE"></label>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row mt-2">
                            <div className="col d-flex justify-content-between">
                                <h6>COVERAGE</h6>
                                <h6>EXPOSURE</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-between">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="CARE, CUSTODY, CONTROL"
                                        class="custom-control-input"
                                        id="CARE, CUSTODY, CONTROL"
                                        value="CARE, CUSTODY, CONTROL"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="CARE, CUSTODY, CONTROL">CARE, CUSTODY, CONTROL</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="EXPOSURE1"
                                        class="custom-control-input"
                                        id="EXPOSURE1"
                                        value="EXPOSURE1"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="EXPOSURE1"></label>
                                    </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-between">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="EMPLOYEE BENEFIT LIABILITY"
                                        class="custom-control-input"
                                        id="EMPLOYEE BENEFIT LIABILITY"
                                        value="EMPLOYEE BENEFIT LIABILITY"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="EMPLOYEE BENEFIT LIABILITY">EMPLOYEE BENEFIT LIABILITY</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="EXPOSURE2"
                                        class="custom-control-input"
                                        id="EXPOSURE2"
                                        value="EXPOSURE2"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="EXPOSURE2"></label>
                                    </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-between">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="FOREIGN LIABILITY / TRAVEL"
                                        class="custom-control-input"
                                        id="FOREIGN LIABILITY / TRAVEL"
                                        value="FOREIGN LIABILITY / TRAVEL"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="FOREIGN LIABILITY / TRAVEL">FOREIGN LIABILITY / TRAVEL</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="EXPOSURE3"
                                        class="custom-control-input"
                                        id="EXPOSURE3"
                                        value="EXPOSURE3"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="EXPOSURE3"></label>
                                    </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-between">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="GARAGEKEEPERS LIABILITY"
                                        class="custom-control-input"
                                        id="GARAGEKEEPERS LIABILITY"
                                        value="GARAGEKEEPERS LIABILITY"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="GARAGEKEEPERS LIABILITY">GARAGEKEEPERS LIABILITY</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="EXPOSURE4"
                                        class="custom-control-input"
                                        id="EXPOSURE4"
                                        value="EXPOSURE4"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="EXPOSURE4"></label>
                                    </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-between">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="INCIDENTAL MEDICAL MALPRACTICE"
                                        class="custom-control-input"
                                        id="INCIDENTAL MEDICAL MALPRACTICE"
                                        value="INCIDENTAL MEDICAL MALPRACTICE"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="INCIDENTAL MEDICAL MALPRACTICE">INCIDENTAL MEDICAL MALPRACTICE</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="EXPOSURE5"
                                        class="custom-control-input"
                                        id="EXPOSURE5"
                                        value="EXPOSURE5"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="EXPOSURE5"></label>
                                    </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-between">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="LIQUOR LIABILITY"
                                        class="custom-control-input"
                                        id="LIQUOR LIABILITY"
                                        value="LIQUOR LIABILITY"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="LIQUOR LIABILITY">LIQUOR LIABILITY</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="EXPOSURE6"
                                        class="custom-control-input"
                                        id="EXPOSURE6"
                                        value="EXPOSURE6"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="EXPOSURE6"></label>
                                    </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-between">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="POLLUTION LIABILITY"
                                        class="custom-control-input"
                                        id="POLLUTION LIABILITY"
                                        value="POLLUTION LIABILITY"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="POLLUTION LIABILITY">POLLUTION LIABILITY</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="EXPOSURE7"
                                        class="custom-control-input"
                                        id="EXPOSURE7"
                                        value="EXPOSURE7"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="EXPOSURE7"></label>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row mt-2">
                            <div className="col d-flex justify-content-between">
                                <h6>COVERAGE</h6>
                                <h6>EXPOSURE</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-between">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="PROFESSIONAL LIABILITY (E&O)"
                                        class="custom-control-input"
                                        id="PROFESSIONAL LIABILITY (E&O)"
                                        value="PROFESSIONAL LIABILITY (E&O)"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="PROFESSIONAL LIABILITY (E&O)">PROFESSIONAL LIABILITY (E&O)</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="EXPOSURE8"
                                        class="custom-control-input"
                                        id="EXPOSURE8"
                                        value="EXPOSURE8"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="EXPOSURE8"></label>
                                    </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-between">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="VENDORS LIABILITY"
                                        class="custom-control-input"
                                        id="VENDORS LIABILITY"
                                        value="VENDORS LIABILITY"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="VENDORS LIABILITY">PVENDORS LIABILITY</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="EXPOSURE9"
                                        class="custom-control-input"
                                        id="EXPOSURE9"
                                        value="EXPOSURE9"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="EXPOSURE9"></label>
                                    </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-between">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="WATERCRAFT LIABILITY"
                                        class="custom-control-input"
                                        id="WATERCRAFT LIABILITY"
                                        value="WATERCRAFT LIABILITY"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="WATERCRAFT LIABILITY">WATERCRAFT LIABILITY</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="EXPOSURE10"
                                        class="custom-control-input"
                                        id="EXPOSURE10"
                                        value="EXPOSURE10"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="EXPOSURE10"></label>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="">UNDERLYING INSURANCE COVERAGE INFORMATION (INCLUDE ALL RESTRICTIONS; e.g. LASER ENDORSEMENTS, DISCRIMINATION, SUBROGATION WAIVERS, OR EXTENSIONS OF COVERAGE) ACORD 101, Additional Remarks Schedule, may be attached if more space is required.</label>
                        <textarea className="form-control" onChange={handleBlur} name="UNDERLYING INSURANCE" id="" cols="30" rows="4"></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="">PREVIOUS EXPERIENCE: (GIVE DETAILS OF ALL LIABILITY CLAIMS EXCEEDING $10,000 OR OCCURRENCES THAT MAY GIVE RISE TO CLAIMS, DURING THE PAST FIVE (5) YEARS, WHETHER INSURED OR NOT. SPECIFY DATE, COVERAGE, DESCRIPTION, AMOUNT PAID, AMOUNT OUTSTANDING) ACORD 101, Additional Remarks Schedule, may be attached if more space is required.</label>
                        <textarea className="form-control" onChange={handleBlur} name="UNDERLYING INSURANCE" id="" cols="30" rows="4"></textarea>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="NO SUCH CLAIMS"
                                        class="custom-control-input"
                                        id="NO SUCH CLAIMS"
                                        value="NO SUCH CLAIMS"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" for="NO SUCH CLAIMS">NO SUCH CLAIMS</label>
                                    </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(5) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(7) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default UnderlYingInsuCon;