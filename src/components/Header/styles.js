import styled from 'styled-components/'
import theme from '../../theme'

export const Container = styled.View`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 120px;
  border-color: transparent;
  padding-top: 55px;
  padding-left: 23px;
  padding-right: 23px;
  padding-bottom: 10px;
  z-index: 10;
  background-color: ${theme.colors.harvardCrimson};
  shadow-color: black;
  shadow-opacity: 0.15;
  shadow-radius: 13px;
`

export const LeftContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: left;
`

export const Title = styled.Text`
  font-weight: 600;
  font-size: ${props => (props.length > 15 ? (15 / props.length) * 32 : 32)}px;
  text-align: left;
  color: #FFFFFF;
  text-decoration: ${props => (props.highlight ? 'underline' : 'none')};
  text-decoration-color: white;
  max-width: 100%;
`

export const hitSlop = {
  top: 25, left: 30, right: 30, bottom: 25,
}
