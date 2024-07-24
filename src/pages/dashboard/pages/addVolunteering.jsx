import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { apiAddVolunteering } from '../../../services/volunteering';
import { toast } from 'react-toastify';
import Loader from '../../../components/Loader';

const AddVolunteering = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (data) => {
        console.log(data);
        setIsSubmitting(true);
        try {
            const res = await apiAddVolunteering({
                name: data.name,
                levelOfProficiency: data.proficiency.toLowerCase(),
                organization: data.organization,
                description: data.description,
                skills: data.skills.split(',').map(skill => skill.trim()),
                startDate: data.startDate,
                endDate: data.endDate,
                role: data.role,
                responsibility: data.responsibility,
                location: data.location,
                projectName: data.projectName,
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
                <h2 className="text-2xl font-semibold mb-6 text-center">Add New Volunteering</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Skill Name</label>
                        <input
                            type="text"
                            {...register('name', { required: 'Skill Name is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Proficiency</label>
                        <select
                            {...register('proficiency', { required: 'Proficiency level is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        >
                            <option value="">Select Proficiency</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                        {errors.proficiency && <p className="text-red-500 text-sm mt-1">{errors.proficiency.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Organization</label>
                        <input
                            type="text"
                            {...register('organization', { required: 'Organization is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.organization && <p className="text-red-500 text-sm mt-1">{errors.organization.message}</p>}
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
                        <label className="block text-gray-700 font-semibold mb-2">Skills</label>
                        <input
                            type="text"
                            {...register('skills', { required: 'Skills are required' })}
                            placeholder="Comma separated skills"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.skills && <p className="text-red-500 text-sm mt-1">{errors.skills.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Start Date</label>
                        <input
                            type="date"
                            {...register('startDate', { required: 'Start Date is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">End Date</label>
                        <input
                            type="date"
                            {...register('endDate', { required: 'End Date is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.endDate && <p className="text-red-500 text-sm mt-1">{errors.endDate.message}</p>}
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
                        <input
                            type="text"
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
                        <label className="block text-gray-700 font-semibold mb-2">Project Name</label>
                        <input
                            type="text"
                            {...register('projectName', { required: 'Project Name is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.projectName && <p className="text-red-500 text-sm mt-1">{errors.projectName.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded-lg flex items-center justify-center"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? <Loader /> : "Add Volunteering"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddVolunteering;
