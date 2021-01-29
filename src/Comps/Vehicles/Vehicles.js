import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const Vehicles = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                    <div className="col">
                        <h6>VEHICLES</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="row text-center" style={{marginBottom: "30px"}}>
                            <div className="col-6">
                                <h6 style={{fontSize: "13px"}}>TYPE</h6>
                            </div>
                            <div className="col-2">
                                <h6 style={{fontSize: "13px"}}>#OWNED</h6>
                            </div>
                            <div className="col-2">
                                <h6 style={{fontSize: "13px"}}>#NON- OWNED</h6>
                            </div>
                            <div className="col-2">
                                <h6 style={{fontSize: "13px"}}>#LEASED</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 text-center">
                                <h6 style={{fontSize: "13px"}}>PRIVATE PASSENGER</h6>
                            </div>
                            <div className="col-2">
                                <input type="text" onChange={handleBlur} className="form-control" name="OWNED"/>
                            </div>
                            <div className="col-2">
                                <input type="text" onChange={handleBlur} className="form-control" name="# NON- OWNED"/>
                            </div>
                            <div className="col-2">
                                <input type="text" onChange={handleBlur} className="form-control" name="LEASED"/>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-6 text-center">
                               <div className="row">
                                   <div className="col-6">
                                       <h6 style={{fontSize: "13px"}}>TRUCKS</h6>
                                   </div>
                                   <div className="col-6">
                                        <h6 style={{fontSize: "13px"}}>LIGHT</h6>
                                   </div>
                               </div>
                            </div>
                            <div className="col-2">
                                <input type="text" onChange={handleBlur} className="form-control" name="OWNED"/>
                            </div>
                            <div className="col-2">
                                <input type="text" onChange={handleBlur} className="form-control" name="# NON- OWNED"/>
                            </div>
                            <div className="col-2">
                                <input type="text" onChange={handleBlur} className="form-control" name="LEASED"/>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-6 text-center">
                               <div className="row">
                                   <div className="col-6">
                                       <h6 style={{fontSize: "13px"}}></h6>
                                   </div>
                                   <div className="col-6">
                                        <h6 style={{fontSize: "13px"}}>MEDIUM</h6>
                                   </div>
                               </div>
                            </div>
                            <div className="col-2">
                                <input type="text" onChange={handleBlur} className="form-control" name="OWNED"/>
                            </div>
                            <div className="col-2">
                                <input type="text" onChange={handleBlur} className="form-control" name="# NON- OWNED"/>
                            </div>
                            <div className="col-2">
                                <input type="text" onChange={handleBlur} className="form-control" name="LEASED"/>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-6 text-center">
                               <div className="row">
                                   <div className="col-6">
                                       <h6 style={{fontSize: "13px"}}></h6>
                                   </div>
                                   <div className="col-6">
                                        <h6 style={{fontSize: "13px"}}>HEAVY</h6>
                                   </div>
                               </div>
                            </div>
                            <div className="col-2">
                                <input type="text" onChange={handleBlur} className="form-control" name="OWNED"/>
                            </div>
                            <div className="col-2">
                                <input type="text" onChange={handleBlur} className="form-control" name="# NON- OWNED"/>
                            </div>
                            <div className="col-2">
                                <input type="text" onChange={handleBlur} className="form-control" name="LEASED"/>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-6 text-center">
                               <div className="row">
                                   <div className="col-6">
                                       <h6 style={{fontSize: "13px"}}></h6>
                                   </div>
                                   <div className="col-6">
                                        <h6 style={{fontSize: "13px"}}>EX. HEAVY</h6>
                                   </div>
                               </div>
                            </div>
                            <div className="col-2">
                                <input type="text" onChange={handleBlur} className="form-control" name="OWNED"/>
                            </div>
                            <div className="col-2">
                                <input type="text" onChange={handleBlur} className="form-control" name="# NON- OWNED"/>
                            </div>
                            <div className="col-2">
                                <input type="text" onChange={handleBlur} className="form-control" name="LEASED"/>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-6 text-center">
                               <div className="row">
                                   <div className="col-6">
                                       <h6 style={{fontSize: "13px"}}>TRUCKS / TRACTORS</h6>
                                   </div>
                                   <div className="col-6">
                                        <h6 style={{fontSize: "13px"}}>HEAVY</h6>
                                   </div>
                               </div>
                            </div>
                            <div className="col-2">
                                <input type="text" onChange={handleBlur} className="form-control" name="OWNED"/>
                            </div>
                            <div className="col-2">
                                <input type="text" onChange={handleBlur} className="form-control" name="# NON- OWNED"/>
                            </div>
                            <div className="col-2">
                                <input type="text" onChange={handleBlur} className="form-control" name="LEASED"/>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-6 text-center">
                               <div className="row">
                                   <div className="col-6">
                                       <h6 style={{fontSize: "13px"}}></h6>
                                   </div>
                                   <div className="col-6">
                                        <h6 style={{fontSize: "13px"}}>EX. HEAVY</h6>
                                   </div>
                               </div>
                            </div>
                            <div className="col-2">
                                <input type="text" onChange={handleBlur} className="form-control" name="OWNED"/>
                            </div>
                            <div className="col-2">
                                <input type="text" onChange={handleBlur} className="form-control" name="# NON- OWNED"/>
                            </div>
                            <div className="col-2">
                                <input type="text" onChange={handleBlur} className="form-control" name="LEASED"/>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-6 text-center">
                                <h6 style={{fontSize: "13px"}}>BUSES</h6>
                            </div>
                            <div className="col-2">
                                <input type="text" onChange={handleBlur} className="form-control" name="OWNED"/>
                            </div>
                            <div className="col-2">
                                <input type="text" onChange={handleBlur} className="form-control" name="# NON- OWNED"/>
                            </div>
                            <div className="col-2">
                                <input type="text" onChange={handleBlur} className="form-control" name="LEASED"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="row">
                            <div className="col text-center">
                                <h6 style={{fontSize: "13px", marginBottom: "47px"}}>PROPERTY HAULED</h6>
                            </div>
                            <input type="text" onChange={handleBlur} className="form-control my-1" name="PROPERTY HAULED"/>
                            <input type="text" onChange={handleBlur} className="form-control my-1" name="PROPERTY HAULED"/>
                            <input type="text" onChange={handleBlur} className="form-control my-1" name="PROPERTY HAULED"/>
                            <input type="text" onChange={handleBlur} className="form-control my-1" name="PROPERTY HAULED"/>
                            <input type="text" onChange={handleBlur} className="form-control my-1" name="PROPERTY HAULED"/>
                            <input type="text" onChange={handleBlur} className="form-control my-1" name="PROPERTY HAULED"/>
                            <input type="text" onChange={handleBlur} className="form-control my-1" name="PROPERTY HAULED"/>
                            <input type="text" onChange={handleBlur} className="form-control my-1" name="PROPERTY HAULED"/>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="row">
                            <div className="col text-center">
                                <h6 style={{fontSize: "13px"}}>RADIUS (MILES)</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <h6 style={{fontSize: "13px"}}>LOCAL</h6>
                            </div>
                            <div className="col-4">
                                <h6 style={{fontSize: "13px"}}>INTER- MEDIATE</h6>
                            </div>
                            <div className="col-4">
                                <h6 style={{fontSize: "13px"}}>LONG DISTANCE</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <input type="text" onChange={handleBlur} className="form-control my-1" name="LOCAL"/>
                            </div>
                            <div className="col-4">
                                <input type="text" onChange={handleBlur} className="form-control my-1" name="INTER- MEDIATE"/>
                            </div>
                            <div className="col-4">
                                <input type="text" onChange={handleBlur} className="form-control my-1" name="LONG DISTANCE"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <input type="text" onChange={handleBlur} className="form-control my-1" name="LOCAL"/>
                            </div>
                            <div className="col-4">
                                <input type="text" onChange={handleBlur} className="form-control my-1" name="INTER- MEDIATE"/>
                            </div>
                            <div className="col-4">
                                <input type="text" onChange={handleBlur} className="form-control my-1" name="LONG DISTANCE"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <input type="text" onChange={handleBlur} className="form-control my-1" name="LOCAL"/>
                            </div>
                            <div className="col-4">
                                <input type="text" onChange={handleBlur} className="form-control my-1" name="INTER- MEDIATE"/>
                            </div>
                            <div className="col-4">
                                <input type="text" onChange={handleBlur} className="form-control my-1" name="LONG DISTANCE"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <input type="text" onChange={handleBlur} className="form-control my-1" name="LOCAL"/>
                            </div>
                            <div className="col-4">
                                <input type="text" onChange={handleBlur} className="form-control my-1" name="INTER- MEDIATE"/>
                            </div>
                            <div className="col-4">
                                <input type="text" onChange={handleBlur} className="form-control my-1" name="LONG DISTANCE"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <input type="text" onChange={handleBlur} className="form-control my-1" name="LOCAL"/>
                            </div>
                            <div className="col-4">
                                <input type="text" onChange={handleBlur} className="form-control my-1" name="INTER- MEDIATE"/>
                            </div>
                            <div className="col-4">
                                <input type="text" onChange={handleBlur} className="form-control my-1" name="LONG DISTANCE"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <input type="text" onChange={handleBlur} className="form-control my-1" name="LOCAL"/>
                            </div>
                            <div className="col-4">
                                <input type="text" onChange={handleBlur} className="form-control my-1" name="INTER- MEDIATE"/>
                            </div>
                            <div className="col-4">
                                <input type="text" onChange={handleBlur} className="form-control my-1" name="LONG DISTANCE"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <input type="text" onChange={handleBlur} className="form-control my-1" name="LOCAL"/>
                            </div>
                            <div className="col-4">
                                <input type="text" onChange={handleBlur} className="form-control my-1" name="INTER- MEDIATE"/>
                            </div>
                            <div className="col-4">
                                <input type="text" onChange={handleBlur} className="form-control my-1" name="LONG DISTANCE"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <input type="text" onChange={handleBlur} className="form-control my-1" name="LOCAL"/>
                            </div>
                            <div className="col-4">
                                <input type="text" onChange={handleBlur} className="form-control my-1" name="INTER- MEDIATE"/>
                            </div>
                            <div className="col-4">
                                <input type="text" onChange={handleBlur} className="form-control my-1" name="LONG DISTANCE"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(7) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(9) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default Vehicles;