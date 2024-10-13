import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const CvDisplay = ({ data }) => {
  const cvRef = useRef();

  const handleDownload = async () => {
    const canvas = await html2canvas(cvRef.current);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    const imgWidth = 190;
    const pageHeight = pdf.internal.pageSize.height;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    let position = 0;

    pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save('cv.pdf');
  };

  return (
    <div>
      <div className="cv-display" ref={cvRef} style={{ padding: '20px', border: '1px solid #ccc' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <img
            src={data.photo}
            alt="Photo de profil"
            style={{ width: '150px', height: '150px', borderRadius: '50%', marginRight: '20px' }}
          />
          <div>
            <h2>{`${data.firstName} ${data.lastName}`}</h2>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Téléphone:</strong> {data.phone}</p>
            <p><strong>Adresse:</strong> {data.address}</p>
          </div>
        </div>
        <h3>Éducation</h3>
        <p>{data.education}</p>
        <h3>Expérience</h3>
        <p>{data.experience}</p>
        <h3>Compétences</h3>
        <ul className="skills-list">
          {data.skills.split(',').map((skill, index) => (
            <li key={index}>{skill.trim()}</li>
          ))}
        </ul>
        <h3>Certificats</h3>
        <ul className="certificates-list">
          {data.certificates.split(',').map((certificate, index) => (
            <li key={index}>{certificate.trim()}</li>
          ))}
        </ul>
        <h3>Projets</h3>
        <ul className="projects-list">
          {data.projects.split(',').map((project, index) => (
            <li key={index}>{project.trim()}</li>
          ))}
        </ul>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
  <button
    onClick={handleDownload}
    style={{
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '5px 10px',
      fontSize: '12px',
      border: 'none',
      borderRadius: '4px', 
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      transition: 'background-color 0.3s, transform 0.2s', 
      width: '150px', 
      margin: '0 auto', 
      display: 'block',
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = '#45a049';
      e.target.style.transform = 'scale(1.05)';
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = '#4CAF50'; 
      e.target.style.transform = 'scale(1)'; 
    }}
  >
    Télécharger CV
  </button>
</div>

    </div>
  );
};

export default CvDisplay;
