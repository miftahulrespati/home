import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import diagram from "../../assets/img/diagram.drawio.png";

const App: React.FC = () => {
  return (
    <>
      <h4>
        Integrated and real-time server
      </h4>
      <div>
        <img src={diagram} alt="How It Works" />
      </div>
      ;
    </>
  );
};

export default App;
