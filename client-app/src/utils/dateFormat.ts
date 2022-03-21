export const dateFormat = (data: Activity[]) => {
  let activties: Activity[] = [];
  data.forEach((activty) => {
    activty.date = activty.date.split("T")[0];
    activties.push(activty);
  });
  return activties;
};
