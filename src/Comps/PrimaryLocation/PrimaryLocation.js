import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const PrimaryLocation = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                    <div className="col">
                        <h6>PRIMARY LOCATION & SUBSIDIARIES (ACORD 125)</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-2 text-center">
                                <h6 style={{fontSize: "12px"}}>#</h6>
                            </div>
                            <div className="col-10 text-center">
                                <h6 style={{fontSize: "12px"}}>NAME AND LOCATION OF PRIMARY AND ALL SUBSIDIARY COMPANIES (Describe Operations)</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2 text-center">
                               <input type="text" onChang={handleBlur} className="form-control" name="#"/>
                            </div>
                            <div className="col-10 ">
                                <div className="row">
                                    <div className="col-3">
                                        <label htmlFor="">NAME:</label>
                                        <label htmlFor="">LOCATION:</label>
                                        <label htmlFor="">DESCRIPTION:</label>
                                    </div>
                                    <div className="col-9">
                                        <textarea name="det" id="" cols="30" rows="3" className="form-control"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2 text-center">
                               <input type="text" onChang={handleBlur} className="form-control" name="#"/>
                            </div>
                            <div className="col-10 ">
                                <div className="row">
                                    <div className="col-3">
                                        <label htmlFor="">NAME:</label>
                                        <label htmlFor="">LOCATION:</label>
                                        <label htmlFor="">DESCRIPTION:</label>
                                    </div>
                                    <div className="col-9">
                                        <textarea name="det" id="" cols="30" rows="3" className="form-control"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2 text-center">
                               <input type="text" onChang={handleBlur} className="form-control" name="#"/>
                            </div>
                            <div className="col-10 ">
                                <div className="row">
                                    <div className="col-3">
                                        <label htmlFor="">NAME:</label>
                                        <label htmlFor="">LOCATION:</label>
                                        <label htmlFor="">DESCRIPTION:</label>
                                    </div>
                                    <div className="col-9">
                                        <textarea name="det" id="" cols="30" rows="3" className="form-control"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2 text-center">
                               <input type="text" onChang={handleBlur} className="form-control" name="#"/>
                            </div>
                            <div className="col-10 ">
                                <div className="row">
                                    <div className="col-3">
                                        <label htmlFor="">NAME:</label>
                                        <label htmlFor="">LOCATION:</label>
                                        <label htmlFor="">DESCRIPTION:</label>
                                    </div>
                                    <div className="col-9">
                                        <textarea name="det" id="" cols="30" rows="3" className="form-control"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2 text-center">
                               <input type="text" onChang={handleBlur} className="form-control" name="#"/>
                            </div>
                            <div className="col-10 ">
                                <div className="row">
                                    <div className="col-3">
                                        <label htmlFor="">NAME:</label>
                                        <label htmlFor="">LOCATION:</label>
                                        <label htmlFor="">DESCRIPTION:</label>
                                    </div>
                                    <div className="col-9">
                                        <textarea name="det" id="" cols="30" rows="3" className="form-control"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2 text-center">
                               <input type="text" onChang={handleBlur} className="form-control" name="#"/>
                            </div>
                            <div className="col-10 ">
                                <div className="row">
                                    <div className="col-3">
                                        <label htmlFor="">NAME:</label>
                                        <label htmlFor="">LOCATION:</label>
                                        <label htmlFor="">DESCRIPTION:</label>
                                    </div>
                                    <div className="col-9">
                                        <textarea name="det" id="" cols="30" rows="3" className="form-control"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-3 text-center">
                                <h6 style={{fontSize: "12px"}}>ANNUAL PAYROLL</h6>
                            </div>
                            <div className="col-3 text-center">
                                <h6 style={{fontSize: "12px"}}>ANN GROSS SALES</h6>
                            </div>
                            <div className="col-3 text-center">
                                <h6 style={{fontSize: "12px"}}>FOREIGN GROSS SALES</h6>
                            </div>
                            <div className="col-3 text-center">
                                <h6 style={{fontSize: "12px"}}># EMPL</h6>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-3">
                                <input type="text" className="form-control my-3" name="ANNUAL PAYROLL" onChange={handleBlur}/>
                            </div>
                            <div className="col-3">
                                <input type="text" className="form-control my-3" name="ANN GROSS SALES" onChange={handleBlur}/>
                            </div>
                            <div className="col-3">
                                <input type="text" className="form-control my-3" name="FOREIGN GROSS SALES" onChange={handleBlur}/>
                            </div>
                            <div className="col-3">
                                <input type="text" className="form-control my-3" name="# EMPL" onChange={handleBlur}/>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-3">
                                <input type="text" className="form-control my-3" name="ANNUAL PAYROLL" onChange={handleBlur}/>
                            </div>
                            <div className="col-3">
                                <input type="text" className="form-control my-3" name="ANN GROSS SALES" onChange={handleBlur}/>
                            </div>
                            <div className="col-3">
                                <input type="text" className="form-control my-3" name="FOREIGN GROSS SALES" onChange={handleBlur}/>
                            </div>
                            <div className="col-3">
                                <input type="text" className="form-control my-3" name="# EMPL" onChange={handleBlur}/>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-3">
                                <input type="text" className="form-control my-3" name="ANNUAL PAYROLL" onChange={handleBlur}/>
                            </div>
                            <div className="col-3">
                                <input type="text" className="form-control my-3" name="ANN GROSS SALES" onChange={handleBlur}/>
                            </div>
                            <div className="col-3">
                                <input type="text" className="form-control my-3" name="FOREIGN GROSS SALES" onChange={handleBlur}/>
                            </div>
                            <div className="col-3">
                                <input type="text" className="form-control my-3" name="# EMPL" onChange={handleBlur}/>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-3">
                                <input type="text" className="form-control my-3" name="ANNUAL PAYROLL" onChange={handleBlur}/>
                            </div>
                            <div className="col-3">
                                <input type="text" className="form-control my-3" name="ANN GROSS SALES" onChange={handleBlur}/>
                            </div>
                            <div className="col-3">
                                <input type="text" className="form-control my-3" name="FOREIGN GROSS SALES" onChange={handleBlur}/>
                            </div>
                            <div className="col-3">
                                <input type="text" className="form-control my-3" name="# EMPL" onChange={handleBlur}/>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-3">
                                <input type="text" className="form-control my-3" name="ANNUAL PAYROLL" onChange={handleBlur}/>
                            </div>
                            <div className="col-3">
                                <input type="text" className="form-control my-3" name="ANN GROSS SALES" onChange={handleBlur}/>
                            </div>
                            <div className="col-3">
                                <input type="text" className="form-control my-3" name="FOREIGN GROSS SALES" onChange={handleBlur}/>
                            </div>
                            <div className="col-3">
                                <input type="text" className="form-control my-3" name="# EMPL" onChange={handleBlur}/>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-3">
                                <input type="text" className="form-control my-3" name="ANNUAL PAYROLL" onChange={handleBlur}/>
                            </div>
                            <div className="col-3">
                                <input type="text" className="form-control my-3" name="ANN GROSS SALES" onChange={handleBlur}/>
                            </div>
                            <div className="col-3">
                                <input type="text" className="form-control my-3" name="FOREIGN GROSS SALES" onChange={handleBlur}/>
                            </div>
                            <div className="col-3">
                                <input type="text" className="form-control my-3" name="# EMPL" onChange={handleBlur}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(3) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(5) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default PrimaryLocation;