import { useState } from "react";
import { Drawer } from "vaul";

export default function MyDrawer({ addData, dataPercentage, projects }) {
  const [tooltip, setTooltip] = useState({ visible: false });

  const handleMouseOver = () => {
    setTooltip({ visible: true });
  };

  const handleMouseOut = () => {
    setTooltip({ visible: false });
  };

  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <button className="h-[100%] w-[100%] cursor-default absolute top-0 left-0"></button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/80" />
        <Drawer.Content className="bg-[#060606] text-white flex flex-col z-[10000] rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0 p-4">
          <div className="mx-auto mt-2 w-12 h-1.5 rounded-full bg-zinc-300 mb-8" />
          <div className="addData text-3xl text-white mb-4">
            {addData}
          </div>
          <div className="flex">
            <div className="projects-section w-[100%] space-y-4">
              <h3 className="text-2xl mb-2">Sample Projects</h3>
              <ul className="space-y-4">
                {projects?.map((project, index) => (
                  <li key={index} className="p-4 bg-[#1e1e1e] rounded-lg">
                    <h4 className="text-xl font-semibold mb-2">{project.projectName}</h4>
                    <p className="text-lg mb-2">{project.projectDescription}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologiesUsed.map((tech, idx) => (
                        <span key={idx} className="bg-[#2e2e2e] px-3 py-1 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="progressDiv relative flex justify-center items-center w-[15%] text-black">
              <div
                className="outer relative bg-[#39393B] w-[40%] h-[10rem] rounded"
                style={{ position: "relative" }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <div
                  className={`percent absolute bg-[#FAFAFA] w-[100%] bottom-0 rounded-b`}
                  style={{ height: `${dataPercentage}%` }}
                >
                  <div
                    className={`absolute transform translate-x-[170%] transition-all ease-in duration-[150] bg-[#2e2e2e] text-white px-2 py-1 rounded text-sm whitespace-nowrap pointer-events-none ${
                      tooltip.visible ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {`${dataPercentage}%`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}