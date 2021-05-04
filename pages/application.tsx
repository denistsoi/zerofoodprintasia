import styles from "../styles/application.module.css"

export default function Application() {
  return (
    <html>
      <body className={styles.html}>
        <iframe
          className={styles.iframe}
          id="typeform-full"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="camera; microphone; autoplay; encrypted-media;"
          src="https://form.typeform.com/to/BBECxqA2?typeform-medium=embed-snippet"
        ></iframe>{" "}
        <script
          type="text/javascript"
          src="https://embed.typeform.com/embed.js"
        ></script>{" "}
      </body>
    </html>
  )
}
