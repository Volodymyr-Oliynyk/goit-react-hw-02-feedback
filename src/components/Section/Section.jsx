import React from 'react';
import { SectionStyled } from './SectionStyled';

const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <h2>{title}</h2>
      {children}
    </SectionStyled>
  );
};

export default Section;

Section.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
};