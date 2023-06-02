import styled from "styled-components";

const Container = styled.div`
  min-width: 300px;
  max-width: 400px;
  padding: 10px;
  margin: 0 auto;
  background-color: var(--color-white-0);

  p {
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 10px 0;
  }

  label {
    margin: 10px 0 5px;
  }

  button {
    font-weight: 700;
    margin: 10px auto;

    :hover {
      color: var(--color-white-0);
    }
  }
`;

export { Container }
