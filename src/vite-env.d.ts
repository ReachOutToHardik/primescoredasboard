/// <reference types="vite/client" />

declare global {
  interface ImportMetaEnv {
    readonly VITE_WHATSAPP_NUMBER?: string
    readonly VITE_SUPPORT_PHONE?: string
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
}

export {}
