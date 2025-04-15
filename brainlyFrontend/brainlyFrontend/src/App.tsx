import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";

function App() {
  return (
    <>
      <Button
        startIcon={<PlusIcon />}
        variant="primary"
        text={"share"}
        size={"md"}
      />
      <Button variant="secondary" text={"Add Content"} size={"sm"} />
    </>
  );
}

export default App;
