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
    <div className="flex w-full gap-4 p-4">
      {/* Section 1 */}
      <div className="mt-4 flex w-9/12 flex-col justify-between gap-8">
        <div className="flex items-center justify-between space-y-2">
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

        <div className="place-content-center rounded-md">
          <div className="flex w-full place-content-center">
            <CardContainer />
          </div>
        </div>

        <div className="h-full text-xl font-semibold">
          <Chart />
        </div>
      </div>

      {/* Section 2 */}
      <div className="mr-2 w-3/12 rounded-md border-[1px]">
        <Calendar />
      </div>
    </div>
  );
}

export default Dashboard;
