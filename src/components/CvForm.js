import React, { useState } from 'react';

const CvForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    experience: '',
    skills: '',
    projects: '',
    certificates: '',
    photo: ''
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData({
          ...formData,
          [name]: event.target.result
        });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Prénom:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Nom:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Téléphone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Adresse:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Éducation:</label>
        <textarea
          name="education"
          value={formData.education}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Expérience:</label>
        <textarea
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Compétences:</label>
        <input
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Certificats:</label>
        <input
          type="text"
          name="certificates"
          value={formData.certificates}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Projets:</label>
        <input
          type="text"
          name="projects"
          value={formData.projects}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Photo de profil:</label>
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Générer CV</button>
    </form>
  );
};

export default CvForm;
