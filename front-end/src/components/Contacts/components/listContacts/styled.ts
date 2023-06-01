import styled from "styled-components"

const Item = styled.li`
    padding: 10px;
    margin: 10px;
    box-sizing: border-box;
    border: 2px solid var(--color-black-1);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: default;

    div:nth-child(1) {
        min-height: 70px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    div:nth-child(2){
        padding-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 10px;
    }

    @media (min-width: 720px) {
        flex-direction: row;

        div:nth-child(2) {
            padding-top: initial;
            margin: auto 0px auto auto;
        }

        :hover {
            border: 2px solid var(--color-black-1);
        }
    }
`

const Alert = styled.p`
  padding: 10px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`

export { Item, Alert }
