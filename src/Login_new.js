import React from 'react';
import { useState } from "react"
import { useEffect } from "react"
import logo from "../src/assests/logo.png";
import eyeicon from "../src/assests/eyeicon.gif";
import co2 from "../src/assests/co2gif.gif";
import tree from "../src/assests/treegif.gif";
import water from "../src/assests/watergif1.gif";
import wind from "../src/assests/windgif1.gif";
import contact from "../src/assests/contact.gif";


function Loginnew() {
    const [TodayWindGeneration, setTodayWindGeneration] = useState(7.76);
    const [targetco2, setCo2Value] = useState(0);
    const [watervalue, setWaterValue] = useState(0);
    const [treeValue, setTreeValue] = useState(0);
    const [showLogin, setShowLogin] = useState(false);

    useEffect(() => {
        // Calculate CO2 Value based on TodayWindGeneration
        const calculatedTargetCo2 = Math.round(TodayWindGeneration * 100 * 0.9328);
        const calculatedTargettree = (calculatedTargetCo2 / 0.022 / 100000).toFixed(
            2
        );
        const calculatedTargetwater = TodayWindGeneration * 1000 * 0.004;

        setCo2Value(calculatedTargetCo2);
        setWaterValue(calculatedTargetwater);
        setTreeValue(calculatedTargettree);
    }, [TodayWindGeneration]);
    return (
        <>
            <section className='newloginbg p-4' >
                <div className='container newlogincontainer rounded p-4 mt-4'>
                    <div className="row d-flex justify-content-between p-3 align-items-center">
                        <div className="col-md-3">
                            <img src={logo} className="img-fluid" />
                        </div>
                        <div className="col-md-3 d-flex align-items-center justify-content-center">
                            <img src={eyeicon} className="img-fluid" />
                            <button
                                className='btn btnborder fs-5 fw-bold'
                                onClick={() => setShowLogin(!showLogin)}
                            >
                                LOGIN
                            </button>

                        </div>
                    </div>

                    <div className='row d-flex justify-content-evenly align-items-center'>
                        <div className='col-md-4 border border-2 border-light mt-3 p-2 rounded'>
                            <div className="row d-flex align-items-center justify-content-center mt-4">
                                <div className="col-3">
                                    <img src={co2} className="img-fluid bg-light rounded" />
                                </div>
                                <div className="col-8 text-center detailborder rounded p-1">
                                    <h4>{targetco2}</h4>
                                    <small style={{ fontSize: "15px" }}>Metric Tons</small>
                                </div>
                            </div>

                            <div className="row d-flex align-items-center justify-content-center mt-4">
                                <div className="col-3">
                                    <img src={water} className="img-fluid bg-light rounded" />
                                </div>
                                <div className="col-8 mx-1 text-center detailborder p-1 rounded">
                                    <h4>{watervalue}</h4>
                                    <small style={{ fontSize: "15px" }}>Litres</small>
                                </div>
                            </div>

                            <div className="row d-flex align-items-center justify-content-center mt-4">
                                <div className="col-3">
                                    <img src={tree} className="img-fluid bg-light rounded" />
                                </div>
                                <div className="col-8 mx-1 text-center detailborder p-1 rounded">
                                    <h4>{treeValue}</h4>
                                    <small style={{ fontSize: "15px" }}>Lakh Trees</small>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 mt-3 p-2">
                            {showLogin && (
                                <div class="card mb-0">
                                    <div class="card-body p-4 border rounded lightbg">
                                        <h6 class="border-bottom border-2 pb-2">Proceed to Login</h6>

                                        <form >
                                            <label for="formEmail" class="form-label text-muted mt-3">
                                                Email Address <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="Email..."
                                                className="form-control"
                                                required
                                            />

                                            <label
                                                for="formPassword"
                                                class="form-label text-muted fs-14 mt-4"
                                            >
                                                Password <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="password"
                                                placeholder="Password..."
                                                className="form-control "
                                                required
                                            />
                                            <div className="text-center mt-4">
                                                <button
                                                    type="submit"
                                                    className="btn btnbg text-white px-4 shadow-sm "
                                                >
                                                    Login <i className="fa fa-sign-in"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>


                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-4 d-flex align-items-center justify-content-center mt-4 ">
                            <img src={contact} className="img-fluid" />
                            <h4 className='contactborder p-3 rounded text-white '>0422 - 661 9579</h4>
                        </div>
                        <div className="col-md-2 d-flex align-items-center justify-content-evenly mt-4">
                            <i class="fa fa-whatsapp fa-2x bg-success text-white px-2 p-1 shadow-sm rounded"></i>
                            <i class="fa fa-linkedin-square fa-2x bg-primary px-2 text-white p-1 shadow-sm rounded"></i>
                            <i class="fa fa-youtube-play fa-2x rounded bg-danger text-white px-2 p-1 shadow-sm rounded"></i>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

export default Loginnew;
