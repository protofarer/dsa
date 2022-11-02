// TODO use a maxHeap aka priority queue
// https://leetcode.com/problems/task-scheduler/
export default function taskScheduler(tasks: string[], n: number): number {
  if (n ===0) return tasks.length;

  let freq = new Map<string, number>();


  // determine worst (max) time to execute by identifying most common task
  let maxCount = 0;
  let maxTask = tasks[0];

  // build hash table
  for (let i = 0; i < tasks.length; ++i) {
    const count = (freq.get(tasks[i]) || 0) + 1;
    freq.set(tasks[i], count);
    if (count > maxCount) {
      maxCount = count;
      maxTask = tasks[i];
    }
  }

  // calculate worst case idle time
  // [A..., A..., A..., A..., AGLMN]
  let idleTime = (maxCount - 1) * n;

  // already incorporated into idleTime
  freq.delete(maxTask);

  for (let count of freq.values()) {
    if (count === maxCount) {
      idleTime -= (count - 1);
    } else {
      idleTime -= count;
    }
  }

  return tasks.length + Math.max(idleTime, 0);

}
