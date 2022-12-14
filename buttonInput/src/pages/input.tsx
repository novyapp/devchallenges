import type { NextPage } from "next";
import Head from "next/head";
import Input from "../components/Input";

const InputPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>DevChallanges - Input</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto flex space-x-10 items-center justify-center p-4">
        <div className="flex flex-col">
          <Input />
          <br />
          <Input error />
          <br />
          <Input disabled />
          <br />
        </div>
        <div className="flex flex-col">
          <Input helperText="Hello there" />
          <br />
          <Input helperText="Hello there" error />
          <br />
          <Input startIcon />
          <br />
          <Input endIcon />
        </div>
        <div className="flex flex-col">
          <br />
          <Input value="Hello" />
          <br />
          <Input size="sm" />
          <br />
          <Input size="md" />
        </div>
      </div>
      <div className="container mx-auto flex space-y-10 items-center justify-center p-4 min-w-screen flex-col">
        <Input fullWidth />

        <Input multiline row={4} />
      </div>
    </>
  );
};

export default InputPage;
