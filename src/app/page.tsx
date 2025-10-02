"use client"
import Image from "next/image";
import FileUpload from "./Components/FileUpload";


export default function Home() {
  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center flex-col">
      <FileUpload/>
    </div>
  );
}
