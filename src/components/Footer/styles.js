import styled from 'styled-components/'
import theme from '../../theme'

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  height: 65px;
  border-color: transparent;
  padding-top: 15px;
  z-index: 10;
  background-color: ${theme.colors.harvardCrimson};
  shadow-color: black;
  shadow-opacity: 0.15;
  shadow-radius: 13px;
`

export const FooterText = styled.Text`
  font-weight: 600;
  font-size: 15px;
  text-align: center;
  color: #FFFFFF;
  text-decoration: ${props => (props.highlight ? 'underline' : 'none')};
  text-decoration-color: white;
`

export const hitSlop = {
  top: 25, left: 30, right: 30, bottom: 25,
}
