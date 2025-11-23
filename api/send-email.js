import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, email, service, message, recaptchaToken } = req.body;

    // Validate required fields
    if (!name || !phone || !email || !service || !message) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    // Validate reCAPTCHA token
    if (!recaptchaToken) {
      return res.status(400).json({ error: 'Token de reCAPTCHA no proporcionado' });
    }

    // Verify reCAPTCHA with Google
    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    });

    const recaptchaData = await recaptchaResponse.json();

    // Check if reCAPTCHA verification was successful
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      console.error('reCAPTCHA verification failed:', recaptchaData);
      return res.status(400).json({ 
        error: 'Verificación de seguridad fallida. Por favor, intenta nuevamente.',
        details: recaptchaData 
      });
    }

    console.log('reCAPTCHA score:', recaptchaData.score);

    // Send email using Resend with verified custom domain
    const data = await resend.emails.send({
      from: 'Formulario Web <contacto@satfuncionalmallorca.com>',
      to: ['satfuncionalmallorca@gmail.com', 'lucas.workspace.1997@gmail.com', 'satfuncionalmallorca.web@gmail.com'],
      reply_to: email, 
      subject: `Nueva solicitud de servicio: ${service}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #1f2937;
                background-color: #f9fafb;
                padding: 20px;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
              }
              .header {
                background-color: #111827;
                padding: 32px 24px;
                text-align: center;
                border-bottom: 3px solid #3b82f6;
              }
              .header h1 {
                color: #ffffff;
                font-size: 24px;
                font-weight: 600;
                margin-bottom: 8px;
              }
              .header p {
                color: #9ca3af;
                font-size: 14px;
              }
              .content {
                padding: 32px 24px;
              }
              .section {
                margin-bottom: 32px;
              }
              .section-title {
                font-size: 12px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                color: #6b7280;
                margin-bottom: 16px;
                padding-bottom: 8px;
                border-bottom: 2px solid #e5e7eb;
              }
              .info-row {
                display: flex;
                padding: 12px 0;
                border-bottom: 1px solid #f3f4f6;
              }
              .info-row:last-child {
                border-bottom: none;
              }
              .info-label {
                min-width: 100px;
                font-weight: 600;
                color: #374151;
                font-size: 14px;
              }
              .info-value {
                color: #1f2937;
                font-size: 14px;
                flex: 1;
              }
              .info-value a {
                color: #3b82f6;
                text-decoration: none;
              }
              .info-value a:hover {
                text-decoration: underline;
              }
              .service-box {
                background-color: #f0f9ff;
                border-left: 4px solid #3b82f6;
                padding: 16px;
                margin-bottom: 24px;
                border-radius: 4px;
              }
              .service-box strong {
                color: #1e40af;
                font-size: 16px;
              }
              .message-box {
                background-color: #f9fafb;
                border: 1px solid #e5e7eb;
                border-radius: 6px;
                padding: 16px;
                margin-top: 8px;
              }
              .message-text {
                color: #374151;
                font-size: 14px;
                line-height: 1.6;
                white-space: pre-wrap;
              }
              .footer {
                background-color: #f9fafb;
                padding: 24px;
                text-align: center;
                border-top: 1px solid #e5e7eb;
              }
              .footer p {
                color: #6b7280;
                font-size: 12px;
                line-height: 1.5;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Nueva Solicitud de Servicio</h1>
                <p>SatFuncional - Servicio Técnico</p>
              </div>
              
              <div class="content">
                <!-- Datos del Cliente -->
                <div class="section">
                  <div class="section-title">Datos del Cliente</div>
                  <div class="info-row">
                    <div class="info-label">Nombre:</div>
                    <div class="info-value">${name}</div>
                  </div>
                  <div class="info-row">
                    <div class="info-label">Teléfono:</div>
                    <div class="info-value"><a href="tel:${phone}">${phone}</a></div>
                  </div>
                  <div class="info-row">
                    <div class="info-label">Email:</div>
                    <div class="info-value"><a href="mailto:${email}">${email}</a></div>
                  </div>
                </div>

                <!-- Servicio Solicitado -->
                <div class="section">
                  <div class="service-box">
                    <strong>Servicio Solicitado:</strong> ${service}
                  </div>
                </div>

                <!-- Descripción del Problema -->
                <div class="section">
                  <div class="section-title">Descripción del Problema</div>
                  <div class="message-box">
                    <div class="message-text">${message}</div>
                  </div>
                </div>
              </div>

              <div class="footer">
                <p>Este mensaje fue enviado desde el formulario de contacto de SatFuncional</p>
                <p>© 2025 SatFuncional - Todos los derechos reservados</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });
    console.log('Email sent successfully:', data);
    return res.status(200).json({ 
      success: true, 
      data: data 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return res.status(500).json({ 
      error: 'Error al enviar el email',
      details: errorMessage 
    });
  }
}
