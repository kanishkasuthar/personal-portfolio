import "./Achievements.css";

import {
  FaTrophy,
  FaMedal,
  FaLightbulb,
} from "react-icons/fa";

function Achievements() {

  const achievements = [

    {
      icon: <FaTrophy />,
      title: "2nd Prize",
      subtitle: "IIT Alumni Convention",
      description:
        "Secured Second Prize for presenting an innovative project during the IIT Alumni Convention."
    },

    {
      icon: <FaMedal />,
      title: "Ramanujan Boss Award",
      subtitle: "Academic Recognition",
      description:
        "Received recognition for academic excellence and consistent performance."
    },

    {
      icon: <FaLightbulb />,
      title: "24-Hour Hackathon",
      subtitle: "SheLeads Hackathon",
      description:
        "Participated in a 24-hour hackathon, collaborating with a team to develop an innovative solution."
    }

  ];

  return (

    <section className="achievements" id="achievements">

      <div className="achievement-heading">

        <span>AWARDS & ACHIEVEMENTS</span>

        <h1>Achievements</h1>

        <p>
          Milestones that reflect my academic dedication, innovation,
          and participation in technical events.
        </p>

      </div>

      <div className="achievement-container">

        {

          achievements.map((item,index)=>(

            <div className="achievement-card" key={index}>

              <div className="achievement-icon">

                {item.icon}

              </div>

              <h2>{item.title}</h2>

              <h3>{item.subtitle}</h3>

              <p>{item.description}</p>

            </div>

          ))

        }

      </div>

    </section>

  );

}

export default Achievements;