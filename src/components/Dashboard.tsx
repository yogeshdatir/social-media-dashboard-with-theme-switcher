import React from "react";
import {
  Background,
  Container,
  Flex,
  Header,
  VStack,
} from "./Dashboard.styled";
import MainCard from "./MainCard";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <Background>
      <Container>
        <Header>
          <VStack>
            <h1>Social Media Dashboard</h1>
            <p>Total Followers: 23,004</p>
          </VStack>
        </Header>
        <Flex>
          <MainCard />
        </Flex>
        <Flex></Flex>
      </Container>
    </Background>
  );
};

export default Dashboard;
