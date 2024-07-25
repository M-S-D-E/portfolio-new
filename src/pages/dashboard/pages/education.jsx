import React, { useEffect, useState } from 'react';
import EducationCard from '../../../components/educationCard';
import PagesLayout from '../layouts/pagesLayout';
import { useNavigate } from 'react-router-dom';
import K from '../../../constants';
import { apiDeleteEducation, apiGetEducation } from '../../../services/education';


const Education = () => {

  const navigate = useNavigate();
  const [education, setEducation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState([false]);


  const fetchEducations = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetEducation();
      console.log(res.data);
      setEducation(res.data.education)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (_id) => {
    try {
      const res = await apiDeleteEducation(_id)
      console.log(res.data)
      toast.success(res.data.message)

    } catch (error) {
      console.log(error)
      toast.error("An error occured")
    }
  }

  useEffect(() => {
    fetchEducations()
  }, [])

  return (
    <PagesLayout headerText="Education" buttonText="Add New Education" onClick={() => navigate("/dashboard/education/add-education")}>
      <div className="p-6 bg-gray-100 min-h-screen text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Education</h2>
          <p className="text-lg text-gray-600 mb-12">Hey, here are your achievements!</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {education.map((education, index) => (
              <EducationCard
                key={index}
                title={education.schoolName}
                description={education.location}
                deleted={education.deleted}
                edit={education.edit}
              />
            ))}
          </div>
        </div>
      </div>
    </PagesLayout>
  );
};

export default Education;
