// import { useState } from "react";
import { Layout } from "antd";
import "./App.css";

import Cards from "./Components/Cards";

const { Header, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="Layout">
        <Layout>
          <Sider className="App-sider"></Sider>
          <Header className="App-header" />
          <Content style={{marginLeft: "200px"}}>
            {/* Body */}
            <div
              className="title-margin"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <p>Заявки</p>
              <p style={{ marginLeft: "8px", color: "#6D7471" }}>&sdot; 22</p>
            </div>

            {/* Cards */}
            <Cards />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
