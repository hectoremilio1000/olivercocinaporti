import React from "react";
import YouTube from "react-youtube";

const PersonalizeCocina = () => {
  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-4">
        <div className="mb-6">
          <h1 className="w-full text-start text-3xl text-blue-950 font-bold">
            Personaliza tu cocina
          </h1>
        </div>

        {/* Wrapper responsivo */}
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <div className="absolute top-0 left-0 w-full h-full">
            <YouTube
              videoId="uZAIVaUf0qI"
              opts={opts}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizeCocina;
