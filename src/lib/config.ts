import { z } from "zod";

export const SITE = {
  title: "SteamUtils.app",
  description: "Feature-rich Discord Bot for your community!",
};

const ConfigSchema = z.object({
  botInviteUrl: z.url(),
  docsUrl: z.url(),
});

const rawConfig = {
  botInviteUrl: import.meta.env.BOT_INVITE_URL,
  docsUrl: import.meta.env.DOCS_URL,
};

const parsed = ConfigSchema.safeParse(rawConfig);

if (!parsed.success) {
  console.error("❌ CRITICAL ERROR: Invalid or missing configuration:");
  console.error(z.prettifyError(parsed.error));
  throw new Error("Invalid configuration");
}

export const config = parsed.data;

export const LINKS = {
  botInviteUrl: config.botInviteUrl,
  docsUrl: config.docsUrl,
};
