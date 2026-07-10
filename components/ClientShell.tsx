import type { ReactNode } from "react";
import Header from "./Header";

export default function ClientShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}