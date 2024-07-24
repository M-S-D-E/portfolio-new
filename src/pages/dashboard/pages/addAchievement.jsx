import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { apiAddAchievement } from '../../../services/achievements';
import { toast } from 'react-toastify';
import Loader from '../../../components/Loader';

const AddAchievement = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (data) => {
        console.log(data);
        setIsSubmitting(true);
        try {
            const res = await apiAddAchievement({
                name: data.name,
                awards: data.awards,
                description: data.description,
                image: data.image,
                date: data.date,
                nameOfInstitution: data.nameOfInstitution,
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
                <h2 className="text-2xl font-semibold mb-6 text-center">Add New Achievement</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            {...register('name', { required: 'Name is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Awards</label>
                        <input
                            type="text"
                            {...register('awards', { required: 'Awards are required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.awards && <p className="text-red-500 text-sm mt-1">{errors.awards.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Description</label>
                        <textarea
                            {...register('description', { required: 'Description is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Image</label>
                        <input
                            type="text"
                            {...register('image', { required: 'Image is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Date</label>
                        <input
                            type="date"
                            {...register('date', { required: 'Date is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Name of Institution</label>
                        <input
                            type="text"
                            {...register('nameOfInstitution', { required: 'Name of Institution is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.nameOfInstitution && <p className="text-red-500 text-sm mt-1">{errors.nameOfInstitution.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded-lg flex items-center justify-center"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? <Loader /> : "Add Achievement"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddAchievement;
