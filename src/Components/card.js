import React from 'react'
import Link from "next/link";
function Card({ id, image, title }) {
  return (
<Link href={`/detail/${id}`} className="bg-white rounded-xl shadow-md transition-shadow duration-200 p-2 flex flex-col items-center text-center">
            <img src={image} className="w-24 h-24 rounded-full mx-auto" />
            <h3 className="mt-3 text-black font-semibold">{title}</h3>
        </Link>

  )
}

export default Card