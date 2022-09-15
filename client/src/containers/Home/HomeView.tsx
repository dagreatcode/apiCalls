import React from "react";
import "./home.scss";
import styled from "styled-components";
import { IHomeViewProps } from "./HomeContainer";

const HomeView = (props: IHomeViewProps) => {
  // Create a <Title> react component that renders an <h1> which is
  // centered, palevioletred and sized at 1.5em
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  // Create a <Wrapper> react component that renders a <section> with
  // some padding and a papayawhip background
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;
  const {} = props;

  return (
    <div className="home">
      {/* // Use them like any other React component – except they're styled! */}
      <Wrapper>
        <Title>Hello World, this is my first styled component!</Title>
      </Wrapper>
    </div>
  );
};

HomeView.defaultProps = {};

export default HomeView;
