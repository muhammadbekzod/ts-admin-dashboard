import Button from "@mui/joy/Button";
import MotorTable from "../tables/motorTable";
import { useState } from "react";

const HomeComponent = () => {
  const [variant, setVariant] = useState("solid");
  return (
    <div style={{ padding: "50px" }}>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button size="md" variant={variant} color="success">
          Add New
        </Button>
      </div>
      <MotorTable />
    </div>
  );
};

export default HomeComponent;
