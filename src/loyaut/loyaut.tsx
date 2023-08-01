import React from "react";
import Header from "@/components/simple/Header/Header";

const Loyaut = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="content-contaier">{children}</main>
    </>
  );
};

export default Loyaut;
