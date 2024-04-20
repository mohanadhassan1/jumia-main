// import React, { useState } from 'react';
// import instance from '../../axois/instance';
// import { isExpired, decodeToken } from "react-jwt";

// const AddAddressForm = () => {
//     let token = localStorage.getItem("token");
//     let myDecodedToken = decodeToken(token);
//     const customer_id=myDecodedToken.id
//     console.log(myDecodedToken)

//   const [formData, setFormData] = useState({
//     region: '',
//     city: '',
//     street: '',
//     building: '',
//     phoneNumber: '' ,

//   });
//   const [addressId, setAddressId] = useState(null); // State variable to hold the address ID

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//         console.log(formData)
//       const response = await instance.post('/addresses', formData);
//       console.log('Address added successfully:', response.data);
//       const address_id=response.data.address._id
//       console.log(response.data)
//       setAddressId(response.data.address._id); 
//       await instance.patch('/customers', { customer_id, address_id }); // Corrected this line
//     console.log("Address added to customer's array");
//       setFormData({ region: '', city: '', street: '', building: '' });
//     } catch (error) {
//       console.error('Error adding address:', error);
//     }
//   };

//   return (
  
//     <div className="mx-auto py-4">
//     <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//     <div className="mb-4">
//         <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Phone Number:</label>
//         <input
//           type="text"
//           id="phoneNumber"
//           name="phoneNumber"
//           value={formData.phoneNumber}
//           onChange={handleChange}
//           required
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="region" className="block text-gray-700 text-sm font-bold mb-2">Region:</label>
//         <input
//           type="text"
//           id="region"
//           name="region"
//           value={formData.region}
//           onChange={handleChange}
//           required
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">City:</label>
//         <input
//           type="text"
//           id="city"
//           name="city"
//           value={formData.city}
//           onChange={handleChange}
//           required
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
//         />
//       </div>
//       <div className="flex flex-wrap -mx-3 mb-4">
//         <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//           <label htmlFor="street" className="block text-gray-700 text-sm font-bold mb-2">Street:</label>
//           <input
//             type="text"
//             id="street"
//             name="street"
//             value={formData.street}
//             onChange={handleChange}
//             required
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
//           />
//         </div>
//         <div className="w-full md:w-1/2 px-3">
//           <label htmlFor="building" className="block text-gray-700 text-sm font-bold mb-2">Building:</label>
//           <input
//             type="text"
//             id="building"
//             name="building"
//             value={formData.building}
//             onChange={handleChange}
//             required
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
//           />
//         </div>
//       </div>
      
//       <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Address</button>
//     </form>
//   </div>
  
//   );
// };

// export default AddAddressForm;
import React, { useState } from 'react';
import instance from '../../axois/instance';
import { isExpired, decodeToken } from "react-jwt";

const AddAddressForm = () => {
    let token = localStorage.getItem("token");
    let myDecodedToken = decodeToken(token);
    const customer_id=myDecodedToken.id;
    console.log(myDecodedToken);

    const [formData, setFormData] = useState({
        region: '',
        city: '',
        street: '',
        building: '',
        phoneNumber: ''
    });
    const [addressId, setAddressId] = useState(null); // State variable to hold the address ID
    const [addressString, setAddressString] = useState(''); // State variable to hold the address data as a string

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);
            const response = await instance.post('/addresses', formData);
            console.log('Address added successfully:', response.data);
            const address_id=response.data.address._id;
            setAddressId(address_id); 
            await instance.patch('/customers', { customer_id, address_id }); // Corrected this line
            console.log("Address added to customer's array");

            // Construct the address string
            const addressString = `${formData.region}|${formData.city}|${formData.street} |${formData.building} `;
            setAddressString(addressString);
        } catch (error) {
            console.error('Error adding address:', error);
        }
    };

    return (
        <div className="mx-auto py-4">
            {addressString ? (
                <div>
                  <h3>{myDecodedToken.first_name}</h3>
                    <p className='text-gray-600'> {formData.phoneNumber}</p>
                    <p className='text-gray-600'> {addressString}</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Phone Number:</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="region" className="block text-gray-700 text-sm font-bold mb-2">Region:</label>
                        <input
                            type="text"
                            id="region"
                            name="region"
                            value={formData.region}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">City:</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        />
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="street" className="block text-gray-700 text-sm font-bold mb-2">Street:</label>
                            <input
                                type="text"
                                id="street"
                                name="street"
                                value={formData.street}
                                onChange={handleChange}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label htmlFor="building" className="block text-gray-700 text-sm font-bold mb-2">Building:</label>
                            <input
                                type="text"
                                id="building"
                                name="building"
                                value={formData.building}
                                onChange={handleChange}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                            />
                        </div>
                    </div>
                    <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Address</button>
                </form>
            )}
        </div>
    );
};

export default AddAddressForm;

