import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import instance from "../../axois/instance";
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/slices/cart';

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        async function getData() {
            try {
                const res = await instance.get(`/product/${id}`);
                setProduct(res.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        getData();
    }, [id]);

    const handleAddToCart = () => {
        dispatch(addItemToCart(product));
        alert(`${product.name}product added successfully`)
        navigate(`/cart`)

    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div className='flex container mx-auto gap-4 mt-3 h-96'>
                <div className='bg-white w-3/4'>

                </div>
                <div className='bg-white w-1/4'>

                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-evenly", margin: "20px" }}>
                <div>
                    <img style={{ width: "400px", height: "400px" }} src={product.images} alt={product.name} />
                </div>
                <div style={{ width: "300px", height: "400px" }} className='bg-white  p-3'>
                    <h2>{product.name}</h2>
                    <p className="text-sm text-gray-900 ">{product.description}</p>
                    <p className="text-sm text-gray-900 "> Quantity: {product.quantity_in_stock}</p>

                    <p> EGY {product.price}</p>
                    <p>{product.quantity}</p>
                    <button onClick={handleAddToCart}
                        className="button bg-orange-600 w-4/4 hover:bg-orange-700 text-white m-4 font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                    >Add to Cart</button> {/* Button to add product to cart */}
                </div>
            </div>
        </>
    );
}
