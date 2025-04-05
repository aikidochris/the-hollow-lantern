
const MAX_PROMPTS_PER_DAY = 50;
const STORAGE_KEY = 'lantern-prompt-usage';

interface UsageData {
  date: string;
  count: number;
}

export const getUsageData = (): UsageData => {
  const today = new Date().toISOString().split('T')[0];
  const storedData = localStorage.getItem(STORAGE_KEY);
  
  if (!storedData) {
    return { date: today, count: 0 };
  }
  
  const data: UsageData = JSON.parse(storedData);
  
  // Reset if it's a new day
  if (data.date !== today) {
    return { date: today, count: 0 };
  }
  
  return data;
};

export const incrementUsage = (): { remainingPrompts: number, limitReached: boolean } => {
  const today = new Date().toISOString().split('T')[0];
  const currentData = getUsageData();
  
  // If it's a new day, reset the counter
  const newCount = currentData.date === today ? currentData.count + 1 : 1;
  const newData = { date: today, count: newCount };
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
  
  const remainingPrompts = MAX_PROMPTS_PER_DAY - newCount;
  const limitReached = remainingPrompts <= 0;
  
  return { remainingPrompts, limitReached };
};

export const getRemainingPrompts = (): number => {
  const { count } = getUsageData();
  return Math.max(0, MAX_PROMPTS_PER_DAY - count);
};

export const hasReachedLimit = (): boolean => {
  return getRemainingPrompts() <= 0;
};

export const MAX_PROMPTS = MAX_PROMPTS_PER_DAY;
