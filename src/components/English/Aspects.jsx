import "../../styles/aspects.scss";

import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Aspects = () => {
  const [visible, setVisible] = useState([]);
  const toggleAnswer = (id) => {
    setTimeout(
      setVisible((prev) => {
        const newVisible = [...prev];
        newVisible[id] = !newVisible[id];
        return newVisible;
      }),
      5000
    );
  };

  const aspects = [
    {
      id: "1",
      question: "Anxiety, distrust",
      value:
        "This includes a tendency to experience intense anxiety over relatively small things, as well as difficulty with emotional closeness in relationships with others.",
    },
    {
      id: "2",
      question: "Panic attacks",
      value:
        "Panic attacks are sudden, often unexplained episodes of severe anxiety accompanied by distressing sensations such as palpitations, choking, chest pain, dizziness, diarrhea, and nausea. Panic attacks are characterized by a rapid increase in fear and typically have a short duration. They are often accompanied by various fears such as fear of death, fear of going crazy, or fear of losing control.",
    },
    {
      id: "3",
      question: "Increased control, difficulty relaxing and resting",
      value:
        "This psychological process is related to the mechanisms of psychological defense. It consists in the unconscious conviction that one is able to control everything. A natural consequence of such a conviction is a person's sense of responsibility for everything around and feelings of guilt or anxiety that arise if something gets out of control. Additionally, it can cause difficulty in fully relaxing the body and a lack of internal permission to rest, relax, and let go of control.",
    },
    {
      id: "4",
      question: "Psychosomatic disorders",
      value:
        "These are disorders that manifest at the physiological level and are exacerbated by stress, as well as physiological disorders that manifest at the mental level.",
    },
    {
      id: "5",
      question: "Low self-esteem, self-deprecation",
      value:
        "This includes a subjective, negative evaluation of oneself, identification of errors and shortcomings, and self-criticism.",
    },
    {
      id: "6",
      question: "Rejection of the body and its personality traits",
      value:
        "This involves not recognizing reality as it is and not accepting oneself for one's body, character traits, and abilities. This can lead to a lack of calm and clear attention to one's capabilities and existing limitations.",
    },
    {
      id: "7",
      question: "Uncontrolled anger, aggression",
      value:
        "These are feelings of anger that can occur in bursts of varying intensity and duration. The inability to control these emotions can lead to destructive behavior that is contrary to social norms and causes physical and moral harm to others.",
    },
    {
      id: "8",
      question: "Physical or sexual abuse",
      value:
        "This refers to moral injury caused by the use of physical force, physical punishment, or acts of a sexual nature without consent.",
    },
    {
      id: "9",
      question: "Difficulties in relationships with a partner",
      value: "Any relationship related questions.",
    },
    {
      id: "10",
      question: "Other",
      value:
        "Difficulties not mentioned above. An individual approach is used, so there is often an opportunity to consider non-standard situations and requests.",
    },
  ];

  return (
    <section className="aspects" id="aspects">
      <div className="container">
        <h2>Aspects of Work</h2>
        <ul className="aspect-list">
          <TransitionGroup>
            {aspects.map((aspect) => (
              <li
                key={aspect.id}
                id={aspect.id}
                onClick={() => toggleAnswer(aspect.id)}
              >
                <div>
                  <h3 className="question">{aspect.question}</h3>{" "}
                  <div className="plus">
                    <span
                      className={
                        visible[aspect.id] ? "rotate-plus" : "rotate-back"
                      }
                    >
                      +
                    </span>
                  </div>
                </div>

                <CSSTransition
                  in={visible[aspect.id]}
                  timeout={2000}
                  classNames="transition"
                >
                  <p className="">{visible[aspect.id] ? aspect.value : ""}</p>
                </CSSTransition>
              </li>
            ))}
          </TransitionGroup>
        </ul>
      </div>
    </section>
  );
};
export default Aspects;
