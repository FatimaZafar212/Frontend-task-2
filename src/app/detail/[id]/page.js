import React from "react";
import Detail from "@/Components/detail";

async function Page({ params }) {
  params = await params;
  return <Detail id={params.id} />;
}
export default Page;
