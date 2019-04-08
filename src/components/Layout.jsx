import React from 'react';
import 'typeface-source-code-pro';
import GlobalStyle from 'theme/global';
import BodyContainer from 'theme/containers/BodyContainer';
import Line from 'components/Line';
import Nav from 'components/Nav';
import Footer from 'components/Footer';

export default ({ children }) => (
  <>
    <GlobalStyle />
    <Line />
    <BodyContainer>
      <Nav />
      {children}
      <Footer />
    </BodyContainer>
  </>
);
