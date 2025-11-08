import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface RequestBody {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export default async function handler(req: { method?: string; body: RequestBody }, res: { status: (code: number) => { json: (data: unknown) => void } }) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, email, service, message } = req.body;

    // Validate required fields
    if (!name || !phone || !email || !service || !message) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'SatFuncional <onboarding@resend.dev>', // En producción cambiarás esto por tu dominio verificado
      to: ['lucas.workspace.1997@gmail.com'],
      subject: `Nueva solicitud de servicio: ${service}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 28px;
              }
              .content {
                background: #f9f9f9;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
                padding: 15px;
                background: white;
                border-radius: 5px;
                border-left: 4px solid #ff6b35;
              }
              .field-label {
                font-weight: bold;
                color: #2c3e50;
                font-size: 14px;
                text-transform: uppercase;
                margin-bottom: 5px;
              }
              .field-value {
                color: #555;
                font-size: 16px;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 2px solid #eee;
                text-align: center;
                color: #777;
                font-size: 12px;
              }
              .highlight {
                background: #fff3cd;
                padding: 15px;
                border-radius: 5px;
                border-left: 4px solid #ffc107;
                margin: 20px 0;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>📧 Nueva Solicitud de Servicio</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">SatFuncional - Servicio Técnico</p>
            </div>
            
            <div class="content">
              <div class="highlight">
                <strong>🔧 Servicio Solicitado:</strong> ${service}
              </div>

              <div class="field">
                <div class="field-label">👤 Nombre del Cliente</div>
                <div class="field-value">${name}</div>
              </div>

              <div class="field">
                <div class="field-label">📞 Teléfono</div>
                <div class="field-value"><a href="tel:${phone}">${phone}</a></div>
              </div>

              <div class="field">
                <div class="field-label">📧 Email</div>
                <div class="field-value"><a href="mailto:${email}">${email}</a></div>
              </div>

              <div class="field">
                <div class="field-label">📝 Descripción del Problema</div>
                <div class="field-value">${message}</div>
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
