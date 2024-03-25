import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";

const SingleAccordion = ({
  id,
  question,
  answer,
  isAnswerVisible,
  toggleActive,
}) => {
  return (
    <div
      onClick={() => toggleActive(id)}
      className=" border-b border-b-gray-600 mb-2 ">
      <div className="flex justify-between cursor-pointer mb-4">
        <h3 className="font-semibold text-lg">{question}</h3>
        {isAnswerVisible ? <AiFillCaretUp /> : <AiFillCaretDown />}
      </div>
      {isAnswerVisible && <p className="text-gray-600">{answer}</p>}
    </div>
  );
};
export default SingleAccordion;
