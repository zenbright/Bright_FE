import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PackagePlus } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Calendar } from './calendar';
import CardContainer from './card-container';
import Chart from './chart';

function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // !TODO: Implement create new project form
  const handleCreateNewProject = () => {
    console.log('Create new project');
  };

  const currentHour = currentTime.getHours();
  const user = 'Kien';
  const greeting =
    currentHour < 12
      ? `Good Morning, ${user}`
      : currentHour < 18
        ? `Good Afternoon, ${user}`
        : `Good Evening, ${user}`;

  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const dateFormatted = currentTime.toLocaleDateString(undefined, options);
  return (
    <div className="flex w-full p-4 gap-4">
      {/* Section 1 */}
      <div className="w-9/12 flex flex-col mt-4 justify-between gap-8">
        <div className="space-y-2 flex justify-between items-center">
          <div>
            <p>{dateFormatted}</p>
            <p className="text-3xl font-bold">{greeting}</p>
          </div>
          <div>
            <div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button onClick={handleCreateNewProject}>
                    <PackagePlus size={16} />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Create new project</DialogTitle>
                    <DialogDescription>
                      Choose a name for your brand new project
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Project's Name
                      </Label>
                      <Input
                        id="project_name"
                        defaultValue="Bright"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Create</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        <div className=" place-content-center rounded-md">
          <div className="flex place-content-center w-full">
            <CardContainer />
          </div>
        </div>

        <div className="text-xl font-semibold h-full">
          <Chart />
        </div>
      </div>

      {/* Section 2 */}
      <div className="w-3/12 border-[1px] mr-2 rounded-md">
        <Calendar />
      </div>
    </div>
  );
}

export default Dashboard;
