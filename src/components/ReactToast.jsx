import { Button, Toast, ToastToggle } from "flowbite-react";
import { HiFire } from "react-icons/hi";

export function ReactToast() {
  return (
    <Toast>
      <div className="flex items-start">
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-900 dark:text-cyan-300">
          <HiFire className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">
          <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
            Project Successfully Done
          </span>
          <div className="mb-2 text-sm font-normal">
            I made this project with the help of 'themoviedb.org API'.
          </div>
          <div className="flex gap-2">
            <div className="w-auto">
              <Button size="xs">Good</Button>
            </div>
            <div className="w-auto">
              <Button color="light" size="xs">
                Bad
              </Button>
            </div>
          </div>
        </div>
        <ToastToggle />
      </div>
    </Toast>
  );
}
