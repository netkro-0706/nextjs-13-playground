import "../../styles/globals.css";

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <p>이벤트</p>
      {children}
    </>
  );
}
