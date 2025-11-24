import { createI18n } from "vue-i18n";
import { useAppStore } from "@/store/modules/app";

const appStore = useAppStore();

// локальные языковые пакеты
import enLocale from "./package/en";
import zhCnLocale from "./package/zh-cn";
import ruLocale from "./package/ru";

const messages = {
  "zh-cn": {
    ...zhCnLocale,
  },
  en: {
    ...enLocale,
  },
  ru: {
    ...ruLocale,
  },
};

const i18n = createI18n({
  legacy: false,
  // текущее значение из стора, по умолчанию — английский
  locale: appStore.language || "en",
  // если перевода нет — падать на английский
  fallbackLocale: "en",
  messages,
  globalInjection: true,
});

export default i18n;
