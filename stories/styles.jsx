import styled from 'styled-components';

const Button = styled.button`
  font-size: 1.5em;
  text-align: center;
  color: white;
	background-color: blue;
	font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: white;
  background-color: #1ea7fd;
  font-size: 16px;
  padding: 12px 24px;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export {
	Button,
	Wrapper,
}
