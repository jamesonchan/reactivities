export const dateFormat = (data: Activity[]) => {
  let activties: Activity[] = [];
  data.forEach((activty) => {
    activty.date = new Date(activty.date!);
    activties.push(activty);
  });
  return activties;
};

export const sortDate = (data: Activity[]) => {
  data.sort((a, b) => b.date!.getTime() - a.date!.getTime());
  return data;
};
