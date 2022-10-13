import React from 'react';
import styled from 'styled-components';
import { Footer } from 'client/components/footer/footer';

const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding-bottom: 5%;
`;

export const PageLayout: React.FC = ({ children }) => (
  <PageWrapper>
    <PageContent>{children}</PageContent>
    <Footer />
  </PageWrapper>
);
