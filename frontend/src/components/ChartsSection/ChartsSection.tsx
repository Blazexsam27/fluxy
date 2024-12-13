import codebaseServices from "../../services/codebase.services";

function ChartsSection() {
  console.log(codebaseServices.getCodebaseInfo());
  return <div>ChartsSection</div>;
}

export default ChartsSection;
