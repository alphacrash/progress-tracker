export const isSecretValid = () => {
  return localStorage.getItem("secret") === import.meta.env.VITE_PROJECT_SECRET;
};

export const categorizeTasks = (tasks) => {
  tasks.sort((a, b) => b.priority - a.priority);
  return tasks.reduce((acc, task) => {
    const { category } = task;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(task);
    return acc;
  }, {});
};

export const getSumOfValuesAndTotals = (categorizedTasks) => {
  return Object.values(categorizedTasks).reduce(
    (acc, tasks) => {
      tasks.forEach((task) => {
        acc.value += task.value;
        acc.total += task.total;
      });
      return acc;
    },
    { value: 0, total: 0 }
  );
};
