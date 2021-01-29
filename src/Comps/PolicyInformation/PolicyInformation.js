import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const PolicyInformation = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div class="form-row">
                    <div className="col">
                        <h6>POLICY INFORMATION</h6>
                    </div>
                </div>
                <div className="row border">
                    <div className="col-8">
                         <h6 className="text-center">TRANSACTION TYPE</h6>
                         <div className="row">
                             <div className="col-8">
                                 <div className="row">
                                 <div className="col">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="NEW"
                                        class="custom-control-input"
                                        id="NEW"
                                        value="NEW"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" style={{fontSize: "13px"}} for="NEW">PNEW</label>
                                    </div>

                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="RENEWAL"
                                        class="custom-control-input"
                                        id="RENEWAL"
                                        value="RENEWAL"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" style={{fontSize: "13px"}} for="RENEWAL">RENEWAL</label>
                                    </div>
                                 </div>

                                 <div className="col">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="UMBRELLA"
                                        class="custom-control-input"
                                        id="UMBRELLA"
                                        value="UMBRELLA"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" style={{fontSize: "13px"}} for="NEW">UMBRELLA</label>
                                    </div>

                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="EXCESS"
                                        class="custom-control-input"
                                        id="EXCESS"
                                        value="EXCESS"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" style={{fontSize: "13px"}} for="EXCESS">EXCESS</label>
                                    </div>
                                 </div>
                                 <div className="col">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="OCCURRENCE"
                                        class="custom-control-input"
                                        id="OCCURRENCE"
                                        value="OCCURRENCE"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" style={{fontSize: "13px"}} for="OCCURRENCE">OCCURRENCE</label>
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
                                 <div className="col">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="VOLUNTARY"
                                        class="custom-control-input"
                                        id="VOLUNTARY"
                                        value="VOLUNTARY"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" style={{fontSize: "13px"}} for="VOLUNTARY">VOLUNTARY</label>
                                    </div>
                                 </div>
                                 </div>
                                 <div className="row my-2">
                                    <div className="col-4">
                                        <h6>EXPIRING POL #:</h6>
                                    </div>
                                    <div className="col-8">
                                        <input type="text" onChange={handleBlur} name="EXPIRING" className="form-control"/>
                                    </div>
                                </div>
                             </div>
                             <div className="col-4">
                                 <div className="row text-center">
                                     <div className="col">
                                        <label htmlFor="">RETROACTIVE DATE</label>
                                     </div>
                                 </div>
                                 <div className="row">
                                     <div className="col-6 text-center">
                                         <label style={{fontSize: "12px"}} className="m-0 p-0" htmlFor="">PROPOSED</label>
                                         <input type="date" onChange={handleBlur} name="PROPOSED" className="form-control"/>
                                     </div>
                                     <div className="col-6 text-center">
                                         <label style={{fontSize: "12px"}} className="m-0 p-0"  htmlFor="">CURRENT</label>
                                         <input type="date" onChange={handleBlur} name="CURRENT" className="form-control"/>
                                     </div>
                                 </div>
                             </div>
                         </div>
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <div className="col-6 text-center">
                                <label htmlFor="">LIMIT OF LIABILITY</label>
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text">$</div>
                                    </div>
                                    <input type="text" class="form-control" onChange={handleBlur} id="LIMIT OF LIABILITY" />
                                </div>
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text">$</div>
                                    </div>
                                    <input type="text" onChange={handleBlur} class="form-control" id="LIMIT OF LIABILITY" />
                                </div>
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text">$</div>
                                    </div>
                                    <input type="text" onChange={handleBlur} class="form-control" id="LIMIT OF LIABILITY" />
                                </div>
                            </div>
                            <div className="col-6 text-center">
                                <label htmlFor="">RETAINED LIMIT</label>
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text">$</div>
                                    </div>
                                    <input type="text" onChange={handleBlur} class="form-control" id="RETAINED LIMIT" />
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <label htmlFor="">FIRST DOLLAR DEFENSE (Y / N)</label>
                                    </div>
                                    <div className="col-4">
                                        <input type="text" onChange={handleBlur} class="form-control" id="FIRST DOLLAR DEFENSE (Y / N)" name="FIRST DOLLAR DEFENSE (Y / N)" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(1) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(3) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default PolicyInformation;