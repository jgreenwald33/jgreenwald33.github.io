import Image from "next/image";
import BlockContainer from "./components/BlockContainer";

export default function Home() {
  return (
    <>
      <section style={{
        width:'100vw',
        height: '100vh',
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignContent:'center'
      }}
      id="welcome">
        <BlockContainer phrase={"Hello!"}/>
      </section>
    </>
  );
}
