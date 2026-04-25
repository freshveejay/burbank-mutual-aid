"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE_NAME = "bma_admin";

export async function loginAction(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  const expected = process.env.ADMIN_PASSWORD;

  if (!expected) {
    redirect("/admin?error=not-configured");
  }
  if (password !== expected) {
    redirect("/admin?error=wrong-password");
  }

  const jar = await cookies();
  // Cookie value mirrors the password. For a stronger gate, swap to a signed
  // token — but this is a low-stakes preview gate, not real auth.
  jar.set(COOKIE_NAME, password, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 hours
  });
  redirect("/admin");
}

export async function logoutAction() {
  const jar = await cookies();
  jar.delete(COOKIE_NAME);
  redirect("/admin");
}

export async function isAuthenticated(): Promise<boolean> {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  const jar = await cookies();
  return jar.get(COOKIE_NAME)?.value === expected;
}
