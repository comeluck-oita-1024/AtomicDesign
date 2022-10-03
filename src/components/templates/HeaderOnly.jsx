import { Header } from "../atoms/layout/Header";

export const HearderOnly = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
    </>
  );
};
