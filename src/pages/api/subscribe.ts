import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  let { email } = req.body;

  if (!email || typeof email !== "string") {
    return res.status(400).json({ message: "Email is required" });
  }

  email = email.trim().toLowerCase();
  if (email.endsWith(".")) {
    email = email.slice(0, -1);
  }

  if (email.length > 50) {
    return res
      .status(400)
      .json({ message: "Email must be less than 50 characters" });
  }

  if (!email.endsWith("@bennett.edu.in")) {
    return res
      .status(400)
      .json({ message: "Only Bennett University emails are allowed" });
  }

  try {
    const existingEmail = await prisma.juniorCoreWaitlistEmail.findUnique({
      where: { email },
    });

    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    await prisma.juniorCoreWaitlistEmail.create({
      data: { email },
    });

    return res.status(201).json({ message: "Email added to waitlist" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
