import { useSearch } from "../context/SearchContext";
import SeeAnswer from './SeeAnswer.jsx'
import UserAnswer from './UserAnswer.jsx'

const QuizAnswer = ({ answers, index, decodeHtml }) => {
  const { seeAns } = useSearch();



  return (
    <>
      {!seeAns ? (
        <UserAnswer index={index} answers={answers} decodeHtml={decodeHtml} />
      ) : (
        <SeeAnswer index={index} decodeHtml={decodeHtml} />
      )
      }
    </>
  );
};

export default QuizAnswer;
