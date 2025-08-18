import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "76swPoiop8TxQJJJUyYLFe",  // ID of a project you are using
      token: "oj78ub1vzVcapGE5ESSTsRvVRypCl88lUP4pGUVZiYvxjuqKpz6LWbMmDzdmA1UDbvHo5ZhjZLeyUygyEmkw"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})