import { SectionListStyle } from './SectionList.styled';
import PropTypes from 'prop-types';
export const Section = ({ title, children }) => {
  return (
    <SectionListStyle>
      <h2>{title}</h2>
      {children}
    </SectionListStyle>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
