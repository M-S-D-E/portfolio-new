import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { apiAddProject } from '../../../services/projects';
import { toast } from 'react-toastify';
import Loader from '../../../components/Loader';

const AddProject = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (data) => {
        console.log(data);
        setIsSubmitting(true);
        try {
            const res = await apiAddProject({
                image: data.image[0], 
                projectName: data.projectName,
                description: data.description,
                contributors: data.contributors,
                skill: data.skill,
                link: data.link,
                nameOfInstitution: data.nameOfInstitution,
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
                <h2 className="text-2xl font-semibold mb-6 text-center">Add New Project</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Project Image</label>
                        <input
                            type="file"
                            {...register('image', { required: 'Project image is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Project Name</label>
                        <input
                            type="text"
                            {...register('projectName', { required: 'Project name is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.projectName && <p className="text-red-500 text-sm mt-1">{errors.projectName.message}</p>}
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
                        <label className="block text-gray-700 font-semibold mb-2">Contributors</label>
                        <input
                            type="text"
                            {...register('contributors', { required: 'Contributors are required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.contributors && <p className="text-red-500 text-sm mt-1">{errors.contributors.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Skill</label>
                        <input
                            type="text"
                            {...register('skill', { required: 'Skill is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.skill && <p className="text-red-500 text-sm mt-1">{errors.skill.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Project Link</label>
                        <input
                            type="url"
                            {...register('link', { required: 'Project link is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.link && <p className="text-red-500 text-sm mt-1">{errors.link.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Name of Institution</label>
                        <input
                            type="text"
                            {...register('nameOfInstitution', { required: 'Name of institution is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.nameOfInstitution && <p className="text-red-500 text-sm mt-1">{errors.nameOfInstitution.message}</p>}
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
                        className="w-full bg-blue-600 text-white p-2 rounded-lg">
                        {isSubmitting ? <Loader /> : "Add Project"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProject;
