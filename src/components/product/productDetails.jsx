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
            <div className='container mx-auto mt-3'>
                {/* ============================================= First ============================================= */}
                <div className='md:flex gap-4 h-full'>

                    {/* ========================= Product Details Name, Img, Price ========================= */}
                    <div className='bg-white md:w-3/4'>

                        <div className='flex'>

                            <div className='w-2/5 h-1/4 p-5'>
                                <img className='w-full' src={product.images} alt={product.name} />
                                <div className='flex w-12 h-12 mb-5'>
                                    <img className='' src={product.images[0]} alt={product.name} />
                                    <img className='' src={product.images[1]} alt={product.name} />
                                    <img className='' src={product.images[2]} alt={product.name} />
                                </div>

                                <hr />
                                <h2 className=''>SHARE THIS PRODUCT</h2>
                                <div className='flex'>
                                    <h1>icon</h1>
                                    <h1>icon</h1>
                                </div>
                            </div>

                            <div className='w-3/5 p-5'>
                                <h1>{product.name}</h1>
                                <p>Brand</p>
                                <hr />
                                <h1>EGY {product.price}</h1>
                                <p>Quantity: {product.quantity_in_stock}</p>
                                <p>{product.description}</p>
                                <button onClick={handleAddToCart}
                                    className="button bg-orange-600 w-full hover:bg-orange-700 text-white mt-5 font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                                >ADD TO CART</button>

                            </div>

                        </div>

                    </div>

                    {/* ================================ DELIVERY & RETURNS ================================ */}
                    <div className='bg-white md:w-1/4 md:mt-0 sm:mt-3'>
                        <p>aaaaff</p>
                    </div>

                </div>


                {/* ============================================= Second ============================================= */}
                <div className='md:flex gap-4 mt-3 h-full'>

                    {/* ================================ Product Details  ================================ */}
                    <div className='bg-white md:w-3/4'>

                        <h1 className='m-5'>Product Details</h1>

                        <hr />

                        <ul className='m-5'>
                            <li>{product.description}</li>
                        </ul>


                    </div>

                    {/* ================================ DELIVERY & RETURNS ================================ */}
                    <div className='bg-white md:w-1/4 md:mt-0 sm:mt-3'>
                        <p>aasdsaf</p>
                    </div>

                </div>



                {/* ============================================= Third ============================================= */}
                <div className='md:flex gap-4 mt-3 h-full'>

                    {/* ================================ Specifications ================================ */}
                    <div className='bg-white md:w-3/4'>

                        <h1 className='m-5'>Specifications</h1>

                        <hr />

                        <div className='flex m-5 gap-4'>
                            <div className='border w-2/4'>
                                <h1 className='m-3'>KEY FEATURES</h1>
                                <hr />
                                <p className='m-3'>{product.description}</p>
                            </div>
                            <div className='border w-2/4'>
                                <h1 className='m-3'>WHAT’S IN THE BOX</h1>
                                <hr />
                                <p className='m-3'>{product.description}</p>
                            </div>
                        </div>


                    </div>

                    {/* ================================ DELIVERY & RETURNS ================================ */}
                    <div className='bg-white md:w-1/4 md:mt-0 sm:mt-3'>
                        <p>third</p>
                    </div>

                </div>



                <div className='md:flex gap-4 mt-3 h-full'>
                    <div className='bg-white md:w-3/4'>
                        <h1 className='m-5'>Verified Customer Feedback</h1>

                        <hr />

                        <p className='m-5'>Rating: {product.rating}</p>
                        {/* <p className='m-5'>Review: {product.review}</p> */}
                    </div>
                    <div className='bg-white md:w-1/4 md:mt-0 sm:mt-3'>
                        <p>fourth 2</p>
                    </div>
                </div>
            </div>


        </>
    );
}
