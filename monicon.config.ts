import { MoniconOptions } from "@monicon/core";

export default {
  // Loads individual icons by icon name
  // icons: ["mdi:home", "feather:activity"],
  // Loads all icons from the lucide collection
  collections: ["ph", "phosphor"],
  // plugins: [
  /**
   * change the output path to your project config for example;
   * - components/icons
   * - src/components/icons
   */
  // clean({ patterns: ["components/icons"] }),
  // reactNative({ outputPath: "components/icons" }),
  // ],
} satisfies MoniconOptions;
