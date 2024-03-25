import { useState } from "react";
import accordionData from "./accordionData";
import SingleAccordion from "./SingleAccordion";
const Accordion = () => {
  const [isActive, setIsActive] = useState(null);

  function toggleActive(id) {
    setIsActive(isActive === id ? null : id);
  }

  return (
    <div className="max-w-lg mx-auto mt-32">
      {accordionData.map((data) => {
        return (
          <SingleAccordion
            {...data}
            isAnswerVisible={data.id === isActive}
            toggleActive={toggleActive}
            key={data.id}
          />
        );
      })}
    </div>
  );
};
export default Accordion;
