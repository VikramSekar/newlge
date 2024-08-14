import React, { useState, useEffect } from 'react';

function Entry() {
    const [data, setData] = useState([]);
    const [substations, setSubstations] = useState([]);
    const [feeders, setFeeders] = useState([]);
    const [selectedSubstation, setSelectedSubstation] = useState('');
    const [selectedFeeder, setSelectedFeeder] = useState('');
    const [stoppageDate, setStoppageDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [reason, setReason] = useState('');
    const [remarks, setRemarks] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const stoppageData = {
            stoppageDate,
            startTime,
            endTime,
            reason,
            remarks
        };

        try {
            const response = await fetch('http://localhost:5000/api/stoppage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(stoppageData),
            });

            const result = await response.json();
            if (response.ok) {
                alert('Stoppage record saved successfully!');
            } else {
                alert(`Error: ${result.message}`);
            }
        } catch (error) {
            alert('An error occurred while saving the record.');
            console.error('Error:', error);
        }
    };


    useEffect(() => {
        // Fetch data from the API
        fetch('http://172.16.7.118:8003/api/tamilnadu/wind/api.tn_master.php')
            .then(response => response.json())
            .then(data => {
                setData(data); // Set the raw data
                processSubstations(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const processSubstations = (data) => {
        const substationMap = new Map();
        data.forEach(item => {
            if (!substationMap.has(item.substation)) {
                substationMap.set(item.substation, []);
            }
            substationMap.get(item.substation).push(item.feeder);
        });
        setSubstations([...substationMap.keys()]); // Set unique substations
        // Optional: Initialize the first substation's feeders
        if (substationMap.size > 0) {
            setSelectedSubstation([...substationMap.keys()][0]);
            setFeeders(substationMap.get([...substationMap.keys()][0]));
        }
    };

    useEffect(() => {
        // Update feeders based on the selected substation
        if (selectedSubstation) {
            const substationData = data.filter(item => item.substation === selectedSubstation);
            setFeeders([...new Set(substationData.map(item => item.feeder))]); // Unique feeders
        }
    }, [selectedSubstation, data]);

    const handleSubstationChange = (event) => {
        setSelectedSubstation(event.target.value);
        setSelectedFeeder(''); // Reset selected feeder when substation changes
    };

    const handleFeederChange = (event) => {
        setSelectedFeeder(event.target.value);
    };

    return (
        <section className='min-vh-100'>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-3 mt-4'>
                        <h4 className='fs-5'>Substation List</h4>
                        <select value={selectedSubstation} onChange={handleSubstationChange} className='form-select'>
                            <option value=''>Select Substation</option>
                            {substations.map((substation, index) => (
                                <option key={index} value={substation}>
                                    {substation}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='col-md-3 mt-4'>
                        <h4 className='fs-5'>Feeder List</h4>
                        <select value={selectedFeeder} onChange={handleFeederChange} className='form-select' disabled={!selectedSubstation}>
                            <option value=''>Select Feeder</option>
                            {feeders.map((feeder, index) => (
                                <option key={index} value={feeder}>
                                    {feeder}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='col-md-3 mt-4'>
                        <h4 className='fs-5'>Type</h4>
                        <div class="dropdown">
                            <button class="btn btn-outline-success dropdown-toggle w-100" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Type
                            </button>
                            <ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#scheduledModal">Scheduled</a></li>
                                <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#unscheduledModal">Un-Scheduled</a></li>
                                {/* <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#intradayModal">Intraday</a></li> */}
                            </ul>
                        </div>

                        <div class="modal fade" id="scheduledModal" tabindex="-1" aria-labelledby="scheduledModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header border-0">
                                        <button type="button" class="btn-close border border-2 border-success" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="modal-body lightbg">
                                            {/* Title at the Top */}
                                            <div className="text-center mb-4">
                                                <h4 className="modal-title border rounded shadow-sm p-1 fs-5">Schedule Machine Stoppage</h4>
                                            </div>

                                            <div className="row d-flex justify-content-center">
                                                {/* Date Picker */}
                                                <div className="col-12 mb-3">
                                                    <label htmlFor="date-picker" className="form-label">Pick the Date</label>
                                                    <input
                                                        type="date"
                                                        id="date-picker"
                                                        className="form-control border border-primary rounded"
                                                        value={stoppageDate}
                                                        onChange={(e) => setStoppageDate(e.target.value)}
                                                        required
                                                    />
                                                </div>

                                                {/* Start Time Picker */}
                                                <div className="col-6 mb-3">
                                                    <label htmlFor="start-time-picker" className="form-label">Pick the Start Time</label>
                                                    <div className="input-group">
                                                        <input
                                                            type="time"
                                                            id="start-time-picker"
                                                            className="form-control border border-success rounded"
                                                            value={startTime}
                                                            onChange={(e) => setStartTime(e.target.value)}
                                                            required
                                                        />
                                                        <button className="btn btn-success" type="button">Select</button>
                                                    </div>
                                                </div>

                                                {/* End Time Picker */}
                                                <div className="col-6 mb-3">
                                                    <label htmlFor="end-time-picker" className="form-label">Pick the End Time</label>
                                                    <div className="input-group">
                                                        <input
                                                            type="time"
                                                            id="end-time-picker"
                                                            className="form-control border border-success rounded"
                                                            value={endTime}
                                                            onChange={(e) => setEndTime(e.target.value)}
                                                            required
                                                        />
                                                        <button className="btn btn-success" type="button">Select</button>
                                                    </div>
                                                </div>

                                                {/* Reason Select */}
                                                <div className="col-12 mb-3">
                                                    <label htmlFor="reason-select" className="form-label">Reason for Machine Stoppage</label>
                                                    <select
                                                        id="reason-select"
                                                        className="form-select border border-success rounded"
                                                        value={reason}
                                                        onChange={(e) => setReason(e.target.value)}
                                                        required
                                                    >
                                                        <option value="" disabled>Select a reason</option>
                                                        <option value="maintenance">Scheduled Maintenance</option>
                                                        <option value="power_failure">Power Failure</option>
                                                        <option value="technical_issue">Technical Issue</option>
                                                        <option value="operator_error">Operator Error</option>
                                                        <option value="material_shortage">Material Shortage</option>
                                                    </select>
                                                </div>

                                                {/* Remarks Text Area */}
                                                <div className="col-12 mb-3">
                                                    <label htmlFor="remarks-textarea" className="form-label">Remarks</label>
                                                    <textarea
                                                        id="remarks-textarea"
                                                        className="form-control border border-success rounded"
                                                        rows="3"
                                                        value={remarks}
                                                        onChange={(e) => setRemarks(e.target.value)}
                                                        placeholder="Enter any additional remarks here..."
                                                    />
                                                </div>
                                            </div>

                                            {/* Submit Button */}
                                            <div className="text-end mb-3">
                                                <button type="submit" className="btn btn-outline-success">Submit</button>
                                            </div>
                                        </div>
                                    </form>





                                </div>
                            </div>
                        </div>

                        <div class="modal fade" id="unscheduledModal" tabindex="-1" aria-labelledby="unscheduledModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header border-0">
                                        <button type="button" class="btn-close border border-2 border-success shadow-sm" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body lightbg">
                                        {/* <!-- Title at the Top --> */}
                                        <div class="text-center mb-4">
                                            <h4 class="modal-title border rounded shadow-sm p-1 fs-5">Un - Schedule Machine Stoppage</h4>
                                        </div>

                                        <div className="row d-flex justify-content-center">
                                            {/* <!-- Date Picker --> */}
                                            <div className="col-12 mb-3">
                                                <label htmlFor="date-picker" className="form-label">Pick the Date</label>
                                                <input type="date" id="date-picker" className="form-control border border-success rounded" required />
                                            </div>

                                            {/* <!-- Start Time Picker --> */}
                                            <div className="col-12 mb-3">
                                                <label htmlFor="start-time-picker" className="form-label">Start Time</label>
                                                <div class="input-group">
                                                    <input type="time" id="start-time-picker" className="form-control border border-success rounded" required />
                                                    <button class="btn btn-success" type="button">Select</button>
                                                </div>
                                            </div>

                                            {/* <!-- Reason Select --> */}
                                            <div className="col-12 mb-3">
                                                <label htmlFor="reason-select" className="form-label">Reason for Machine Stoppage</label>
                                                <select id="reason-select" className="form-select border border-success rounded" required>
                                                    <option value="" disabled selected>Select a reason</option>
                                                    <option value="maintenance">Scheduled Maintenance</option>
                                                    <option value="power_failure">Power Failure</option>
                                                    <option value="technical_issue">Technical Issue</option>
                                                    <option value="operator_error">Operator Error</option>
                                                    <option value="material_shortage">Material Shortage</option>
                                                </select>
                                            </div>

                                            {/* <!-- Remarks Text Area --> */}
                                            <div className="col-12 mb-3">
                                                <label htmlFor="remarks-textarea" className="form-label">Remarks</label>
                                                <textarea id="remarks-textarea" className="form-control border border-success rounded" rows="3" placeholder="Enter any additional remarks here..."></textarea>
                                            </div>
                                            <div className='col-11 mb-3 text-end'>
                                                <button className='btn btn-outline-success'> Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Entry;
