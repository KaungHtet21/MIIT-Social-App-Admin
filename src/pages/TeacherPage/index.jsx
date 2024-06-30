import { useState } from "react";
import { Button, Menu } from "antd";
import PropTypes from "prop-types";
import {
  BellFilled,
  CalendarFilled,
  DashboardFilled,
  HomeOutlined,
  LogoutOutlined,
  MessageFilled,
  SettingFilled,
  UsergroupAddOutlined,
  UserOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
function Header({ collapsed }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: collapsed ? 80 : 200,
        width: `calc(100% - ${collapsed ? 80 : 200}px)`,
        height: 50,
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        fontWeight: "bold",
        zIndex: 1000,
        transition: "left 0.2s, width 0.2s",
      }}
    >
      <Menu>
        <div style={{ position: "absolute", right: 20 }}>
          <Menu.Item
            key="/user"
            title="User"
            icon={<UserOutlined />}
          ></Menu.Item>
        </div>
      </Menu>
    </div>
  );
}
Header.propTypes = {
  collapsed: PropTypes.bool.isRequired,
};
function SideMenu({ collapsed, toggleCollapsed }) {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div
      style={{
        width: collapsed ? 80 : 200,
        height: "100%",
        transition: "width 0.2s",
        overflow: "hidden",
        backgroundColor: "#001529",
        position: "fixed",
        top: 0,
        bottom: 0,
        zIndex: 1100,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Button
          type="primary"
          icon={<HomeOutlined />}
          onClick={toggleCollapsed}
        >
          {/* {collapsed ? null : "MIIT"} */}
          MIIT
        </Button>
        <Menu
          defaultSelectedKeys={[window.location.pathname]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        >
          <Menu.Item
            key="/dashboard"
            icon={<DashboardFilled />}
            title="Dashboard"
            onClick={() => handleNavigate("/dashboard")}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            key="/attendance"
            icon={<UsergroupAddOutlined />}
            title="Attendance"
            onClick={() => handleNavigate("/attendance")}
          >
            Attendance
          </Menu.Item>
          <Menu.SubMenu key="sub1" title="Course" icon={<AppstoreOutlined />}>
            <Menu.Item
              key="/course"
              title="All Courses"
              onClick={() => handleNavigate("/course")}
            >
              All Courses
            </Menu.Item>
            <Menu.Item
              key="/physics"
              title="Physics"
              onClick={() => handleNavigate("/physics")}
            >
              Physics
            </Menu.Item>
            <Menu.Item
              key="/math"
              title="Math"
              onClick={() => handleNavigate("/math")}
            >
              Math
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item
            key="/messages"
            icon={<MessageFilled />}
            title="Messages"
            onClick={() => handleNavigate("/messages")}
          >
            Messages
          </Menu.Item>
          <Menu.Item
            key="/noti"
            icon={<BellFilled />}
            title="Notifigation"
            onClick={() => handleNavigate("/noti")}
          >
            Notification
          </Menu.Item>
          <Menu.Item
            key="/calendar"
            icon={<CalendarFilled />}
            title="Calendar"
            onClick={() => handleNavigate("/calendar")}
          >
            Calendar
          </Menu.Item>
          <Menu.Item
            key="/setting"
            icon={<SettingFilled />}
            title="Setting"
            onClick={() => handleNavigate("/setting")}
          >
            Settings
          </Menu.Item>
        </Menu>
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: collapsed ? 24 : 48,
            width: collapsed ? 32 : 144,
          }}
        >
          <Button
            type="primary"
            icon={<LogoutOutlined />}
            onClick={() => {
              //Handle logout logic here
            }}
            danger
          ></Button>
        </div>
      </div>
    </div>
  );
}
SideMenu.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  toggleCollapsed: PropTypes.func.isRequired,
};
function Content() {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<div>Dashboard</div>} />
        <Route path="/attendance" element={<div>Attendance</div>} />
        <Route path="/course" element={<div>Course</div>} />
        <Route path="/physics" element={<div>Physics</div>} />
        <Route path="/math" element={<div>Course</div>} />
        <Route path="/messages" element={<div>Messages</div>} />
        <Route path="/noti" element={<div>Notification</div>} />
        <Route path="/calendar" element={<div>Calendar</div>} />
        <Route path="/setting" element={<div>Settings</div>} />
      </Routes>
    </div>
  );
}

function TeacherPage() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Router>
      <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
        <SideMenu collapsed={collapsed} toggleCollapsed={toggleCollapsed} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            height: "100vh",
            transition: "margin-left 0.2s",
            overflow: "hidden",
          }}
        >
          <Header collapsed={collapsed} />
          <div
            style={{
              display: "flex",
              flex: 1,
              marginTop: 60,
              marginBottom: 60,
              paddingLeft: collapsed ? 80 : 200,
              transition: "padding-left 0.2s",
            }}
          >
            <Content />
          </div>
        </div>
      </div>
    </Router>
  );
}
export default TeacherPage;
