import React from 'react';
import { useSelector } from 'react-redux';
import {CgColorPicker} from 'react-icons/cg'
const CarList = () => {
    const carData = useSelector(state => state.carBookReducer)
    console.log(carData);
    return (
        <div className='py-20 px-10'>
            <div className='grid grid-cols-1 gap-6'>
                {
                    carData ? carData?.map(car =>
                        <div key={car.id} className="card card-side bg-base-100 shadow-xl rounded-[4px] border-[1.7px]">
                            <figure><img src={car.img} alt="car" className='h-40 w-[21rem]' /></figure>
                            <div className="card-body flex flex-row justify-between items-center">
                                <div>
                                    <h2 className="card-title">{car.name}</h2>
                                    <div>
                                        <div>
                                            <CgColorPicker></CgColorPicker>
                                            <p></p>
                                        </div>
                                        <p></p>
                                    </div>
                                </div>
                                <p className='text-center'>₹{car.rentPerDay}</p>
                                <div className="card-actions ">
                                    <button className="btn btn-primary">Book Now</button>
                                    <button className="btn btn-primary">Details</button>
                                </div>
                            </div>
                        </div>
                    ) : <p>No car data</p>
                }
            </div>
        </div>
    );
};

export default CarList;