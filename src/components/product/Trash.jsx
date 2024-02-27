import React from 'react'

export default function trash() {
    return (
        <>
            {/* ============================================= First ============================================= */}
            <div className='flex container mx-auto gap-4 mt-3 h-96'>

                {/* ========================= Product Details Name, Img, Price ========================= */}
                <div className='bg-white w-3/4'>

                    <div className='flex'>

                        <div className='w-2/5 h-1/4 p-5'>
                            <img className='w-full h-full' src="" alt="" />
                            <div className='flex'>
                                list of pic
                            </div>
                            <hr />
                            <h2>SHARE THIS PRODUCT</h2>
                            <div className='flex'>
                                <h1>icon</h1>
                                <h1>icon</h1>
                            </div>
                        </div>

                        <div className='w-3/5 p-5'>
                            <h1>Title</h1>
                            <p>Brand</p>
                            <hr />
                            <h1>Price</h1>
                            <p>Stock</p>
                            <p>Description</p>
                            <button onClick=""
                                className="button bg-orange-600 w-4/4 hover:bg-orange-700 text-white m-4 font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                            >Add to Cart</button> {/* Button to add product to cart */}

                        </div>

                    </div>

                </div>

                {/* ================================ DELIVERY & RETURNS ================================ */}
                <div className='bg-white w-1/4'>

                </div>

            </div>


            {/* ============================================= Second ============================================= */}
            <div className='flex container mx-auto gap-4 mt-3 h-96'>

                {/* ================================ Product Details  ================================ */}
                <div className='bg-white w-3/4'>

                    <h1>Product Details</h1>

                    <hr />

                    <ul>
                        <li>Decription 1</li>
                    </ul>


                </div>

                {/* ================================ DELIVERY & RETURNS ================================ */}
                <div className='bg-white w-1/4'>

                </div>

            </div>



            {/* ============================================= Third ============================================= */}
            <div className='flex container mx-auto gap-4 mt-3 h-96'>

                {/* ================================ Specifications ================================ */}
                <div className='bg-white w-3/4'>

                    <h1>Specifications</h1>

                    <hr />

                    <div className='flex m-5'>
                        <div className='border'>
                            <h1>KEY FEATURES</h1>
                            
                            <p>Description</p>
                        </div>
                        <div className='border'>
                            <h1>KEY FEATURES</h1>
                            
                            <p>Description</p>
                        </div>
                    </div>


                </div>

                {/* ================================ DELIVERY & RETURNS ================================ */}
                <div className='bg-white w-1/4'>

                </div>

            </div>





        </>
    )
}
