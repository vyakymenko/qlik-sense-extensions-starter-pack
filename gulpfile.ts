import { join } from 'path';

import { loadTasks, loadCompositeTasks } from './tools/utils/tasks_tools';

loadTasks(join(process.cwd(), 'tools', 'tasks'));

loadCompositeTasks(
  join(
    process.cwd(),
    'tools',
    'tasks.json'
  )
);
