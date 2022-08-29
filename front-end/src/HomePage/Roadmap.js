import React from "react";

export default function Roadmap({ prompts }) {
  const roadmapPrompts = [...prompts];

  console.log(roadmapPrompts);

  return (
    <div className="roadmap-sect m-3">
      {roadmapPrompts ? (
        roadmapPrompts.map((prompt) => {
          return (
            <div className="roadmap-block">
              <h3>{prompt.section_title}</h3>
              <div>
                <img
                  src={prompt.section_image}
                  alt={prompt.subtext}
                  width={"25%"}
                />
                <p>{prompt.section_text}</p>
              </div>
            </div>
          );
        })
      ) : (
        <div className="row mb-5">
          <div className="col">
            <h3>Loading ....</h3>
          </div>
        </div>
      )}
    </div>
  );
}
