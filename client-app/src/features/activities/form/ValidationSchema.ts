import * as Yup from "yup";

const validationSchema = Yup.object({
  title: Yup.string().required("The activity title is required"),
  description: Yup.string().required("The activity description is required"),
  category: Yup.string().required(),
  date: Yup.string().required("Date is required").nullable(),
  venue: Yup.string().required(),
  city: Yup.string().required(),
});

export default validationSchema;
