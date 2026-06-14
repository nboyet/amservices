import { redirect } from "next/navigation";

// Main page redirects to Version A by default.
// Each version is accessible via /version-a, /version-b, /version-c
// and carries a VersionSwitcher bar to navigate between them.
export default function Home() {
  redirect("/version-a");
}
