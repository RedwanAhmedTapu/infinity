import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: " ",
    password: " ",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    // const  {firstname,lastname,phone,password,confirmpassword,decription}=user;
    try {
      const { email, password } = user;
      console.log(user);
      if (email.trim() === "" || password.trim() === "") {
        alert("please fill all the data");
      } else {
        const res = await axios
          .post("https://backendserver-flsp.onrender.com/loguser", user)
          .then((res) => {
            if (res.data === "not any user") {
              alert("wrong password and email");
            } else {
              if (
                email === "admin@gmail.com" &&
                password === res.data.password
              ) {
                navigate(`/adminDashboard`);
              } else {
                navigate(`/userDashboard?userMail=${email}`);
              }
              alert("login successfull");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (error) {
      console.error("Failed to login :", error);
    }
  };
  console.log(user);
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen">
        <Card className="w-96 flex justify-center flex self-center rounded-lg">
          <CardBody className="flex flex-col gap-8">
            <Input
              type="email"
              placeholder="Email"
              className="h-16"
              size="lg"
              name="email"
              id="email"
              value={user.email}
              onChange={handleChange}
            />
            <Input
              type="password"
              placeholder="Password"
              className="h-16"
              size="lg"
              name="password"
              id="password"
              value={user.password}
              onChange={handleChange}
            />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              className="bg-blue-500 h-24"
              fullWidth
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <Link to={"/signup"}>
                <Typography
                  as="a"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold text-blue-600"
                >
                  Sign up
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Login;
