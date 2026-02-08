import ProductBacklog from "../components/backlog/ProductBacklog";
import SprintPlanning from "../components/sprint/SprintPlanning";

function Scrum() {
  return (
    <div>
      <h2>SCRUM – Sprint Planning</h2>
      <ProductBacklog />
      <SprintPlanning />
    </div>
  );
}

export default Scrum;
