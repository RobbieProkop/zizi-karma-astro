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
        "Tendency to often experience intense anxiety over relatively small things.Emotional closeness in relationships with people.",
    },
    {
      id: "2",
      question: "Panic attacks",
      value:
        "A sudden, often unexplained attack of severe anxiety accompanied by distressing sensations (eg, palpitations, choking, chest pain, dizziness, diarrhea, nausea). Panic attacks are characterized by a rapid increase in fear and, in most cases, short duration. Usually this condition is accompanied by various fears, for example, fear of death, fear of going crazy or losing control of oneself.",
    },
    {
      id: "3",
      question: "Increased control, difficulty relaxing and resting",
      value:
        "Psychological process related to the mechanisms of psychological defense. It consists in the unconscious conviction of a person that he is able to control everything. A natural consequence of such a conviction is a person's sense of responsibility for everything around and the feeling of guilt or anxiety that arises if something gets out of control. Inability to completely relax the body. The lack of internal permission for oneself and the body to rest, relax, let go of control of what is happening.",
    },
    {
      id: "4",
      question: "Psychosomatic disorders",
      value:
        "Disorders that manifest themselves at the physiological level, as well as physiological disorders that manifest themselves at the mental level, which have arisen or aggravated against the background of stress.",
    },
    {
      id: "5",
      question: "Low self-esteem, self-deprecation",
      value:
        "A subjective, negative evaluation of oneself by a person. Identification of errors and shortcomings in oneself, analysis and evaluation of the negative aspects in one's activities, one's thinking and behavior. Self-criticism.",
    },
    {
      id: "6",
      question: "Rejection of the body and its personality traits",
      value:
        "Not recognizing reality as it is, in particular, not accepting a person of his body, character traits, abilities as they are. Lack of calm and clear attention to both their capabilities and existing limitations.",
    },
    {
      id: "7",
      question: "Uncontrolled anger, aggression",
      value:
        "Feelings of anger, which can occur in bursts of varying intensity and duration. The inability to control such emotions and stop, which can lead to destructive behavior that is contrary to social norms and brings physical and moral damage to people",
    },
    {
      id: "8",
      question: "Physical or sexual abuse",
      value:
        "Moral injury due to the use of physical force, physical punishment, or acts of a sexual nature without consent, against the will.",
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
        "Difficulties not mentioned above. I use an individual approach, so there is often an opportunity to consider non-standard situations and requests.",
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
