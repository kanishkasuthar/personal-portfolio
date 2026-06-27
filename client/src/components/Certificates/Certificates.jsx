import "./Certificates.css";

import {
  FaAward,
  FaMicrosoft,
  FaRobot,
} from "react-icons/fa";

function Certificates() {

  const certificates = [

    {
      icon: <FaAward />,
      title: "Oracle AI Foundation Associate",
      issuer: "Oracle",
      description:
        "Successfully completed Oracle AI Foundation Associate Certification.",
    },

    {
      icon: <FaMicrosoft />,
      title: "Microsoft AI Skills",
      issuer: "Microsoft",
      description:
        "Completed Microsoft AI Skills Program covering AI fundamentals and practical applications.",
    },

    {
      icon: <FaRobot />,
      title: "EV AI Skills",
      issuer: "EV",
      description:
        "Successfully completed AI Skill Development Program focused on emerging AI technologies.",
    }

  ];

  return (

    <section className="certificates" id="certificates">

      <div className="certificate-title">

        <span>PROFESSIONAL CERTIFICATIONS</span>

        <h1>Certifications</h1>

        <p>
          Professional certifications that demonstrate my continuous learning,
          technical knowledge, and commitment to improving my skills.
        </p>

      </div>

      <div className="certificate-container">

        {certificates.map((certificate, index) => (

          <div className="certificate-card" key={index}>

            <div className="certificate-icon">
              {certificate.icon}
            </div>

            <h2>{certificate.title}</h2>

            <h3>{certificate.issuer}</h3>

            <p>{certificate.description}</p>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Certificates;