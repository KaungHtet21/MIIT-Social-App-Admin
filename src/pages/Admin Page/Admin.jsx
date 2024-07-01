import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import {
  MenuOutlined,
  DashboardOutlined,
  MessageOutlined,
  UserOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const Admin = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuClick = (e) => {
    setSelectedMenuItem(e.key);
  };

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={toggleCollapsed}
          width={240}
          collapsedWidth={50}
          style={{
            height: "100vh",
            overflow: "auto",
          }}
        >
          <div className="menu-button">
            <Button
              type="primary"
              icon={<MenuOutlined />}
              onClick={toggleCollapsed}
              style={{ marginBottom: 16, width: "100%" }}
            />
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["Dashboard"]}
            selectedKeys={[selectedMenuItem]}
            onClick={handleMenuClick}
          >
            <Menu.Item key="Dashboard" icon={<DashboardOutlined />}>
              <Link to="/dashboard">
                {collapsed ? "Dashboard" : "Dashboard"}
              </Link>
            </Menu.Item>
            <Menu.Item key="Chat" icon={<MessageOutlined />}>
              <Link to="/chat">{collapsed ? "Chat" : "Chat"}</Link>
            </Menu.Item>
            <SubMenu key="Users" icon={<UserOutlined />} title="Users">
              <Menu.Item key="UserStudents">
                <Link to="/user/students">
                  {collapsed ? "Students" : "Students"}
                </Link>
              </Menu.Item>
              <Menu.Item key="UserTeachers">
                <Link to="/user/teachers">
                  {collapsed ? "Teachers" : "Teachers"}
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="Attendance"
              icon={<FileTextOutlined />}
              title="Attendance"
            >
              <Menu.Item key="AttendanceStudents">
                <Link to="/attendance/students">
                  {collapsed ? "Students" : "Students"}
                </Link>
              </Menu.Item>
              <Menu.Item key="AttendanceTeachers">
                <Link to="/attendance/teachers">
                  {collapsed ? "Teachers" : "Teachers"}
                </Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{ color: "white", height: "100px" }}
          >
            <h1>{selectedMenuItem.replace(/([A-Z])/g, " $1").trim()}</h1>
          </Header>
          <Content>
            <div className="site-layout-background" style={{ minHeight: 360 }}>
              <Routes>
                <Route
                  path="/dashboard"
                  element={<div>Dashboard Content</div>}
                />
                <Route path="/chat" element={<div>Chat Content</div>} />
                <Route
                  path="/user/students"
                  element={<div>Students Content</div>}
                />
                <Route
                  path="/user/teachers"
                  element={<div>Teachers Content</div>}
                />
                <Route
                  path="/attendance/students"
                  element={<div>Students Attendance</div>}
                />
                <Route
                  path="/attendance/teachers"
                  element={<div>Teachers Attendance</div>}
                />
              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default Admin;
