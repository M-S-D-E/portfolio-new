import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { apiAddExperience } from '../../../services/experiences';
import { toast } from 'react-toastify';
import Loader from '../../../components/Loader';

const AddExperience = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (data) => {
        console.log(data);
        setIsSubmitting(true);
        try {
            const res = await apiAddExperience({
                companyName: data.companyName,
                role: data.role,
                responsibility: data.responsibility,
                location: data.location,
                startDate: data.startDate,
                endDate: data.endDate,
            });

            console.log(res.data);
            toast.success(res.data.message);
        } catch (error) {
            console.log(error);
            toast.error("An error occurred");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-6 text-center">Add New Experience</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Company Name</label>
                        <input
                            type="text"
                            {...register('companyName', { required: 'Company name is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Role</label>
                        <input
                            type="text"
                            {...register('role', { required: 'Role is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Responsibility</label>
                        <textarea
                            {...register('responsibility', { required: 'Responsibility is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.responsibility && <p className="text-red-500 text-sm mt-1">{errors.responsibility.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Location</label>
                        <input
                            type="text"
                            {...register('location', { required: 'Location is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Start Date</label>
                        <input
                            type="date"
                            {...register('startDate', { required: 'Start date is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">End Date</label>
                        <input
                            type="date"
                            {...register('endDate', { required: 'End date is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.endDate && <p className="text-red-500 text-sm mt-1">{errors.endDate.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded-lg flex items-center justify-center"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? <Loader /> : "Add Experience"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddExperience;
