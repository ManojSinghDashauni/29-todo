import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useContextApi } from "../context/Context";
import { Button, Input, Textarea } from "./index";

export default function FormSection() {
  const navigate = useNavigate();
  const { notes, setNotes } = useContextApi();

  const onSubmit = (data) => {
    console.log(data);
    setNotes((prev) => [{ id: Date.now(), ...data }, ...prev]);
    navigate("/Display", { replace: true });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <Input
        className="elevation "
        label="Title"
        {...register("title", { required: true })}
      />
      {errors.title && <span>This field is required</span>}
      <Textarea
        className="elevation resize-none  "
        label="Content"
        {...register("content", { required: true })}
      />
      {errors.content && <span>This field is required</span>}
      <Input
        className="elevation"
        label="FullName"
        {...register("name", { required: true })}
      />
      {errors.name && <span>This field is required</span>}
      <Button className="elevation font-bold mt-4" value="Save Note">
        Save Note
      </Button>
    </form>
  );
}
