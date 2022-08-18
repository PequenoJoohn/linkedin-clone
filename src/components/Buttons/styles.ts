import styled from "styled-components";

export const Container = styled.div`
    .primary {
        padding: 0 2rem;
        height: 2rem;
        width: 8rem;

        border: transparent;
        border-radius: 1rem;
        background: var(--primario);
        color: var(--fundo-card);
        cursor: pointer;
    }

    .secondary {
        padding: 0 2rem;
        width: 8rem;
        height: 2rem;
        border: 1px solid var(--primario);
        border-radius: 1rem;
        background: transparent;
        color: var(--primario);
        cursor: pointer;
    }

    .tertiary {
        padding: 0 2rem;
        width: 8rem;
        height: 2rem;
        border: 1px solid var(--texto-primario);
        border-radius: 1rem;
        background: transparent;
        color: var(--texto-primario);
        cursor: pointer;
    }
`;