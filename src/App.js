import PlannerManage from './mvc/controller/parent/planner_manage.js';

class App {
  async run() {
    const planner = new PlannerManage();
    await planner.visitDate();
  }
}

export default App;
