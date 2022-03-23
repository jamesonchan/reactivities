export const dateFormat = (data: Activity[]) => {
  let activties: Activity[] = [];
  data.forEach((activty) => {
    activty.date = activty.date.split("T")[0];
    activties.push(activty);
  });
  return activties;
};

export const sortDate = (data: Activity[]) => {
  data.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  return data;
};
