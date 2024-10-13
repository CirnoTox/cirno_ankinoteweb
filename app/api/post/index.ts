import { authOptions } from "../auth/[...nextauth]/route"
import prisma from '../../../lib/prisma';
import { getServerSession } from "next-auth/next";
// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  const { title, content } = req.body;
  const session = await getServerSession(req, res, authOptions)
  if (session) {
    // Signed in
    console.log("Session", JSON.stringify(session, null, 2));
    const result = await prisma.post.create({
      data: {
        title: title,
        content: content,
        author: { connect: { email: session?.user?.email } },
      },
    });
    res.json(result);
  } else {
    // Not Signed in
    res.status(401);
  }

}