import { authoptions } from "@/utils/auth"
import NextAuth from "next-auth"

const handler = NextAuth(authoptions);

export { handler as GET, handler as POST};

// export default NextAuth(authoptions)