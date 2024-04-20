import React, { useState } from 'react';
import instance from '../../axois/instance';
import { isExpired, decodeToken } from "react-jwt";

const AddAddressForm = () => {
    let token = localStorage.getItem("token");
    let myDecodedToken = decodeToken(token);
    const customer_id=myDecodedToken.id
    console.log(myDecodedToken)

  const [formData, setFormData] = useState({
    region: '',
    city: '',
    street: '',
    building: '',
  });
  const [addressId, setAddressId] = useState(null); // State variable to hold the address ID

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log(formData)
      const response = await instance.post('/addresses', formData);
      console.log('Address added successfully:', response.data);
      const address_id=response.data.address._id
      console.log(response.data)
      setAddressId(response.data.address._id); 
      await instance.patch('/custmers', { customer_id, address_id }); // Corrected this line
    console.log("Address added to customer's array");
      setFormData({ region: '', city: '', street: '', building: '' });
    } catch (error) {
      console.error('Error adding address:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="region">Region:</label>
          <input
            type="text"
            id="region"
            name="region"
            value={formData.region}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="street">Street:</label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="building">Building:</label>
          <input
            type="text"
            id="building"
            name="building"
            value={formData.building}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Address</button>
      </form>
    </div>
  );
};

export default AddAddressForm;
