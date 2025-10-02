"use client"

import { ChangeEvent, useState } from "react"
import * as xlsx from "xlsx";

export default function FileUpload(){

    const handleUpload = (e:ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) {
            return;
        }
        
        const file = files[0];
        setCurrentFile(file);
        const reader = new FileReader();
        reader.onload = (e) => {
            const workbook = xlsx.read(e.target?.result);
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            const table = xlsx.utils.sheet_to_html(sheet);
            setTable(table);
        };
        reader.readAsArrayBuffer(file)
    }

    const convertFileSize = (fileSize:number) => {
        const convertedFileSize = fileSize / 100000;
        if (fileSize / 100000000 >= 1) {
            return `${fileSize / 100000000} GB`;
        }
        else if (fileSize / 100000 >= 1) {
            return `${fileSize / 100000} MB`;
        }
        else if (fileSize / 1000 >= 1) {
            return `${fileSize / 1000} KB`;
        }

        return `${fileSize} bytes`;
    }
    const deleteFile = () => {
        setCurrentFile(null);
        setSheets([]);
        setTable("");
    }

    const uploadIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-arrow-up-fill" viewBox="0 0 16 16">
            <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0z"/>
        </svg>
    )

    const [currentFile, setCurrentFile] = useState<File | null>(null);
    const [sheets, setSheets] = useState<string[]>([]);
    const [table, setTable] = useState<any>();

    return (
        <>
        {sheets}
        <div dangerouslySetInnerHTML={{ __html: table }} />
            {currentFile !== null ? (
                <div className="border border-neutral-200 p-4 mb-4 text-sm font-semibold flex gap-16">
                    <div>
                        <p className="text-sm">
                            {currentFile.name}
                        </p>
                        <p className="text-xs text-neutral-400">
                            {convertFileSize(currentFile.size)}
                        </p>
                    </div>
                    <button 
                        className="bg-red-300 px-4 py-1 text-xs rounded-md cursor-pointer hover:brightness-95 duration-75"
                        onClick={deleteFile}
                    >
                        Delete
                    </button>

                </div>
            ):(
                <>
                    <label htmlFor="file-upload"  className="rounded-full bg-neutral-900 py-2 px-4 text-neutral-50 cursor-pointer hover:brightness-90 duration-150 flex items-center gap-2">
                        {uploadIcon}Upload Excel File
                    </label>
                    <input onChange={handleUpload} accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" id="file-upload" type="file" className="hidden"/>
                </>
            )}

        </>
    )
}