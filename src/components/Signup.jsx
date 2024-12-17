import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useContextApi } from "../context/Context";
import { Button, Input } from "./index";

export default function Signup() {
  const auth = useContextApi();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    auth.login(data);
    navigate("/profile", { replace: true });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 w-1/2"
    >
      <Input
        className="elevation"
        label="FullName"
        {...register("name", { required: true })}
      />
      {errors.name && <span>This field is required</span>}

      <Input
        className="elevation "
        label="email"
        {...register("email", { required: true })}
      />
      {errors.email && <span>This field is required</span>}
      <Input
        className="elevation "
        label="password"
        type="password"
        {...register("password", { required: true })}
      />
      {errors.password && <span>This field is required</span>}

      <Button className="elevation font-bold mt-4" value="Save Note">
        Sign Up
      </Button>
    </form>
  );
}
