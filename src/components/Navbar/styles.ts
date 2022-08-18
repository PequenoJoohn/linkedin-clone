import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: space-around;

    background: var(--fundo-card);
    padding: 0.567rem;

    > div {
        display: flex;
        align-items: center;

        svg {
            margin-right: 0.5rem;
        }

        .search {
            position: relative;

            svg {
                position: absolute;
                top: 0.438rem;
                left: 0.625rem;
            }
            
            input {
                width: 15rem;
                height: 2.125rem;
                background: var(--input);
                border: none;
                color: var(--texto-primario);
                padding-left: 2.5rem;
                border-radius: 0.25rem;
                font-size: 0.875rem;
            }
        }
    }

    nav {
        display: flex;
        align-items: center;
        max-width: 26.375rem;
        width: 100%;
        height: 100%;

        ul {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            li {
                display: flex;
                flex-direction: column;
                align-items: center;
                color: var(--texto-primario);
                font-size: 0.75rem;

                &:last-child {
                    position: relative;
                    margin: 0 1rem;

                    &::before {
                        content: "";
                        left: -15px;
                        position: absolute;
                        bottom: -10px;
                        background: var(--texto-secundario);
                        width: 2px;
                        height: 60px;
                    }
                }
            }
        }
    }
`;