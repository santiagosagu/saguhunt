import React, { useContext } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Buscar from "../ui/Buscar";
import Navegacion from "./Navegacion";
import Boton from "../ui/Boton";
import { FirebaseContext } from "../../firebase";

const ContenedorHeader = styled.div`
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Content = styled.div`
  @media (min-width: 768px) {
    display: flex;
    margin-top: 1rem;
    align-items: center;
    justify-content: space-between;
  }
`;

const Logo = styled.a`
  display: flex;
  justify-content: center;
  text-align: center;

  @media (min-width: 768px) {
    display: block;
  }

  color: var(--naranja);
  font-size: 4rem;
  //   line-height: 0;
  font-weight: 700;
  font-family: "Roboto Slab", serif;
  margin-right: 2rem;
  cursor: pointer;
`;

const Header = () => {
  const { usuario, firebase } = useContext(FirebaseContext);

  return (
    <header
      css={css`
        border-bottom: 2px solid var(--gris3);
        padding: 1rem 0;
      `}
    >
      <ContenedorHeader>
        <Content
        // style={{ display: "flex", marginTop: "1rem", alignItems: "center" }}
        //   css={css`
        //     display: flex;
        //     align-items: center;
        //     margin-top: 2rem;
        //   `}
        >
          <Link href="/">
            <Logo>R-A Sales and Services</Logo>
          </Link>

          <Buscar />

          <Navegacion />
        </Content>

        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          {usuario ? (
            <>
              <p
                css={css`
                  margin-right: 2rem;
                `}
              >
                Hola: {usuario.displayName}{" "}
              </p>
              <Boton bgColor="true" onClick={() => firebase.cerrarSesion()}>
                Cerrar Sesión
              </Boton>
            </>
          ) : (
            <>
              <Link href="/login">
                <Boton bgColor="true">Login</Boton>
              </Link>
              <Link href="/crear-cuenta">
                <Boton>Crear Cuenta</Boton>
              </Link>
            </>
          )}
        </div>
      </ContenedorHeader>
    </header>
  );
};

export default Header;
