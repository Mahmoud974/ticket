import { Github } from "lucide-react";
import { useUserContext } from "./hook/useContext";

export default function Ticket() {
  const { userData } = useUserContext();
  console.log(userData);

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
        Congrats,
        <span className="bg-gradient-to-r from-red-500   to-white bg-clip-text text-transparent">
          {userData.fullName}
        </span>
        !
        <br /> Your ticket is ready.
      </h1>

      <p className="mt-5">
        We've emailed your ticket to
        <br /> {userData.email} and will send updates in
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
              className="text-3xl font-bold "
            />
            <p className="ml-12 mt-2 text-slate-400">
              Jan 31, 2025 / Austin, TX
            </p>
            <div className="flex    items-start my-5  ">
              <img
                src="/images/image-avatar.jpg"
                alt="Uploaded Avatar"
                className="  w-16 h-16 object-cover rounded-md"
              />

              <div className="flex flex-col ml-4 ">
                <h2 className="text-xl text-left  ">{userData.fullName}</h2>
                <div className="flex ">
                  <Github className="text-md" />
                  <p className="text-lg">{userData.github}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
