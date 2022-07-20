import styled from "styled-components";

export const StyledDraggableBox = styled.div.attrs(props => ({
    // style: {
    //     left: props.lf,
    //     top: props.tp
    // },
}))`
    width: 3rem;
    height: 1rem;
    border: 1px red solid;
    position: absolute;
`