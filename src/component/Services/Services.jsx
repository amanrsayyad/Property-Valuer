import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className='services_div'>
    <h2 className='h2_services'>Our Services</h2>
    <div className='services'>
      <div className='services_container'>
        <div className='services_card'>
          <div className='services_border'>
            <h2>Valuation Services</h2>
            <p>
              Our valuation services include Property Valuation, Corporate
              Valuation, Specialized Asset Valuation, Litigation and Arbitration
              Support and Valuation under Tax Laws
            </p>
            <Link to="/">Know More</Link>
          </div>
        </div>
        <div className='services_card'>
          <div className='services_border'>
            <h2>Lenders Engineering Services</h2>
            <p>
            We are empaneled with leading banks and financial institutions and are the preferred consultants to act on your LIE projects.
            </p>
            <Link to="/">Know More</Link>
          </div>
        </div>
        <div className='services_card'>
          <div className='services_border'>
            <h2>TEV / Feasibility Study</h2>
            <p>
            The team at Thite Valuers & Engineers are seasoned at handling TEV studies. As TEV consultants, we have serviced a plethora of clients, in an array of industries.
            </p>
            <Link to="/">Know More</Link>
          </div>
        </div>
        <div className='services_card'>
          <div className='services_border'>
            <h2>Detailed Project Report</h2>
            <p>
            DPR is a primary report for the formulation of an investment proposal. Key decisions are made based on the details given in the report.
            </p>
            <Link to="/">Know More</Link>
          </div>
        </div>
        <div className='services_card'>
          <div className='services_border'>
            <h2>Advisory Services</h2>
            <Link to="/">Know More</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;
