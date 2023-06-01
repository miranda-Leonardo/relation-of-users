import styled from "styled-components";

const Container = styled.div`
    min-width: 300px;
    max-width: 750px;
    padding: 10px;
    margin: 0 auto 20px auto;
    gap: 10px;
    border-bottom: 2px solid var(--color-black-1);
    margin-bottom: 20px;
    display: flex;

    div:nth-child(2) > p:first-child {
            font-size: 20px;
        }

    div {
        justify-content: space-evenly;
        display: flex;
        flex-direction: column;

        p {
            font-weight: 700;
        }
    }

    button {
        margin: auto 0 auto auto;
    }
`

const Circle = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: var(--color-black-0);
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;

    p {
        width: 100%;
        text-align: center;
        font-weight: 700;
        font-size: 30px;
        color: var(--color-white-0);
    }
`

export { Circle, Container };
