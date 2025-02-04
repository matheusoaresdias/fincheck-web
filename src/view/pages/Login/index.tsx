import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Login() {
  return (
    <>
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900 tracking-[-1px]">Sign in</h1>

        <p className="space-x-2">
          <span className="text-gray-700 tracking-[-0.5px]">
            New here?
          </span>

          <Link
            to="/register"
            className="tracking-[-0.5px] text-teal-900 font-medium"
          >
            Sign up
          </Link>
        </p>
      </header>

      <form action="" className="mt-[60px] flex flex-col gap-4">
        <Input
          type="email"
          placeholder="E-mail"
          name="email"
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
        />

        <Button type="submit" className="mt-2">Log in</Button>
      </form>
    </>
  );
}
