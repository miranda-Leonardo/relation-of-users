import styled from "styled-components";

const Container = styled.div`
    min-width: 300px;
    max-width: 750px;
    margin: 0px auto 20px;
    padding: 0 10px;

    .header {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;

        h2 {
            font-weight: 700;
            font-size: 20px;
        }
    }
`

const Button = styled.button`
  min-width: 70px;
  padding: 5px 10px;
  border: 2px solid var(--color-black-1);
  border-radius: 4px;
  background-color: transparent;;
  cursor: pointer;

  svg {
      font-size: 20px;
  }

  :hover {
      border: 2px solid transparent;
      background-color: var(--color-black-0);

      svg {
          color: var(--color-white-0);
      }
  }
`;

const ContainerContact = styled.div`
  padding: 10px;
  border-radius: 4px;
  background-color: var(--color-white-0);
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    padding: 10px 10px 0;

    form {
      padding: 0;
    }
  }

  button {
    font-weight: 700;

    :hover {
      color: var(--color-white-0);
    }
  }
`

export { Container, Button, ContainerContact }
