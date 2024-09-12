import { Drawer } from "vaul";

export default function MyDrawer({ addData, dataPercentage, projects }) {
  const Progress = ({ value, className }) => {
    return (
      <div className={`bg-[#39393B] h-2 rounded ${className}`}>
        <div className="bg-[#FAFAFA] h-full rounded" style={{ width: `${value}%` }}></div>
      </div>
    );
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
          <div className="progressDiv mb-6">
            <Progress value={dataPercentage} className="w-[30%]" />
          </div>
          <div className="projects-section space-y-4">
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
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
