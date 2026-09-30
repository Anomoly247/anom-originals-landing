import type { AOBridgeContextValue } from "../contexts/AOBridgeContext";

export const AO_MISSION_IDS = {
  welcome: "welcome-to-ao",
  play: "play-with-purpose",
  create: "make-something-kind",
} as const;

export function buildMissionHandoffUrl(
  bridge: AOBridgeContextValue,
  missionId: string,
  eventId: string,
) {
  const url = new URL("https://anomoly247.github.io/anom-social-sanctuary/missions");
  url.searchParams.set("house", bridge.house);
  url.searchParams.set("mount", bridge.mount);
  url.searchParams.set("return", window.location.href);
  url.searchParams.set("source", "originals");
  url.searchParams.set("mission", missionId);
  url.searchParams.set("event", eventId);
  return url.toString();
}
