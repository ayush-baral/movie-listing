import React from "react";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

export const LayoutWithHeader: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};
