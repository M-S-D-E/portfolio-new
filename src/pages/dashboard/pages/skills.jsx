import React, { useEffect, useState } from 'react';
import { FilePenLine, Trash2 } from 'lucide-react';
import SkillsCard from '../../../components/skillsCard';
import PagesLayout from '../layouts/pagesLayout';
import { apiDeleteSkill, apiGetSkills } from '../../../services/skills';
import { useNavigate } from 'react-router-dom';
import PageLoader from '../../../components/PageLoader';
import { toast } from 'react-toastify';

const Skills = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(null);

  const fetchSkills = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetSkills();
      console.log(res.data);
      setSkills(res.data.skills);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await apiDeleteSkill(id);
      console.log(res.data);
      toast.success(res.data.message);
      setSkills(skills.filter((skill) => skill.id !== id));
    } catch (error) {
      console.log(error);
      toast.error("An error occurred");
    }
  };

  const handleEdit = (skill) => {
    setCurrentSkill(skill);
    setIsEditing(true);
  };

  const handleSave = () => {
    setSkills(skills.map((skill) => (skill.id === currentSkill.id ? currentSkill : skill)));
    setIsEditing(false);
    setCurrentSkill(null);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <PagesLayout
      headerText="Skills"
      buttonText="Add New Skill"
      onClick={() => navigate("/dashboard/skills/add-skill")}
    >
      {isLoading ? (
        <PageLoader />
      ) : (
        <div className="bg-gray-100 min-h-screen text-center p-12">
          <h2 className="text-3xl font-semibold mb-6">All Skills</h2>
          <p className="text-lg mb-8">Here, you can see all your skills.</p>

          {skills.length === 0 ?
            <p>No skill added yet</p> :

            <div>
              <div className='text-white gap-x-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-y-8'>
                {skills.map((skill) => (
                  <SkillsCard
                    key={skill.id}
                    language={skill.name}
                    proficiency={skill.levelOfProficiency}
                    deleted={<Trash2 onClick={() => handleDelete(skill.id)} />}
                    edit={<FilePenLine onClick={() => handleEdit(skill)} />}
                  />
                ))}
              </div>
            </div>
          }
          {isEditing && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-2xl font-semibold mb-4">Edit Skill</h2>
                <input
                  type="text"
                  className="border p-2 w-full mb-4"
                  value={currentSkill.language}
                  onChange={(e) => setCurrentSkill({ ...currentSkill, language: e.target.value })}
                />
                <input
                  type="text"
                  className="border p-2 w-full mb-4"
                  value={currentSkill.proficiency}
                  onChange={(e) => setCurrentSkill({ ...currentSkill, proficiency: e.target.value })}
                />
                <button className="bg-sky-700 text-white p-2 rounded mr-2" onClick={() => { }}>
                  Save
                </button>
                <button className="bg-gray-300 text-black p-2 rounded" onClick={() => setIsEditing(false)}>
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </PagesLayout>
  )
};

export default Skills;
