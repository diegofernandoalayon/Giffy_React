import styled from '@emotion/styled'
import {Link} from  'wouter'

export const CategoryTitle = styled.h3`
    color: coral;
    margin-top: 0;
  `
export const CategoryList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    text-align:left;
`
const generateMultiColorCategory = props =>{
    const NEED_WHITE_COLOR = [3,4]
    const  colorIndex = props.index % 5 + 1
    const needWhite = NEED_WHITE_COLOR.includes(colorIndex)
    const colorText = needWhite ? 'white':'var(--theme-body-bg)'
    return `
    background-color: var(--brand-color_${colorIndex});
    color: ${colorText};
    `


}

export const CategoryListItems = styled.li`
// display: list-item;
display: inline-block;
padding: 0.3rem;
margin: 0.2rem;
font-size: 1.2rem;


${generateMultiColorCategory}
`

export const CategoryLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    font-size: 14px;
    // color: red;
    :hover{
        color: rgb(182, 23, 23);
        }
`