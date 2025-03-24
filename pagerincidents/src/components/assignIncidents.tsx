import { useState } from "react";
import { engineers, managers } from "../data/employees";

const AssignIncidents = () => {
  const [assignedIncidents, setAssignedIncidents] = useState("");

  const assignIncidents = () => {
    let isIncidentAssigned = false;
    // Logic to assign incidents to engineers and managers
    for (let i = 0; i < engineers.length; i++) {
      if (!engineers[i].busy) {
        engineers[i].busy = true;
        // Logic to assign incident to engineer
        setAssignedIncidents(`Incident is assigned to ${engineers[i].name}.`);
        console.log("engineers : ", engineers);
        isIncidentAssigned = true;
        return;
      }
    }

    if (!isIncidentAssigned) {
      for (let i = 0; i < managers.length; i++) {
        if (!managers[i].busy) {
          managers[i].busy = true;
          // Logic to assign incident to manager
          setAssignedIncidents(`Incident is assigned to ${managers[i].name}.`);
          isIncidentAssigned = true;
          console.log("managers : ", managers);
          return;
        }
      }
    }

    if (!isIncidentAssigned) {
      setAssignedIncidents(
        "No engineers or managers available to assign the incident."
      );
    }
  };

  return (
    <div className="flex flex-col items-center gap-5 my-5">
      <h2 className="font-bold text-3xl">Assign Incidents</h2>
      <button className="btn btn-primary" onClick={() => assignIncidents()}>
        Assign Incidents
      </button>
      {assignedIncidents && assignedIncidents !== "" ? (
        <p className="font-semibold text-lg">{assignedIncidents}</p>
      ) : null}
    </div>
  );
};

export default AssignIncidents;
