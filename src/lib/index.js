import axios from "axios";

const API_URL = "https://newiriaobzksysodoppj.supabase.co/rest/v1/tasks";

export const fetchTasks = async () => {
  try {
    const { data } = await axios.get(API_URL, {
      headers: {
        "Content-Type": "application/json",
        apikey: import.meta.env.VITE_SUPABASE_API_KEY,
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const updateTaskValue = async (taskId, value) => {
  try {
    const { data } = await axios.patch(
      `${API_URL}?id=eq.${taskId}`,
      {
        value: value,
      },
      {
        headers: {
          "Content-Type": "application/json",
          apikey: import.meta.env.VITE_SUPABASE_API_KEY,
        },
      }
    );
    return data;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};
