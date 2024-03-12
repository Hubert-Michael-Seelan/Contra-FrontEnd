import React from "react";
import "./CheckOut.css";
import { countries } from "countries-list";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const navigate = useNavigate();
  const handleSubmit =()=> {
    // alert("Your Order Placed Successfully");
    navigate("/confirm")
  }
  const countryList = Object.values(countries);
  return (
    <div className="row wrapper">
      <form onSubmit={handleSubmit} className="shadow-lg">
        <h1>Shipping Info</h1>
        <div className="form-group">
          <label htmlFor="address_field">Name</label>
          <input
            type="text"
            id="address_field"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address_field">Address</label>
          <input
            type="text"
            id="address"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city_field">City</label>
          <input
            type="text"
            id="city_field"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone_field">Phone No</label>
          <input
            type="phone"
            id="phone_field"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="postal_code_field">Postal Code</label>
          <input
            type="number"
            id="postal_code_field"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state_field">State</label>
          <input
            type="text"
            id="state_field"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country_field">Country</label>
          <select
            id="country_field"
            className="form-control"
            required
          >
            {countryList.map((country, i) => (
              <option key={i} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <button id="shipping_btn" type="submit" className="btn">
          Confirm the Order
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
