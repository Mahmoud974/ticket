import { Github } from "lucide-react";

export default function Ticket() {
  // Données dynamiques
  const userName = "Jonatan Kristof";
  const userEmail = "jonatan@email.com";

  return (
    <main className="flex flex-col text-white justify-center items-center h-screen text-sm text-center p-4">
      <a href="/">
        <img
          src="/images/logo-full.svg"
          alt="logo coding conf"
          className="mb-6 text-3xl font-bold"
        />
      </a>
      <h1 className="text-4xl font-bold">
        Congrats, {userName}!
        <br /> Your ticket is ready.
      </h1>
      <p className="mt-5">
        We've emailed your ticket to
        <br /> {userEmail} and will send updates in
        <br /> the run-up to the event.
      </p>

      <div className="flex items-center  mt-8 ">
        {/* Conteneur pour l'image avec texte superposé */}
        <div className="relative w-96">
          <img
            src="/images/pattern-ticket.svg"
            alt="ticket user"
            className="w-full"
          />
          <div className="absolute mt-2 top-2/4 left-1/4 ml-10 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <img
              src="/images/logo-full.svg"
              alt="logo coding conf"
              className="text-3xl font-bold"
            />
            <p className="ml-12">Jan 31, 2025 / Austin, TX</p>
            <div className="flex  my-5 items-center">
              <img
                src="/images/image-avatar.jpg"
                alt="Uploaded Avatar"
                className="  w-16 h-16 mx-auto object-cover rounded-md"
              />

              <div className="flex flex-col ml-2">
                <h2 className="text-xl  ">{userName}</h2>
                <div className="flex ">
                  <Github className="text-md" />
                  <p className="text-lg">@jonatankris</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
