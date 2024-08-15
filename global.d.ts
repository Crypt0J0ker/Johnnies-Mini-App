interface Window {
  Telegram: {
    WebApp: {
      ready: () => void
      showAlert: (message: string) => void
      // Здесь можно добавить другие методы, если они будут использоваться
    }
  }
}
