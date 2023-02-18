import PropTypes from 'prop-types';
import { Title } from "./Section.styled";

export const Section = ({ title, children }) => {
  return (
    <section>
      <Title>{title}</Title>
      <div>{children}</div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
