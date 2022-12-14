import type { NextPage } from "next";
import Head from "next/head";
import Button from "../components/Button";

const ButtonPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>DevChallanges - Button</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <div className="flex flex-row space-x-10">
          <div className="space-y-6">
            Variants:
            <br />
            <Button color="default">Default</Button>
            <br />
            <Button variant="outline" color="default">
              Outline
            </Button>
            <br />
            <Button variant="text" color="default">
              Text
            </Button>
          </div>
          <div className="space-y-6">
            Disabled:
            <br />
            <Button disabled>Disabled</Button>
            <br />
            <Button disableShadow>disableShadow</Button>
            <br />
            <Button disabled variant="text">
              Disabled Text
            </Button>
          </div>
          <div className="space-y-6">
            Sizes:
            <br />
            <Button size="sm">Small</Button>
            <br />
            <Button size="md">Medium</Button>
            <br />
            <Button size="lg">Large</Button>
            <br />
          </div>
          <div className="space-y-6">
            Colors:
            <br />
            <Button color="default">Default</Button>
            <br />
            <Button color="primary">Primary</Button>
            <br />
            <Button color="secondary">Secondary</Button>
            <br />
            <Button color="danger">Danger</Button>
          </div>
          <div className="space-y-6">
            <Button startIcon="local_grocery_store">Default</Button>
            <Button startIcon="local_grocery_store" color="primary">
              Default
            </Button>
            <Button startIcon="local_grocery_store" color="danger">
              Default
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default ButtonPage;
