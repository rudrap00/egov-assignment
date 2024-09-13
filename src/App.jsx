import FormComponent from "./components/Form/FormComponent";
import { formConfig } from "./config/formConfig";

function App() {
  const submitHandler = (formData) => {
    console.log("Form data submitted: ", formData);
    alert("Form Data submitted. Check console for more details");
  };
  return (
    <>
      <div className="form-wrapper">
        <FormComponent formConfig={formConfig} onSubmit={submitHandler} />
      </div>
    </>
  );
}

export default App;
