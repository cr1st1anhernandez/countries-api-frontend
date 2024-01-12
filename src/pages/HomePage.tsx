import { IoIosArrowForward } from "react-icons/io";
import { Button } from "@nextui-org/react";

export default function HomePage(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col max-w-[1500px] mx-auto xl:flex-row justify-between items-center p-6">
      <article className="flex flex-col gap-4">
        <h1>Countries Api</h1>
        <p className="text-2xl text-zinc-500 font-bold text-pretty">
          Your API to get curiosities about different countries.
        </p>
        <Button color="primary" className="font-bold text-lg w-fit" endContent={<IoIosArrowForward/>}>
          View Docs
        </Button>
      </article>
      <img src="./src/assets/principalImage.svg" width={600} height={600} alt="PrincipalImage" />
    </div>
  )
}
