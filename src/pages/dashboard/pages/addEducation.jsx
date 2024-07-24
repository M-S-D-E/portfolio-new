import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { apiAddEducation } from '../../../services/education';
import { toast } from 'react-toastify';
import Loader from '../../../components/Loader';

const AddEducation = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (data) => {
        console.log(data);
        setIsSubmitting(true);
        try {
            const res = await apiAddEducation({
                schoolName: data.schoolName,
                location: data.location,
                program: data.program,
                qualification: data.qualification,
                grade: data.grade,
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
                <h2 className="text-2xl font-semibold mb-6 text-center">Add New Education</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">School Name</label>
                        <input
                            type="text"
                            {...register('schoolName', { required: 'School name is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.schoolName && <p className="text-red-500 text-sm mt-1">{errors.schoolName.message}</p>}
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
                        <label className="block text-gray-700 font-semibold mb-2">Program</label>
                        <input
                            type="text"
                            {...register('program', { required: 'Program is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.program && <p className="text-red-500 text-sm mt-1">{errors.program.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Qualification</label>
                        <input
                            type="text"
                            {...register('qualification', { required: 'Qualification is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.qualification && <p className="text-red-500 text-sm mt-1">{errors.qualification.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Grade</label>
                        <input
                            type="text"
                            {...register('grade', { required: 'Grade is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.grade && <p className="text-red-500 text-sm mt-1">{errors.grade.message}</p>}
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
                        {isSubmitting ? <Loader /> : "Add Education"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddEducation;
