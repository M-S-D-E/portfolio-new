import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { apiAddProfile } from '../../../services/profile';
import { toast } from 'react-toastify';
import Loader from '../../../components/Loader';

const AddProfile = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false)

    const onSubmit = async (data) => {
        console.log(data);
        setIsSubmitting(true)
        try {
            const res = await apiAddProfile({
                name: data.name,
                levelOfProficiency: data.proficiency,
            });

            console.log(res.data);
            toast.success(res.data.message);
        } catch (error) {
            console.log(error);
            toast.error("An error occured")
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-6 text-center">Add New Profile</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">profilePicture

                        </label>

                        <input
                            type="text"
                            {...register('name', { required: 'Profile Name is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">location

                        </label>

                        <input
                            type="text"
                            {...register('name', { required: 'Profile Name is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">maritalStatus

                        </label>

                        <input
                            type="text"
                            {...register('name', { required: 'Profile Name is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">sex

                        </label>

                        <input
                            type="text"
                            {...register('name', { required: 'Profile Name is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">bio

                        </label>

                        <input
                            type="text"
                            {...register('name', { required: 'Profile Name is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">about

                        </label>

                        <input
                            type="text"
                            {...register('name', { required: 'Profile Name is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">dateOfBirth

                        </label>

                        <input
                            type="text"
                            {...register('name', { required: 'Profile Name is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">contact

                        </label>

                        <input
                            type="text"
                            {...register('name', { required: 'Profile Name is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">resume

                        </label>

                        <input
                            type="text"
                            {...register('name', { required: 'Profile Name is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">languages

                        </label>

                        <input
                            type="text"
                            {...register('name', { required: 'Profile Name is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">githubLink

                        </label>

                        <input
                            type="text"
                            {...register('name', { required: 'Profile Name is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">linkedinLink

                        </label>

                        <input
                            type="text"
                            {...register('name', { required: 'Profile Name is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">twitterLink
                        </label>

                        <input
                            type="text"
                            {...register('name', { required: 'Profile Name is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    

                    {/* <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Profile</label>
                        <select
                            {...register('proficiency', { required: 'Proficiency level is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        >
                            <option value="">userProfileId</option>
                            <option value="Name">Name</option>
                            <option value="Description">Description</option>
                        </select>
                        {errors.proficiency && <p className="text-red-500 text-sm mt-1">{errors.proficiency.message}</p>}
                    </div> */}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded-lg">
                        {isSubmitting ? <Loader /> : "Add Profile"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProfile;
