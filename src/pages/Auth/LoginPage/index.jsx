import { Layout, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import { images } from "../../../assets/images";
import { COLORS, FONTS } from "../../../theme/theme";
import { CButton, CFormInput } from "../../../app/common";

const Styles = {
  Layout: styled(Layout)`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Card: styled.div`
    width: 30%;
    background-color: rgba(210, 211, 214, 0.6);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap: 16px;
    z-index: 1;
  `,
  BlurBackground: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: url(${images.login_bg}) no-repeat center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    z-index: 0;
    filter: blur(5px);
  `,
};

const LoginPage = () => {
  return (
    <Styles.Layout>
      <Styles.BlurBackground />
      <Styles.Card>
        <Typography
          style={{ ...FONTS.h0, color: COLORS.title, fontWeight: 900 }}
        >
          MIIT
        </Typography>
        <CFormInput
          title="Email"
          placeholder="Enter your email"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
          type={"email"}
        />
        <CFormInput
          title="Password"
          placeholder="Enter password"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
          type={"password"}
        />
        <CButton
          type={"primary"}
          size={"large"}
          text={"Login"}
          shape={'round'}
          style={{
            ...FONTS.h2,
            color: '#fff',
            width: "100%",
          }}
        />
      </Styles.Card>
    </Styles.Layout>
  );
};

export default LoginPage;
