import React from "react";
import Link from "next/link";

async function Detail({id}) {
  let response = await fetch(`https://dummyjson.com/recipes/${id}`);
  let recipe = await response.json();

  return (

    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <img src={recipe.image} alt={recipe.name} className="w-full h-[450px]" />

      <div className="max-w-4xl w-full p-8 rounded-xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">
            {recipe.name}
          </h1>
          <Link href={"/"} >
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
              Go Back
            </button>
          </Link>
        </div>

        <h2 className="text-lg font-semibold mb-3 text-gray-700">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          {recipe.ingredients?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
{/* <p>
{recipe.ingredients}
</p> */}
        <h2 className="text-lg font-semibold mb-3 text-gray-700">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          {recipe.instructions?.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
        {/* <p>
            {recipe.instructions}
        </p> */}
      </div>
    </div>
  );
}

export default Detail;