import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

const Home = () => {
  const [quote, setQuote] = useState<any>();
  const [author, setAuthor] = useState<any>();
  const [authorQuotes, setauthorQuotes] = useState<any>();
  const [authorQuotesSection, setauthorQuotesSection] = useState(false);
  console.log("q", quote);
  console.log("q", authorQuotes);
  console.log("a", author);

  const fetchQuote = (e: any) => {
    setauthorQuotesSection(false);
    fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data);
        setAuthor(data.data[0].quoteAuthor);
      });

    fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`)
      .then((response) => response.json())
      .then((data) => setauthorQuotes(data));
  };

  const handleAuthor = async (e: any) => {
    setauthorQuotesSection((prev) => !prev);
  };

  useEffect(() => {
    fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data);
        setAuthor(data.data[0].quoteAuthor);
      });

    fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`)
      .then((response) => response.json())
      .then((data) => setauthorQuotes(data));
  }, []);

  if (!quote) return;

  return (
    <>
      <Head>
        <title>Quote Generator</title>
        <meta name="description" content="Quote Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4 w-8/12 relative">
        <button className="absolute top-4 right-16" onClick={fetchQuote}>
          Refresh
        </button>
        {!authorQuotesSection && (
          <>
            <div className="text-4xl border-l-8 border-orange-400 px-6 my-20 w-full">
              {quote?.data[0].quoteText}
            </div>
            <div
              onClick={handleAuthor}
              className="flex flex-col justify-start w-full px-10 space-y-2 hover:bg-zinc-800 py-10 hover:text-white cursor-pointer"
            >
              <span className="text-5xl font-semibold">
                {quote?.data[0].quoteAuthor}
              </span>
              <span> {quote?.data[0].quoteGenre}</span>
            </div>
          </>
        )}
        {authorQuotesSection && (
          <>
            <div className="flex flex-col justify-start w-full px-10 space-y-2 py-10">
              <span className="text-5xl font-semibold">
                {quote?.data[0].quoteAuthor}
              </span>
            </div>
            <div>
              {authorQuotes?.data.map((quote: any) => (
                <div
                  key={quote._id}
                  className="text-4xl border-l-8 border-orange-400 px-6 my-20 w-full"
                >
                  {quote.quoteText}
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Home;
