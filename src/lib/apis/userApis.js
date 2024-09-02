export const getAllUsers = async () => {
  try {
    const response = await fetch("http://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    if (!response.ok) {
      return { error: "something went wrong" };
    }
    return data;
  } catch (error) {
    return { error: "something went wrong" };
  }
};
