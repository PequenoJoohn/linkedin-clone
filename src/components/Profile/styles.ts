import styled from "styled-components";

export const Container = styled.section`
    justify-content: center;
    width: 48.75rem;
    height: 29.25rem;
    background: var(--fundo-card);
    position: relative;
    margin: 1.5rem 1.5rem 0.5rem 1.5rem;
    border-radius: 1rem;
    overflow: hidden;

    .background {
        width: 100%;
        height: 14.375rem;
        object-fit: cover;
        position: absolute;
    }

    .profile {
        padding: 7.375rem 0 1.5rem 1.5rem;
        position: relative;

        &-image {
            width: 10rem;
            height: 10rem;
            border-radius: 50%;
            border: 0.25rem solid var(--fundo-card);
        }

        &-wrapper {
            display: flex;
            justify-content: space-between;
            &-info {
                &-name {
                    color: var(--texto-primario);
                    font-size: 1.5rem;
                    margin-top: 0.5rem;
                }
        
                &-role {
                    color: var(--texto-primario);
                    font-size: 1rem;
                }
        
                &-about {
                    color: var(--texto-secundario);
                    margin-top: 0.25rem;
                }
        
                &-location {
                    display: flex;
                    margin-top: 0.25rem;
                    align-items: center;
        
                    p {
                        color: var(--texto-secundario);
        
                        &:last-child {
                            padding: 0 0.375rem;
                            color: var(--primario);
                        }
                    }
        
                    span {
                        width: 0.125rem;
                        height: 0.125rem;
                        background: var(--texto-secundario);
                        border-radius: 100%;
                        margin: 0 0.375rem;
                    }
                }
        
                &-social {
                    display: flex;
                    padding: 0.25rem 0;
                    align-items: center;
        
                    p {
                        color: var(--primario);
                    }
        
                    span {
                        width: 0.125rem;
                        height: 0.125rem;
                        background: var(--primario);
                        border-radius: 100%;
                        margin: 0 0.375rem;
                    }
                }
        
                &-buttons {
                    display: flex;
        
                    button {
                        &:first-child {
                            margin-right: 0.438rem;
                        }
                    }
                }
            }
            &-company {
                padding-right: 5.438rem;
            }
        }
    }
`;