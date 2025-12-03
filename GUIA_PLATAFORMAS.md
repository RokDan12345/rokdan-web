# 📚 Guía de Plataformas - SatFuncional Mallorca

**Fecha de creación**: Diciembre 2025  
**Para**: Propietarios de SatFuncional  
**Preparado por**: Equipo de Desarrollo

---

## 🌐 Sitio Web

### Dominio
- **URL**: https://satfuncionalmallorca.com
- **Proveedor**: Vercel (hosting + dominio)
- **Renovación**: Automática anual

### Acceso al Panel de Control
- **Plataforma**: Vercel Dashboard
- **URL**: https://vercel.com/dashboard
- **Cuenta**: `satfuncionalmallorca.web@gmail.com`
- **Función**: Ver deployments, analytics, configurar variables de entorno

---

## 📧 Sistema de Emails

### Resend (Servicio de Envío)
- **URL**: https://resend.com
- **Cuenta**: `satfuncionalmallorca.web@gmail.com`
- **Plan**: Gratuito (3,000 emails/mes)
- **Función**: Envía los emails del formulario de contacto web
- **Email Remitente**: `contacto@satfuncionalmallorca.com`
- **Email Destino**: `satfuncionalmallorca@gmail.com`

### Verificar Emails Recibidos
- **Gmail**: `satfuncionalmallorca@gmail.com`
- Aquí llegan todos los mensajes del formulario de contacto
- Revisa la carpeta "Recibidos" o "Spam" si no los ves

---

## 🔒 Seguridad del Formulario

### Google reCAPTCHA v3
- **URL**: https://www.google.com/recaptcha/admin
- **Cuenta**: (la que se usó para configurar)
- **Función**: Protege el formulario contra spam y bots
- **Tipo**: Invisible (el usuario no tiene que hacer nada)
- **Dominio Verificado**: satfuncionalmallorca.com

---

## 💻 Código Fuente

### GitHub
- **Repositorio**: https://github.com/satfuncionalmallorcaweb/sat-funcional-mallorca-web
- **Cuenta**: `satfuncionalmallorca.web@gmail.com`
- **Función**: Almacena el código del sitio web
- **Importante**: Cada cambio aquí dispara un deploy automático en Vercel

---

## 📊 Cómo Funciona el Sistema

```
Usuario llena formulario
         ↓
reCAPTCHA verifica que no es un bot
         ↓
Formulario envía datos a Vercel
         ↓
Vercel ejecuta función serverless (api/send-email.js)
         ↓
Resend envía email profesional
         ↓
Email llega a satfuncionalmallorca@gmail.com
```

---

## ✅ Tareas de Mantenimiento

### Mensual
- [ ] Revisar analytics en Vercel para ver visitas
- [ ] Verificar que los emails llegan correctamente
- [ ] Revisar cuota de emails en Resend (no superar 3,000/mes)

### Anual
- [ ] Renovar dominio (debería ser automático)
- [ ] Revisar credenciales de acceso
- [ ] Actualizar contenido si es necesario

---

## 🆘 Resolución de Problemas

### "No llegan emails del formulario"
1. Verificar que el email destino es correcto en Gmail
2. Revisar carpeta de Spam
3. Ir a Resend → Emails → Ver si se enviaron
4. Contactar soporte técnico si persiste

### "El sitio web está caído"
1. Ir a Vercel Dashboard
2. Revisar estado del deployment
3. Ver logs de errores
4. Contactar soporte técnico

### "Formulario no funciona"
1. Verificar cuota de emails en Resend (límite 3,000/mes)
2. Revisar reCAPTCHA en Google Admin
3. Contactar soporte técnico

---

## 📞 Soporte Técnico

### Para Cambios en el Sitio
- Contactar al desarrollador
- Todos los cambios deben hacerse a través de GitHub
- Los deploys son automáticos (1-2 minutos)

### Para Problemas Urgentes
- Revisar esta guía primero
- Verificar accesos a las plataformas
- Documentar el error (screenshots, mensajes)
- Contactar soporte

---

## 🔑 Credenciales Importantes

### Cuenta Principal de Servicios
- **Email**: `satfuncionalmallorca.web@gmail.com`
- **Usado en**: GitHub, Vercel, Resend, reCAPTCHA
- **Importante**: NO usar para comunicación con clientes

### Cuenta de Administración (Recibe Contactos)
- **Email**: `satfuncionalmallorca@gmail.com`
- **Usado para**: Recibir emails del formulario web
- **Importante**: Revisar diariamente

---

## 📝 Notas Adicionales

### WhatsApp
- El botón en la web abre WhatsApp directamente
- Número: +34 632 208 757
- No requiere configuración adicional

### Horarios Mostrados
- **Atención telefónica**: 9 a 17h
- **Horario laboral**: 9 a 19h
- Actualizar en el código si cambian

### Servicios Listados
1. Aires Acondicionados
2. Calderas a Gas y Gasoil
3. Lavadoras
4. Lavavajillas
5. Hornos
6. Vitrocerámica
7. Inducción
8. Cocinas a Gas
9. Neveras
10. Campanas Extractoras
11. Televisores
12. Calentadores de Agua

---

## 🎯 Próximos Pasos (Opcional)

- [ ] Configurar Google Analytics para más métricas
- [ ] Agregar más fotos de trabajos realizados
- [ ] Crear página de testimonios
- [ ] Agregar sección de preguntas frecuentes
- [ ] Integrar calendario de citas online

---

**Última actualización**: Diciembre 2025  
**Versión del documento**: 1.0
