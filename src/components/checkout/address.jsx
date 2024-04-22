

import React, { useState, useEffect } from 'react';
import instance from '../../axois/instance';
import { decodeToken } from "react-jwt";
import { IoIosArrowForward , IoMdCreate, IoMdTrash } from "react-icons/io";

const AddAddressForm = () => {
    const token = localStorage.getItem("token");
    const myDecodedToken = decodeToken(token);
    const customer_id = myDecodedToken.id;

    const [addresses, setAddresses] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [confirmEnabled, setConfirmEnabled] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false); // State to track if the form is in update mode


    const [formData, setFormData] = useState({
        region: '',
        city: '',
        street: '',
        building: '',
        phoneNumber: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await instance.get(`/customers/${customer_id}`);
                const arrayOfAddressIds = response.data.address_of_Id;
                const allAddresses = await Promise.all(arrayOfAddressIds.map(async (addressId) => {
                    const addressResponse = await instance.get(`/addresses/${addressId}`);
                    return addressResponse.data.address;
                }));
                setAddresses(allAddresses);
                if (allAddresses.length > 0) {
                    setSelectedAddress(allAddresses[0]);
                }
            } catch (error) {
                console.error('Error fetching addresses:', error);
            }
        };
        fetchData();
    }, [customer_id]);

    const handleSelectAddress = (address) => {
        setSelectedAddress(address);
        setConfirmEnabled(true);
    };

    const handleAddAddress = () => {
        setSelectedAddress(null);
        setShowForm(true);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            // if (isUpdating) {
            //     console.log(e)
            //     console.log("update")
            //     // Update existing address
            //     console.log(selectedAddress)
            //     const response = await instance.patch(`/addresses/${selectedAddress._id}`, formData);
            //     console.log("Updated address:", response.data.address);
            //     setSelectedAddress(response.data.address)
            //     setIsUpdating(false)
            //     // Add logic to update UI or show feedback
            // } else {
                // Add new address
                const response = await instance.post('/addresses', formData);
                const address_id = response.data.address._id;
                await instance.patch('/customers', { customer_id, address_id });
                console.log("New address added:", response.data.address);
                // Add logic to update UI or show feedback
            // }
            setShowForm(false);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleChangeAddress = () => {
        setSelectedAddress(null);
        setShowForm(false);
    };
    const handleConfirm = () => {
        // Handle the confirmation logic here
        console.log("Selected address:", selectedAddress);
    };
   const  handleUpdatetrue=async(address) => {
    setShowForm(true); // Show the form for updating
    setFormData({ // Set the form data with the selected address details
        region: address.region,
        city: address.city,
        street: address.street,
        building: address.building,
        phoneNumber: address.phoneNumber
    });
    setIsUpdating(true);


   }
  
    const handleUpdateAddress = async(address) => {
       
        // Set the selected address
        
        const response = await instance.patch(`/addresses/${address._id}`, formData);
        console.log("Updated address:", response.data.address);
        setSelectedAddress(response.data.address); 
        // Set update mode
    };
    const handleDeleteAddress = async (address) => {

        // Implement delete address functionality
        try {
            console.log("delete")
            console.log(customer_id)
            console.log(address)
            const address_id=address._id
            // console.log(addressId)
            await instance.delete('/customers', { data: { customer_id, address_id } });
            await instance.delete(`/addresses/${address._id}`);
            setAddresses(addresses.filter(a => a._id !== address._id));
        } catch (error) {
            console.error('Error deleting address:', error);
        }
    };

    return (
        <div className="mx-2 p-4 bg-white">
            <div className="flex justify-between ">
                <article className="flex items-center pb-2">
                    <img
                        className="w-6 h-6 mr-2"
                        src="https://icons.veryicon.com/png/o/miscellaneous/logo-design-of-lingzhuyun/icon-correct-24.png"
                        alt="correct icon"
                    />
                    <h2>1. CUSTOMER ADDRESS</h2>
                </article>
                <button className="flex items-center" onClick={handleChangeAddress}>
                    Change <IoIosArrowForward />
                </button>
            </div>
            <hr />

            <div className="mx-auto py-4">
                {selectedAddress ? (
                    <div>
                        <h3>{myDecodedToken.first_name}</h3>
                        <p className='text-gray-600'> {selectedAddress.phoneNumber}</p>
                        <p className='text-gray-600'> {`${selectedAddress.region}|${selectedAddress.city}|${selectedAddress.street} |${selectedAddress.building}`}</p>
                    </div>
                ) : showForm ? (
                    <form onSubmit={handleFormSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        
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
                        {/* <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            {isUpdating ? 'Update Address' : 'Add Address'}
                        </button> */}
                        <div>
    {isUpdating ? (
        <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleUpdateAddress}>
            Update Address
        </button>
    ) : (
        <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleAddAddress}>
            Add Address
        </button>
    )}
    {/* {!isUpdating && (
        <button onClick={handleAddAddress} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4">
            Add New Address
        </button>
    )} */}
</div>

                    </form>
                ) : (
                    <div>
                    <h3>Please select an address:</h3>
                    <div className="mx-auto py-4">
                        <div>
                            <h3 className='text-black'>{myDecodedToken.first_name}</h3>
                            {addresses.map(address => (
                                <div key={address._id} style={{ marginBottom: "10px" }}>
                                    <label className='flex justify-between my-2 py-2' style={{borderBottom:"2px solid #aaa"}}>
                                        <div>
                                        <input
                                            type="radio"
                                            name="address"
                                            value={address._id}
                                            onChange={() => handleSelectAddress(address)}
                                            className={`mx-3 appearance-none rounded-full border-2 border-gray-300 w-4 h-4 font-bold`}
                                        />
                                        
                                        <span 
                                         style={{ marginLeft: "5px" }}>{`${address.region}|${address.city}|${address.street} |${address.building}`}</span>
                                        
                                        </div>
                                        <div  className='text-orange-600 mx-5 flex justify-between '>
                                            {/* <button onClick={() => handleUpdatetrue(address)} className='mx-2'>
                                                <IoMdCreate />
                                            </button> */}
                                            <button onClick={() => handleDeleteAddress(address)}>
                                                <IoMdTrash />
                                            </button>
                                        </div>
                                    </label>
                                </div>
                            ))}
                        </div>
                        {/* {confirmEnabled && (
                            <button onClick={handleConfirm} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
                                Confirm
                            </button>
                        )} */}
                    </div>
                    <button onClick={handleAddAddress} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4">Add New Address</button>
                </div>
            )}
        </div>
    </div>
);
};


export default AddAddressForm;




