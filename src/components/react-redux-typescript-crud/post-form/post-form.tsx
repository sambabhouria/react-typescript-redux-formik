import React from "react";
import { Field, FieldProps, Formik, FormikProps } from "formik";
import { object, string } from "yup";
import TextField from "../text-field/text-field";
import { Post } from "../../../reducers/posts-reducer";

export interface FormValues {
  title: string;
  author: string;
}

export type OwnPostFormProps = {
  onSubmit: (post: Post) => void;
  initialValues: FormValues;
  currentPost?: Post;
};

export type OwnInnerFieldProps = FieldProps<FormValues> & FormValues;

export const PostForm: React.FunctionComponent<OwnPostFormProps> = props => {
  const enchanceId = (values: FormValues): Post => {
    return {
      ...values,
      id: props.currentPost
        ? props.currentPost.id
        : Math.round(Math.random() * 10e4)
    };
  };

  return (
    <div>
      <h2>Posts New:</h2>
      <Formik
        initialValues={props.initialValues}
        onSubmit={(values: FormValues) => props.onSubmit(enchanceId(values))}
        validationSchema={object().shape({
          title: string()
            .required("Entering your first name is required.")
            .min(5, "Minimum 5")
        })}
        render={({ touched, handleSubmit }: FormikProps<FormValues>) => (
          <form onSubmit={handleSubmit} className="ui form">
            <div className="form-group ">
              <Field
                name="title"
                render={(innerProps: OwnInnerFieldProps) => (
                  <TextField {...innerProps} title="Title" />
                )}
              />
            </div>
            <div className="form-group ">
              <label htmlFor="authors" className="col-sm-2 col-form-label">
                Author
              </label>
              <div className="col-sm-10">
                <Field
                  type="text"
                  name="author"
                  placeholder="Author"
                  className="form-control"
                />
              </div>
            </div>
            <button
              type="submit"
              style={{ marginRight: "10px", width: "100px" }}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        )}
      />
    </div>
  );
};
