export class House {
  id: number;
  name: string;
}

export class Story {
  id: number;
  sprintId: number;
  projectId: number;
  name: string;
  description: string;
  estimate: number;
  type: string;
  status: string;
  houseId: number;
}
