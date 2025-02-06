import Image from "next/image";
import BlockContainer from "./components/BlockContainer";
import RotatingText from "./components/RotatingText";

export default function Home() {
  return (
    <>
      <section style={{
        width:'100vw',
        height: '100vh',
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignContent:'center',
        padding: '0 5rem'
      }}
      id="welcome">
        <BlockContainer phrase={"Hello!"}/>
        <h1 style={{textAlign:'center', fontSize: 'calc(1rem + 1vw)'}}>I'm Jacob Greenwald</h1>
      </section>
    </>
  );
}
