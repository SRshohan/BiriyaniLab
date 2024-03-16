import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
const App = () => {
  return (
  <>
    <h1 className="text-3xl font-bold underline">
        BiriyaniLab
    </h1>
    <div className ="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Button className = "mt-20">
        something
      </Button> 
    </div>
    <ButtonGradient />
  </>
  );
};

export default App
