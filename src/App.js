import Input from "./lib/components/Input";

function App() {
  function testOnclick(e) {
    console.log("clicked!");
  }

  function testOnChange(e) {
    console.log(e.target.value);
  }

  return (
    <div>
      <Input
        label="Price"
        input={{
          id: "price",
          type: "number",
          min: "0.01",
          step: "0.01",
          onClick: testOnclick,
          onChange: testOnChange,
        }}
      />
    </div>
  );
}

export default App;
