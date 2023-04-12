import "../../styles/aspects.scss";

import { useState } from "react";

const Aspects = () => {
  const [visible, setVisible] = useState([]);
  const toggleAnswer = (id) => {
    setVisible((prev) => {
      const newVisible = [...prev];
      newVisible[id] = !newVisible[id];
      return newVisible;
    });
  };

  const aspects = [
    {
      id: "1",
      question: "question 1",
      value: "SOme answer",
    },
    {
      id: "2",
      question: "question 2",
      value: "SOme answer",
    },
    {
      id: "3",
      question: "question 3",
      value: "SOme answer",
    },
    {
      id: "4",
      question: "question 4",
      value: "SOme answer",
    },
  ];
  return (
    <section className="aspects" id="aspects">
      <div className="container">
        <h2>Aspects of Work</h2>
        <ul className="aspect-list">
          {aspects.map((aspect) => (
            <li
              key={aspect.id}
              id={aspect.id}
              onClick={() => toggleAnswer(aspect.id)}
            >
              <div>
                <h3 className="question">{aspect.question}</h3>{" "}
                <div className="plus">
                  <span>+</span>
                </div>
              </div>
              {visible[aspect.id] && <h3 className="answer">{aspect.value}</h3>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Aspects;
