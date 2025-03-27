'use client'

import { useState } from "react"

export default function Card({children}) {
    return (
        <div className="rounded-lg border p-8 bg-neutral-50 hover:shadow-2xl shadow-md duration-150">
            {children}
        </div>
    )
}