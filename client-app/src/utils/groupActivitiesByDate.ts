import { format } from "date-fns";

export const groupActivitiesByDate = (activitiesByDate: Activity[]) => {
  return Object.entries(
    activitiesByDate.reduce((activities, activity) => {
      const date = format(activity.date!, "dd MMM yyyy");
      activities[date] = activities[date]
        ? [...activities[date], activity]
        : [activity];
      return activities;
    }, {} as { [key: string]: Activity[] })
  );
};
