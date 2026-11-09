import { AVATAR_JPEG_BASE64 } from "@/constants/avatarData";

export async function GET() {
  const bytes = Buffer.from(AVATAR_JPEG_BASE64, "base64");
  return new Response(bytes, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
