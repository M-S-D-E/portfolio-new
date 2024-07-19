import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { apiAddProject } from '../../../services/projects';
import { toast } from 'react-toastify';
import Loader from '../../../components/Loader';

const AddSkill = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false)

    const onSubmit = async (data) => {
        console.log(data);
        setIsSubmitting(true)
        try {
            const res = await apiAddProject({
                name: data.name,
                levelOfProficiency: data.proficiency.toLowerCase(),
            });

            console.log(res.data);
            toast.success(res.data.message);
        } catch (error) {
            console.log(error);
            toast.error("An error occured")
        }finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-6 text-center">Add New Skill</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Skill
                            Name

                        </label>

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

                    <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white p-2 rounded-lg">
                    {isSubmitting ? <Loader /> : "Add Skill"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProject;
