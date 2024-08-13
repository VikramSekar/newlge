import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import axios from 'axios';

function Weekahead() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [headers, setHeaders] = useState([]);
  const [viewMode, setViewMode] = useState('hourly'); // State to manage view mode


  // URL of the API
  const apiUrl = 'http://windbuilt.in/api/api.tn_mediumrange_mins_forecast.php';

  useEffect(() => {
    // Fetch data from the API
    axios.get(apiUrl)
      .then(response => {
        const fetchedData = response.data;
        console.log('Fetched Data:', fetchedData); // Debug log

        // Filter and process data based on view mode
        const filteredData = viewMode === 'hourly'
          ? fetchedData.filter(entry => entry.date_time.endsWith(':00'))
          : fetchedData; // No filtering for 15-minute intervals

        // Process and extract only the day_1 values
        const processedData = filteredData.map(entry => {
          return {
            date_time: entry.date_time,
            day_1: entry.day_1.split(',')[1] || '',
            day_2: entry.day_2.split(',')[1] || '',
            day_3: entry.day_3.split(',')[1] || '',
            day_4: entry.day_4.split(',')[1] || '',
            day_5: entry.day_5.split(',')[1] || '',
            day_6: entry.day_6.split(',')[1] || '',
            day_7: entry.day_7.split(',')[1] || '',
            day_8: entry.day_8.split(',')[1] || '',
            // Handle cases where split may not produce a result
          };
        });

        // Set data and headers
        setData(processedData);

        // Set headers with only day_1
        if (processedData.length > 0) {
          setHeaders(['date_time', 'day_1', 'day_2', 'day_3', 'day_4', 'day_5', 'day_6', 'day_7', 'day_8',]);
        }

        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [viewMode]); // Dependency on viewMode to fetch data accordingly


  if (loading) {
    return <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 ">
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="mt-2 text-success">Loading...</div>
    </div>
  }

  // Define color ranges
  const colorRanges = {
    450: '#FF3632',      // Red
    900: '#ff608b',      // Pink
    1350: '#FF8800',     // Orange
    1800: '#EABF00',     // Dark Yellow
    2250: '#FFFB2B',     // Light Yellow
    2700: '#61FF56',     // Light Green
    3600: '#02CE08',     // Dark Green
    4500: '#3dd1ff',     // Light Blue
    Infinity: '#2a88e0'  // Dark Blue
  };

  // Function to get the color based on the value
  const getBackgroundColor = (value) => {
    for (const [range, color] of Object.entries(colorRanges)) {
      if (value <= parseFloat(range)) {
        return color;
      }
    }
    return colorRanges['Infinity'];
  };

  return (
    <>
      <Header />
      <section className="min-vh-100">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 mt-3">
              <div className="text-center mb-3">
                {/* Button to toggle between hourly and 15-minute views */}
                <button
                  className="btn btnbg px-3 text-white shadow-sm"
                  onClick={() => setViewMode(viewMode === 'hourly' ? '15min' : 'hourly')}
                >
                  {viewMode === 'hourly' ? 'Show 15 Minute Data' : 'Show Hourly Data'}
                </button>
              </div>
              <div className={`table-responsive ${viewMode === '15min' ? 'weekahead-table' : ''}`}>
                <table className="table table-bordered text-center">
                  <thead className="bg-teal text-white">
                    <tr>
                      {headers.map((header) => (
                        <th className="text-uppercase" key={header}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr key={index}>
                        {headers.map((header) => {
                          const value = parseFloat(item[header]);
                          const isNumeric = !isNaN(value);

                          return (
                            <td
                              key={header}
                              style={{
                                backgroundColor: header === 'date_time' ? '#f8f9fa' : (isNumeric ? getBackgroundColor(value) : 'transparent')
                              }}
                            >
                              {header === 'date_time' ? item[header] : (isNumeric ? value : item[header])}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-3 mt-md-5 text-center">
              <table className="table table-bordered text-center mt-4">
                <thead className="bg-teal text-white">
                  <tr>
                    <td colSpan="2">LEGEND</td>
                  </tr>
                  <tr>
                    <th>From</th>
                    <th>To</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-red">
                    <td>0 MW</td>
                    <td>450 MW</td>
                  </tr>
                  <tr className="bg-pink">
                    <td>451 MW</td>
                    <td>900 MW</td>
                  </tr>
                  <tr className="bg-orange">
                    <td>901 MW</td>
                    <td>1350 MW</td>
                  </tr>
                  <tr className="bg-dark-yellow">
                    <td>1351 MW</td>
                    <td>1800 MW</td>
                  </tr>
                  <tr className="bg-light-yellow">
                    <td>1801 MW</td>
                    <td>2250 MW</td>
                  </tr>
                  <tr className="bg-light-green">
                    <td>2251 MW</td>
                    <td>2700 MW</td>
                  </tr>
                  <tr className="bg-dark-green">
                    <td>2701 MW</td>
                    <td>3600 MW</td>
                  </tr>
                  <tr className="bg-light-blue">
                    <td>3601 MW</td>
                    <td>4500 MW</td>
                  </tr>
                  <tr className="bg-dark-blue text-white">
                    <td colSpan="2">4501 MW & Above</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Weekahead;
