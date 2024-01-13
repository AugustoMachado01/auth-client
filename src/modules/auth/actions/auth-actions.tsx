import prisma from "@/lib/connect";
import * as bcrypt from "bcrypt";
import { redirect } from "next/navigation";

async function createAccount(formData: FormData) {
  "use server";

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const hashPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashPassword,
    },
  });

  redirect("/portal/login");
}

async function login(formData: FormData) {
  "use server";

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    console.log("Error");

    redirect("/portal/login");
  }
  console.log("user == ", user);

  const isMatch = await bcrypt.compare(password, user?.password);

  if (!isMatch) {
    console.log("usuario ou senha invalida");
  }

  redirect("/portal");
}

const AuthActions = {
  createAccount,
  login,
};

export default AuthActions;
