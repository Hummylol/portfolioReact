import { Drawer } from "vaul";

export default function MyDrawer({addData}) {
  return (
    <Drawer.Root shouldScaleBackground="true" >
      <Drawer.Trigger asChild>
        <button className="h-[100%] w-[100%] cursor-default absolute z-[10000000] top-0 left-[0]"></button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/80" />
          <Drawer.Content className="bg-[#060606] text-white flex flex-col rounded-t-[10px] h-[50%] mt-24 fixed bottom-0 left-0 right-0">
              <div className="mx-auto mt-2 w-12 h-1.5 rounded-full bg-zinc-300 mb-8" />
              <div className="addData text-white">
                {addData}
              </div>
          </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
