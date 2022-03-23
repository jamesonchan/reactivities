export const groupActivitiesByDate = (activitiesByDate: Activity[]) => {
  return Object.entries(
    activitiesByDate.reduce((activities, activity) => {
      const date = activity.date;
      activities[date] = activities[date]
        ? [...activities[date], activity]
        : [activity];
      return activities;
    }, {} as { [key: string]: Activity[] })
  );
};
