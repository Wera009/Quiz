import logo from "./assets/quizlogo.png";

import Question from "./components/Qusetion";
function App() {
  return (
    <>
      <header>
        <img src={logo} alt="quizlogo" />
        <h1> ReactQuiz</h1>
      </header>
      <Question />
    </>
  );
}
export default App;
